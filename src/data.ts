export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
  iconName: string;
  description: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  type: string;
  highlights: string[];
  skillsUsed: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  gpaOrGrade?: string;
  badge: string;
}

export const SKILLS: Skill[] = [
  // CMS & E-Commerce
  {
    name: "WordPress Core",
    level: 95,
    category: "CMS & E-Commerce",
    iconName: "Globe",
    description: "Expert level custom architecture, theme hooks, template hierarchies, and core configuration."
  },
  {
    name: "WooCommerce",
    level: 92,
    category: "CMS & E-Commerce",
    iconName: "ShoppingBag",
    description: "Custom checkout flow modification, custom gateways, product dynamic query pipelines, and hook customization."
  },
  {
    name: "Custom Themes",
    level: 95,
    category: "CMS & E-Commerce",
    iconName: "Cpu",
    description: "Developing blazing-fast custom themes from scratch following official WP standards."
  },
  {
    name: "Plugin Customization",
    level: 90,
    category: "CMS & E-Commerce",
    iconName: "Sliders",
    description: "Writing and extending plugins safely via action/filter hooks without breaking future updates."
  },

  // Page Builders
  {
    name: "Elementor Pro",
    level: 98,
    category: "Page Builders",
    iconName: "LayoutTemplate",
    description: "Creating highly customized premium widgets, dynamic content layouts, and advanced parallax landing pages."
  },
  {
    name: "WPBakery Builder",
    level: 88,
    category: "Page Builders",
    iconName: "Layout",
    description: "Extending visual builder with custom shortcodes and managing intricate legacy layouts."
  },

  // Frontend & Backend
  {
    name: "PHP",
    level: 90,
    category: "Frontend & Backend",
    iconName: "Terminal",
    description: "Object-oriented PHP, WordPress REST API extensions, custom WP_Query pipelines, and secure data sanitization."
  },
  {
    name: "JavaScript",
    level: 85,
    category: "Frontend & Backend",
    iconName: "Braces",
    description: "Vanilla ES6+, AJAX interactive operations, custom theme sliders, stateful micro-services, and animations."
  },
  {
    name: "HTML5 & CSS3",
    level: 95,
    category: "Frontend & Backend",
    iconName: "Code2",
    description: "Semantic layouts, customized flex/grid systems, pixel-perfect responsive media queries, and utility classes."
  },
  {
    name: "MySQL",
    level: 85,
    category: "Frontend & Backend",
    iconName: "Database",
    description: "Database query optimization, transient management, custom tables creation, and backup structures."
  },

  // Design & UI/UX
  {
    name: "Canva Pro Mastery",
    level: 90,
    category: "Design & UI/UX",
    iconName: "Palette",
    description: "Rapid design of premium high-converting visual assets, modern branding kits, and social elements."
  },
  {
    name: "Web Asset Design",
    level: 92,
    category: "Design & UI/UX",
    iconName: "Figma",
    description: "Designing bespoke landing page wireframes, user journeys, vector badges, and responsive wire structures."
  },
  {
    name: "Responsive Layouts",
    level: 96,
    category: "Design & UI/UX",
    iconName: "Smartphone",
    description: "Aesthetic layouts designed from scratch to look stunning on mobile displays, iPads, and high-DPI screens."
  },

  // Performance
  {
    name: "Speed Optimization",
    level: 95,
    category: "Performance",
    iconName: "Zap",
    description: "Advanced page speed engineering (95+ Lighthouse score): WebP assets, advanced minification, asset deferral, and page caching."
  },
  {
    name: "Security Auditing",
    level: 88,
    category: "Performance",
    iconName: "Shield",
    description: "Vulnerability scanning, database prefix security, login endpoint hardening, and safe malware scanning protocols."
  },
  {
    name: "Technical Debugging",
    level: 94,
    category: "Performance",
    iconName: "Wrench",
    description: "Diagnosing server errors, database corruption, critical PHP memory crashes, and responsive layout conflicts."
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Brandilyst",
    role: "Senior WordPress Developer",
    duration: "Jun 2025 – Mar 2026",
    type: "Remote",
    highlights: [
      "Led full-cycle design and deployment of 15+ highly optimized e-commerce and corporate platforms.",
      "Engineered bespoke custom WordPress child-themes, boosting Core Web Vitals to 95+ scores.",
      "Customized WooCommerce checkout models, checkout triggers, and integrated custom regional payment systems.",
      "Mentored junior team members in writing clean, hook-centric PHP code conforming to WordPress core guidelines."
    ],
    skillsUsed: ["WordPress Core", "WooCommerce", "PHP", "Speed Optimization", "Elementor Pro"]
  },
  {
    company: "Contact VA",
    role: "Senior WordPress Developer",
    duration: "2024 – 2025",
    type: "Remote",
    highlights: [
      "Designed and coded 35+ landing pages and sales funnels utilizing Elementor Pro with custom CSS and JS extensions.",
      "Optimized load speeds across client websites, slashing page-render latencies by an average of 42%.",
      "Created reusable custom shortcodes and Gutenberg blocks to allow client administrative teams to publish content rapidly.",
      "Conducted weekly security audits, resolving malware threats and ensuring zero-downtime operations."
    ],
    skillsUsed: ["Elementor Pro", "WPBakery Builder", "JavaScript", "HTML5 & CSS3", "Security Auditing"]
  },
  {
    company: "Nehal Solutions",
    role: "Senior WordPress Developer",
    duration: "2022 – 2023",
    type: "Project Based",
    highlights: [
      "Developed custom corporate portals and multi-vendor marketplaces using WooCommerce and custom product query systems.",
      "Configured secure third-party API integrations for dynamic shipping rates, sales tax estimation, and CRM systems.",
      "Translated complex creative wireframes into pixel-perfect responsive layouts with custom interactive effects.",
      "Designed vector assets and web banners for corporate client branding campaigns."
    ],
    skillsUsed: ["WooCommerce", "Custom Themes", "Plugin Customization", "Web Asset Design", "MySQL"]
  },
  {
    company: "FlyHiDigital",
    role: "Senior WordPress Developer",
    duration: "2021 – 2022",
    type: "Project Based",
    highlights: [
      "Architected clean, responsive WordPress sites from conceptual prototypes with strong focus on CTA visibility.",
      "Developed custom theme configurations with Elementor Pro, minimizing dependency on third-party bloated plugins.",
      "Implemented localized SEO best practices, meta structured schemas, and optimized crawl budgets.",
      "Created vector illustrations and design assets using Canva Pro and Adobe Illustrator layouts."
    ],
    skillsUsed: ["WordPress Core", "Elementor Pro", "Canva Pro Mastery", "Responsive Layouts", "Speed Optimization"]
  },
  {
    company: "Tech Remedys",
    role: "WordPress Developer & Graphic Designer",
    duration: "2020 – 2021",
    type: "Remote",
    highlights: [
      "Designed corporate marketing materials, logos, and web layouts, bridging the gap between raw graphics and final code.",
      "Maintained and updated 20+ active WordPress sites, implementing client content requests and resolving bugs.",
      "Optimized legacy websites to be mobile-friendly, increasing mobile conversions by 28%.",
      "Created visual social media branding templates and assets using Canva Pro."
    ],
    skillsUsed: ["WordPress Core", "HTML5 & CSS3", "Canva Pro Mastery", "Web Asset Design", "Technical Debugging"]
  },
  {
    company: "IT Concepts",
    role: "WordPress Developer & Graphic Designer",
    duration: "2019 – 2020",
    type: "Onsite",
    highlights: [
      "Delivered creative layouts and fully responsive WordPress solutions for onsite local and regional clients.",
      "Configured hosting server migrations, DNS routing, domain configurations, and SSL certificates.",
      "Designed client marketing kits, vector graphics, flyers, and branding packages.",
      "Managed client onboarding calls to scope project timelines and present visual theme mockups."
    ],
    skillsUsed: ["WordPress Core", "HTML5 & CSS3", "Canva Pro Mastery", "WPBakery Builder", "Technical Debugging"]
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    degree: "BS Computer Science (BSCS)",
    institution: "University of Karachi",
    duration: "2019 – 2023",
    badge: "Computer Science Core"
  },
  {
    degree: "Advanced Diploma in Software Engineering (ADSE)",
    institution: "Aptech Computer Education",
    duration: "2018 – 2022",
    badge: "Full-Stack Development Specialist"
  }
];

export interface Snippet {
  id: string;
  title: string;
  description: string;
  category: string;
  code: string;
}

export const SNIPPETS: Snippet[] = [
  {
    id: "woo-checkout",
    title: "WooCommerce Custom Checkout Field",
    description: "Incorporate a secure corporate custom VAT or Delivery Instruction input block directly into checkout and save it.",
    category: "WooCommerce Hooks",
    code: `// 1. Display custom field on WooCommerce checkout
add_filter( 'woocommerce_checkout_fields' , 'sak_custom_checkout_fields' );

function sak_custom_checkout_fields( $fields ) {
    $fields['billing']['billing_delivery_notes'] = array(
        'type'        => 'text',
        'label'       => __('Delivery Special Notes', 'sak-theme'),
        'placeholder' => __('e.g., Ring bell, leave at front gate...', 'sak-theme'),
        'required'    => false,
        'class'       => array('form-row-wide'),
        'clear'       => true
    );
    return $fields;
}

// 2. Save value to order metadata securely
add_action( 'woocommerce_checkout_update_order_meta', 'sak_save_checkout_fields' );

function sak_save_checkout_fields( $order_id ) {
    if ( ! empty( $_POST['billing_delivery_notes'] ) ) {
        update_post_meta( $order_id, '_billing_delivery_notes', sanitize_text_field( $_POST['billing_delivery_notes'] ) );
    }
}`
  },
  {
    id: "disable-gutenberg",
    title: "Disable Gutenberg Editor (Classic Fallback)",
    description: "Safely deactivate Gutenberg visual blocks, switching back to the lightweight classic interface.",
    category: "Core Hacks",
    code: `// Disable Gutenberg blocks editor for posts/pages
add_filter('use_block_editor_for_post', 'sak_disable_gutenberg', 10, 2);

function sak_disable_gutenberg($use_block_editor, $post_type) {
    // Force classical editor for general page building structures
    return false;
}

// Dequeue Gutenberg block CSS library to minimize HTTP requests & payload
add_action( 'wp_enqueue_scripts', 'sak_remove_gutenberg_styles', 100 );

function sak_remove_gutenberg_styles() {
    wp_dequeue_style( 'wp-block-library' );
    wp_dequeue_style( 'wp-block-library-theme' );
    wp_dequeue_style( 'wc-blocks-style' ); // WooCommerce block CSS
}`
  },
  {
    id: "rest-auth",
    title: "Secure Custom WP REST API Endpoint",
    description: "Generate a custom, safe WP REST endpoint with secure, robust validation layers.",
    category: "REST API",
    code: `// Register custom REST API route safely
add_action( 'rest_api_init', 'sak_register_custom_api_endpoints' );

function sak_register_custom_api_endpoints() {
    register_rest_route( 'sak/v1', '/speed-metrics/', array(
        'methods'             => 'GET',
        'callback'            => 'sak_get_performance_data',
        'permission_callback' => 'sak_verify_api_handshake',
    ) );
}

function sak_verify_api_handshake( $request ) {
    // Validate request header API Secret Key safely
    $api_key = $request->get_header('X-SAK-API-Secret');
    return ($api_key === 'SHAKEEB_SECURE_METRIC_TOKEN_99');
}

function sak_get_performance_data() {
    return new WP_REST_Response( array(
        'engine' => 'WordPress-Custom-Core',
        'speed_index' => '99/100',
        'caching' => 'Redis-Active',
        'status' => 'Perfect'
    ), 200 );
}`
  },
  {
    id: "speed-headers",
    title: "Performance & Security Apache Headers",
    description: "Maximize browser caching parameters and trigger HTTP security flags directly.",
    category: "Server Speed",
    code: `# Secure browser caches and security directives (.htaccess snippet)
<IfModule mod_headers.c>
    # 1. Enable HSTS (Strict-Transport-Security)
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
    
    # 2. Prevent clickjacking
    Header always set X-Frame-Options "SAMEORIGIN"
    
    # 3. Block XSS attacks
    Header always set X-XSS-Protection "1; mode=block"
    
    # 4. Configure Browser Caching (1 Year for images/styles)
    <FilesMatch "\\\.(ico|pdf|flv|jpg|jpeg|png|gif|webp|js|css|swf)$">
        Header set Cache-Control "max-age=31536000, public"
    </FilesMatch>
</IfModule>`
  }
];
