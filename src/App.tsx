import React, { useState, useEffect } from "react";
import { GeroldHome } from "./components/GeroldHome";

export default function App() {
  return (
    <div className="min-h-screen bg-[#07030e] text-[#f3f4f6] font-sans antialiased selection:bg-purple-600/40 selection:text-white relative">
      <GeroldHome />
    </div>
  );
}
