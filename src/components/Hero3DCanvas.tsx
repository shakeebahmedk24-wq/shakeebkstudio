import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { Sparkles, Compass, Eye, RefreshCw, Zap } from "lucide-react";

interface Hero3DCanvasProps {
  className?: string;
}

export type ThemePreset = "purple" | "cyber" | "gold" | "matrix";

export function Hero3DCanvas({ className = "" }: Hero3DCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeTheme, setActiveTheme] = useState<ThemePreset>("purple");
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const [interactionCount, setInteractionCount] = useState<number>(0);
  const [show3dControls, setShow3dControls] = useState<boolean>(false);

  // References to keep animation loop clean and garbage-collection free
  const animFrameIdRef = useRef<number>(0);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const coreGroupRef = useRef<THREE.Group | null>(null);
  const particlesMeshRef = useRef<THREE.Points | null>(null);
  const satellitesRef = useRef<THREE.Group[]>([]);
  const themeRef = useRef<ThemePreset>("purple");
  const isRotatingRef = useRef<boolean>(true);

  // Mouse & interaction state
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number; isDown: boolean }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    isDown: false
  });
  const pulseRef = useRef<number>(0);

  // Keep themeRef and isRotatingRef updated
  useEffect(() => {
    themeRef.current = activeTheme;
    updateThemeColors(activeTheme);
  }, [activeTheme]);

  useEffect(() => {
    isRotatingRef.current = isRotating;
  }, [isRotating]);

  // Color palletes for themes
  const colorThemes: Record<
    ThemePreset,
    {
      ring1: number;
      ring2: number;
      ring3: number;
      particles: number;
      satellites: number;
      accent: string;
      label: string;
    }
  > = {
    purple: {
      ring1: 0xa855f7,
      ring2: 0x6366f1,
      ring3: 0xc084fc,
      particles: 0x9333ea,
      satellites: 0x818cf8,
      accent: "text-purple-400 border-purple-500/50 bg-purple-950/40",
      label: "Cosmic Violet"
    },
    cyber: {
      ring1: 0x06b6d4,
      ring2: 0x3b82f6,
      ring3: 0x10b981,
      particles: 0x0ea5e9,
      satellites: 0x06b6d4,
      accent: "text-cyan-400 border-cyan-500/50 bg-cyan-950/40",
      label: "Cyber Neon"
    },
    gold: {
      ring1: 0xf59e0b,
      ring2: 0xd97706,
      ring3: 0xfbbf24,
      particles: 0xf59e0b,
      satellites: 0xfef08a,
      accent: "text-amber-400 border-amber-500/50 bg-amber-950/40",
      label: "Prestige Gold"
    },
    matrix: {
      ring1: 0x10b981,
      ring2: 0x059669,
      ring3: 0x34d399,
      particles: 0x059669,
      satellites: 0x6ee7b7,
      accent: "text-emerald-400 border-emerald-500/50 bg-emerald-950/40",
      label: "Matrix Emerald"
    }
  };

  const updateThemeColors = (themeKey: ThemePreset) => {
    const theme = colorThemes[themeKey];
    if (!coreGroupRef.current) return;

    // Update rings
    const rings = coreGroupRef.current.children.filter((c) => c.name.startsWith("ring_"));
    rings.forEach((ring, i) => {
      if (ring instanceof THREE.Mesh && ring.material instanceof THREE.MeshPhysicalMaterial) {
        const col = i === 0 ? theme.ring1 : i === 1 ? theme.ring2 : theme.ring3;
        ring.material.color.setHex(col);
        ring.material.emissive.setHex(col);
        ring.material.emissiveIntensity = 0.25;
      }
    });

    // Update satellites
    satellitesRef.current.forEach((sat) => {
      sat.children.forEach((child) => {
        if (child instanceof THREE.Mesh) {
          if (child.material instanceof THREE.MeshPhysicalMaterial) {
            child.material.color.setHex(theme.satellites);
          } else if (child.material instanceof THREE.MeshBasicMaterial) {
            child.material.color.setHex(theme.ring1);
          }
        }
      });
    });

    // Update particle colors
    if (particlesMeshRef.current && particlesMeshRef.current.geometry) {
      const geo = particlesMeshRef.current.geometry;
      const colorAttr = geo.getAttribute("color") as THREE.BufferAttribute;
      if (colorAttr) {
        const c1 = new THREE.Color(theme.particles);
        const c2 = new THREE.Color(theme.ring2);
        const count = colorAttr.count;
        for (let i = 0; i < count; i++) {
          const ratio = Math.random();
          const col = c1.clone().lerp(c2, ratio);
          colorAttr.setXYZ(i, col.r, col.g, col.b);
        }
        colorAttr.needsUpdate = true;
      }
    }
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect software WebGL per Three.js guidelines
    const isSoftwareGl = (() => {
      try {
        const gl = document.createElement("canvas").getContext("webgl2");
        if (!gl) return true;
        const ext = gl.getExtension("WEBGL_debug_renderer_info");
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension("WEBGL_lose_context")?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return false;
      }
    })();

    // 1. Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x07030e, 0.035);

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 16);

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isSoftwareGl,
      powerPreference: "high-performance"
    });
    rendererRef.current = renderer;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // 4. Studio Environment Reflection (RoomEnvironment)
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // 5. Lighting rig
    const ambientLight = new THREE.AmbientLight(0x2e1065, 1.2);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xc084fc, 0x0f172a, 1.5);
    scene.add(hemiLight);

    const keyLight = new THREE.DirectionalLight(0xa855f7, 3.2);
    keyLight.position.set(5, 8, 8);
    keyLight.castShadow = !isSoftwareGl;
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0x38bdf8, 2.5, 30);
    rimLight.position.set(-8, -4, 5);
    scene.add(rimLight);

    // 6. Central Gyroscope Rings (3 Nested Toruses)
    const coreGroup = new THREE.Group();
    coreGroupRef.current = coreGroup;
    scene.add(coreGroup);

    const ringMat1 = new THREE.MeshPhysicalMaterial({
      color: 0xa855f7,
      metalness: 0.9,
      roughness: 0.18,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      emissive: 0x7e22ce,
      emissiveIntensity: 0.2
    });

    const ringMat2 = new THREE.MeshPhysicalMaterial({
      color: 0x6366f1,
      metalness: 0.92,
      roughness: 0.22,
      clearcoat: 1.0,
      clearcoatRoughness: 0.15,
      emissive: 0x4338ca,
      emissiveIntensity: 0.2
    });

    const ringMat3 = new THREE.MeshPhysicalMaterial({
      color: 0xc084fc,
      metalness: 0.88,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      emissive: 0x9333ea,
      emissiveIntensity: 0.25
    });

    // Outer Ring 1
    const ringGeo1 = new THREE.TorusGeometry(4.2, 0.055, 32, 100);
    const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringMesh1.name = "ring_1";
    coreGroup.add(ringMesh1);

    // Mid Ring 2 (Tilted)
    const ringGeo2 = new THREE.TorusGeometry(3.6, 0.05, 32, 100);
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.x = Math.PI / 3;
    ringMesh2.rotation.y = Math.PI / 6;
    ringMesh2.name = "ring_2";
    coreGroup.add(ringMesh2);

    // Inner Ring 3 (Cross Tilted)
    const ringGeo3 = new THREE.TorusGeometry(3.0, 0.045, 32, 100);
    const ringMesh3 = new THREE.Mesh(ringGeo3, ringMat3);
    ringMesh3.rotation.x = -Math.PI / 4;
    ringMesh3.rotation.z = Math.PI / 3;
    ringMesh3.name = "ring_3";
    coreGroup.add(ringMesh3);

    // Central Radiant Core Crystal
    const coreCrystalGeo = new THREE.IcosahedronGeometry(1.2, 1);
    const coreCrystalMat = new THREE.MeshPhysicalMaterial({
      color: 0x9333ea,
      metalness: 0.3,
      roughness: 0.1,
      transmission: 0.65,
      thickness: 1.2,
      ior: 1.6,
      emissive: 0x581c87,
      emissiveIntensity: 0.4,
      wireframe: false
    });
    const coreCrystal = new THREE.Mesh(coreCrystalGeo, coreCrystalMat);
    coreGroup.add(coreCrystal);

    // Wireframe Cage for the Core
    const cageGeo = new THREE.IcosahedronGeometry(1.4, 1);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0xd8b4fe,
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    coreGroup.add(cageMesh);

    // 7. Floating Orbiting Satellites (8 Polyhedral Nodes representing Tech & Design)
    const satellites: THREE.Group[] = [];
    const satelliteGeos = [
      new THREE.OctahedronGeometry(0.35, 0),
      new THREE.TetrahedronGeometry(0.35, 0),
      new THREE.IcosahedronGeometry(0.32, 0),
      new THREE.DodecahedronGeometry(0.3, 0),
      new THREE.OctahedronGeometry(0.28, 0),
      new THREE.TetrahedronGeometry(0.32, 0),
      new THREE.IcosahedronGeometry(0.26, 0),
      new THREE.DodecahedronGeometry(0.28, 0)
    ];

    satelliteGeos.forEach((geo, i) => {
      const satGroup = new THREE.Group();
      const satMat = new THREE.MeshPhysicalMaterial({
        color: 0x818cf8,
        metalness: 0.85,
        roughness: 0.2,
        clearcoat: 1.0,
        emissive: 0x4f46e5,
        emissiveIntensity: 0.3
      });
      const solidMesh = new THREE.Mesh(geo, satMat);
      satGroup.add(solidMesh);

      // Outer wireframe halo
      const wireMat = new THREE.MeshBasicMaterial({
        color: 0xc084fc,
        wireframe: true,
        transparent: true,
        opacity: 0.5
      });
      const wireMesh = new THREE.Mesh(geo.clone().scale(1.25, 1.25, 1.25), wireMat);
      satGroup.add(wireMesh);

      // Orbital parameters
      const radius = 5.2 + (i % 3) * 0.9;
      const angle = (i / 8) * Math.PI * 2;
      const heightOffset = ((i % 4) - 1.5) * 1.4;
      satGroup.position.set(Math.cos(angle) * radius, heightOffset, Math.sin(angle) * radius);
      satGroup.userData = {
        radius,
        angle,
        speed: 0.25 + (i % 3) * 0.1,
        verticalSpeed: 0.4 + (i % 2) * 0.2,
        heightOffset,
        rotSpeedX: 0.8 + Math.random() * 0.5,
        rotSpeedY: 0.8 + Math.random() * 0.5
      };

      scene.add(satGroup);
      satellites.push(satGroup);
    });
    satellitesRef.current = satellites;

    // 8. 3D Wave Particle Stardust Cloud (1,000 Particles)
    const particleCount = 1000;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);

    const col1 = new THREE.Color(0xa855f7);
    const col2 = new THREE.Color(0x38bdf8);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.5 + Math.random() * 11;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta) * 0.6;
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      const mixed = col1.clone().lerp(col2, Math.random());
      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Circular particle texture via HTML5 2D Canvas per Three.js zero-404 guidelines
    const canvas2d = document.createElement("canvas");
    canvas2d.width = 64;
    canvas2d.height = 64;
    const ctx = canvas2d.getContext("2d")!;
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
    grad.addColorStop(0, "rgba(255, 255, 255, 1)");
    grad.addColorStop(0.2, "rgba(200, 160, 255, 0.8)");
    grad.addColorStop(0.6, "rgba(168, 85, 247, 0.3)");
    grad.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);

    const particleTexture = new THREE.CanvasTexture(canvas2d);
    particleTexture.colorSpace = THREE.SRGBColorSpace;

    const particleMat = new THREE.PointsMaterial({
      size: 0.28,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particlesMesh = new THREE.Points(particleGeo, particleMat);
    scene.add(particlesMesh);
    particlesMeshRef.current = particlesMesh;

    // 9. Pointer Move & Touch Listeners
    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current.targetX = normX;
      mouseRef.current.targetY = normY;
    };

    const handlePointerDown = () => {
      mouseRef.current.isDown = true;
      pulseRef.current = 1.0; // Trigger radiant shockwave impulse
      setInteractionCount((c) => c + 1);
    };

    const handlePointerUp = () => {
      mouseRef.current.isDown = false;
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    container.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("mouseup", handlePointerUp);

    // 10. Resize Observer
    const handleResize = () => {
      if (!container || !rendererRef.current) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // 11. Animation Tick Loop
    const clock = new THREE.Clock();

    const tick = () => {
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Smooth mouse damping
      mouseRef.current.x = THREE.MathUtils.damp(mouseRef.current.x, mouseRef.current.targetX, 4, delta);
      mouseRef.current.y = THREE.MathUtils.damp(mouseRef.current.y, mouseRef.current.targetY, 4, delta);

      // Damped camera tilt based on mouse position
      camera.position.x = THREE.MathUtils.damp(camera.position.x, mouseRef.current.x * 2.5, 3, delta);
      camera.position.y = THREE.MathUtils.damp(camera.position.y, mouseRef.current.y * 2.0, 3, delta);
      camera.lookAt(0, 0, 0);

      // Core rotation with momentum
      if (coreGroupRef.current) {
        const rotMul = isRotatingRef.current ? 1 : 0.15;
        coreGroupRef.current.rotation.y += delta * 0.4 * rotMul;
        coreGroupRef.current.rotation.x = THREE.MathUtils.damp(
          coreGroupRef.current.rotation.x,
          mouseRef.current.y * 0.35,
          3,
          delta
        );
        coreGroupRef.current.rotation.z = THREE.MathUtils.damp(
          coreGroupRef.current.rotation.z,
          -mouseRef.current.x * 0.25,
          3,
          delta
        );

        // Individual ring counter-rotations
        ringMesh1.rotation.z += delta * 0.5 * rotMul;
        ringMesh2.rotation.y += delta * 0.7 * rotMul;
        ringMesh3.rotation.x -= delta * 0.6 * rotMul;

        // Core crystal tumble
        coreCrystal.rotation.y += delta * 0.8 * rotMul;
        coreCrystal.rotation.x += delta * 0.5 * rotMul;
        cageMesh.rotation.y -= delta * 0.6 * rotMul;
        cageMesh.rotation.z += delta * 0.4 * rotMul;

        // Pulse scale expansion on click
        if (pulseRef.current > 0.01) {
          pulseRef.current = THREE.MathUtils.damp(pulseRef.current, 0, 3.5, delta);
          const pulseScale = 1.0 + pulseRef.current * 0.35;
          coreGroupRef.current.scale.set(pulseScale, pulseScale, pulseScale);
        } else {
          coreGroupRef.current.scale.set(1, 1, 1);
        }
      }

      // Orbiting satellites kinematics
      satellitesRef.current.forEach((sat) => {
        const u = sat.userData;
        const rotMul = isRotatingRef.current ? 1 : 0.2;
        u.angle += delta * u.speed * rotMul;
        const currentAngle = u.angle;
        sat.position.x = Math.cos(currentAngle) * u.radius;
        sat.position.z = Math.sin(currentAngle) * u.radius;
        sat.position.y = u.heightOffset + Math.sin(time * u.verticalSpeed) * 0.6;

        sat.rotation.x += delta * u.rotSpeedX;
        sat.rotation.y += delta * u.rotSpeedY;
      });

      // Wave motion on particles
      if (particlesMeshRef.current && particlesMeshRef.current.geometry) {
        const geo = particlesMeshRef.current.geometry;
        const posAttr = geo.getAttribute("position") as THREE.BufferAttribute;
        const count = posAttr.count;

        for (let i = 0; i < count; i += 4) {
          const origX = originalPositions[i * 3];
          const origY = originalPositions[i * 3 + 1];
          const origZ = originalPositions[i * 3 + 2];

          // Wave displacement
          const wave = Math.sin(time * 1.5 + origX * 0.5 + origZ * 0.3) * 0.25;
          posAttr.setXYZ(i, origX, origY + wave, origZ);
        }
        posAttr.needsUpdate = true;

        particlesMeshRef.current.rotation.y = time * 0.04;
      }

      // Render frame
      renderer.render(scene, camera);
      animFrameIdRef.current = requestAnimationFrame(tick);
    };

    animFrameIdRef.current = requestAnimationFrame(tick);

    // 12. Cleanup on unmount
    return () => {
      cancelAnimationFrame(animFrameIdRef.current);
      window.removeEventListener("mousemove", handlePointerMove);
      container.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("mouseup", handlePointerUp);
      window.removeEventListener("resize", handleResize);

      // Recursive disposal
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh || obj instanceof THREE.Points) {
          if (obj.geometry) obj.geometry.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else if (obj.material) {
            obj.material.dispose();
          }
        }
      });

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className={`relative w-full h-full select-none ${className}`}>
      {/* 3D WebGL Canvas Container */}
      <div
        ref={mountRef}
        className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing overflow-hidden"
        title="Interactive 3D Universe: Click & move mouse to tilt and orbit"
      />

      {/* Subtle Bottom Ambient Gradient Vignette */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07030e] via-[#07030e]/80 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#07030e] via-[#07030e]/60 to-transparent pointer-events-none" />

      {/* 3D Controls Pill (Compact & Ergonomic per Three.js guidelines) */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 p-1.5 bg-[#0d071d]/85 border border-purple-800/40 rounded-full shadow-[0_0_25px_rgba(168,85,247,0.25)] text-xs backdrop-blur-md">
        {/* Toggle 3D rotation */}
        <button
          onClick={() => setIsRotating(!isRotating)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
            isRotating
              ? "bg-purple-600/30 text-purple-200 border border-purple-500/40"
              : "text-zinc-400 hover:text-white"
          }`}
          title={isRotating ? "Pause 3D Orbit" : "Resume 3D Orbit"}
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isRotating ? "animate-spin" : ""}`} style={{ animationDuration: "6s" }} />
          <span className="hidden sm:inline">{isRotating ? "3D Active" : "3D Paused"}</span>
        </button>

        {/* Pulse / Shockwave button */}
        <button
          onClick={() => {
            pulseRef.current = 1.0;
            setInteractionCount((c) => c + 1);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-zinc-300 hover:text-white hover:bg-purple-900/30 transition-all cursor-pointer"
          title="Send 3D Quantum Energy Pulse"
        >
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden sm:inline">Energy Pulse</span>
        </button>

        {/* Theme presets dropdown toggle */}
        <div className="relative">
          <button
            onClick={() => setShow3dControls(!show3dControls)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${colorThemes[activeTheme].accent}`}
            title="Switch 3D Dimension Style"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{colorThemes[activeTheme].label}</span>
          </button>

          {/* Theme selector popover */}
          {show3dControls && (
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#120a22] border border-purple-700/60 rounded-2xl p-2 shadow-2xl flex flex-col gap-1 min-w-[170px] z-50">
              <span className="text-[10px] font-bold text-zinc-400 px-2.5 py-1 uppercase tracking-wider">
                3D Visual Themes
              </span>
              {(Object.keys(colorThemes) as ThemePreset[]).map((themeKey) => (
                <button
                  key={themeKey}
                  onClick={() => {
                    setActiveTheme(themeKey);
                    setShow3dControls(false);
                  }}
                  className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all text-left cursor-pointer ${
                    activeTheme === themeKey
                      ? "bg-purple-600 text-white font-bold"
                      : "text-zinc-300 hover:text-white hover:bg-purple-900/30"
                  }`}
                >
                  <span>{colorThemes[themeKey].label}</span>
                  <span
                    className="w-2.5 h-2.5 rounded-full border border-white/20"
                    style={{ backgroundColor: `#${colorThemes[themeKey].ring1.toString(16).padStart(6, "0")}` }}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Interactive Helper Hint Badge (Fades after interaction) */}
      {interactionCount === 0 && (
        <div className="absolute top-4 right-4 pointer-events-none hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/40 border border-purple-800/30 text-[11px] text-purple-300/80 backdrop-blur-sm animate-pulse">
          <Compass className="w-3.5 h-3.5 text-purple-400" />
          <span>Interactive 3D: Move mouse or click</span>
        </div>
      )}
    </div>
  );
}
