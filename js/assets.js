/**
 * SoftSolution Visual Assets & SVG Vector Generator
 * Provides pixel-crisp, high-fidelity SVGs for logos, mockups, portraits, flags, and backgrounds.
 */

export const ASSET_MAP = {
  // Logo
  logo: `
    <svg viewBox="0 0 260 52" fill="none" xmlns="http://www.w3.org/2000/svg" class="softsolution-logo-svg">
      <defs>
        <linearGradient id="redGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ef4444" />
          <stop offset="100%" stop-color="#b91c1c" />
        </linearGradient>
        <linearGradient id="blueGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0284c7" />
          <stop offset="100%" stop-color="#0369a1" />
        </linearGradient>
      </defs>
      <!-- S-Swirl Mark -->
      <g transform="translate(4, 2)">
        <path d="M26 6C16 6 8 13 8 22C8 28 13 32 20 34L28 36C33 37 36 39 36 43C36 47 31 50 24 50C16 50 10 45 9 39" stroke="url(#blueGradient)" stroke-width="7" stroke-linecap="round" />
        <path d="M22 6C30 6 38 12 38 21C38 26 34 30 28 32L18 35C12 37 8 40 8 45" stroke="url(#redGradient)" stroke-width="7" stroke-linecap="round" />
      </g>
      <!-- Text -->
      <text x="56" y="27" font-family="'Inter', -apple-system, sans-serif" font-size="24" font-weight="800" fill="#0f172a" letter-spacing="-0.5">
        Soft<tspan fill="#0066cc">Solution</tspan>
      </text>
      <text x="57" y="42" font-family="'Inter', -apple-system, sans-serif" font-size="9" font-weight="600" fill="#dc2626" letter-spacing="0.2">
        Japan - Bangladesh Software Solutions
      </text>
    </svg>
  `,

  // Japan Flag Badge
  flagJapan: `
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="flag-badge">
      <circle cx="32" cy="32" r="30" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
      <circle cx="32" cy="32" r="14" fill="#dc2626"/>
    </svg>
  `,

  // Bangladesh Flag Badge
  flagBangladesh: `
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="flag-badge">
      <circle cx="32" cy="32" r="30" fill="#006a4e" stroke="#004d38" stroke-width="1.5"/>
      <circle cx="28" cy="32" r="13" fill="#f42a41"/>
    </svg>
  `,

  // Tokyo Office Photo Vector
  tokyoOffice: `
    <svg viewBox="0 0 600 380" fill="none" xmlns="http://www.w3.org/2000/svg" class="location-card-img">
      <defs>
        <linearGradient id="tokyoSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#8ec5fc" />
          <stop offset="60%" stop-color="#e0c3fc" />
          <stop offset="100%" stop-color="#fdfbfb" />
        </linearGradient>
        <linearGradient id="fujiGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="35%" stop-color="#cbd5e1" />
          <stop offset="100%" stop-color="#475569" />
        </linearGradient>
      </defs>
      <!-- Sky -->
      <rect width="600" height="380" fill="url(#tokyoSky)"/>
      <!-- Soft Clouds -->
      <ellipse cx="140" cy="80" rx="90" ry="24" fill="#ffffff" opacity="0.6"/>
      <ellipse cx="460" cy="110" rx="120" ry="28" fill="#ffffff" opacity="0.5"/>
      <!-- Mount Fuji -->
      <path d="M120 280 L280 90 L340 90 L500 280 Z" fill="url(#fujiGrad)"/>
      <!-- Snowcap -->
      <path d="M260 115 L280 90 L340 90 L360 115 L345 130 L320 120 L305 135 L285 125 Z" fill="#ffffff"/>
      <!-- Tokyo Skyline Background Silhouette -->
      <rect x="0" y="240" width="600" height="140" fill="#334155" opacity="0.35"/>
      <rect x="30" y="210" width="35" height="170" fill="#1e293b" opacity="0.7"/>
      <rect x="75" y="190" width="40" height="190" fill="#1e293b" opacity="0.8"/>
      <rect x="125" y="225" width="50" height="155" fill="#334155"/>
      <rect x="380" y="185" width="45" height="195" fill="#1e293b" opacity="0.75"/>
      <rect x="435" y="220" width="55" height="160" fill="#334155"/>
      <rect x="500" y="195" width="40" height="185" fill="#1e293b" opacity="0.85"/>
      <!-- Tokyo Tower in Red/White -->
      <g transform="translate(230, 110)">
        <!-- Tower Lattice Structure -->
        <polygon points="40,20 44,20 54,230 30,230" fill="#e11d48"/>
        <!-- Tower Spire -->
        <line x1="42" y1="0" x2="42" y2="40" stroke="#e11d48" stroke-width="3"/>
        <circle cx="42" cy="0" r="2.5" fill="#ffffff"/>
        <!-- Observation Decks -->
        <rect x="34" y="90" width="16" height="14" rx="2" fill="#ffffff" stroke="#e11d48" stroke-width="2"/>
        <rect x="30" y="130" width="24" height="18" rx="2" fill="#ffffff" stroke="#e11d48" stroke-width="2"/>
        <line x1="25" y1="180" x2="59" y2="180" stroke="#ffffff" stroke-width="4"/>
        <line x1="20" y1="230" x2="64" y2="230" stroke="#e11d48" stroke-width="5"/>
      </g>
      <!-- Foreground Modern Tokyo Buildings -->
      <rect x="0" y="280" width="600" height="100" fill="#0f172a"/>
      <!-- Glowing windows -->
      <g fill="#fef08a" opacity="0.75">
        <rect x="85" y="210" width="4" height="6"/><rect x="95" y="210" width="4" height="6"/><rect x="85" y="225" width="4" height="6"/>
        <rect x="390" y="200" width="4" height="6"/><rect x="405" y="200" width="4" height="6"/><rect x="390" y="215" width="4" height="6"/>
        <rect x="510" y="210" width="5" height="7"/><rect x="525" y="210" width="5" height="7"/><rect x="510" y="225" width="5" height="7"/>
      </g>
    </svg>
  `,

  // Dhaka Office Photo Vector
  dhakaOffice: `
    <svg viewBox="0 0 600 380" fill="none" xmlns="http://www.w3.org/2000/svg" class="location-card-img">
      <defs>
        <linearGradient id="dhakaSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#bae6fd" />
          <stop offset="70%" stop-color="#e0f2fe" />
          <stop offset="100%" stop-color="#f0fdf4" />
        </linearGradient>
        <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0284c7" />
          <stop offset="50%" stop-color="#0369a1" />
          <stop offset="100%" stop-color="#075985" />
        </linearGradient>
      </defs>
      <!-- Sky -->
      <rect width="600" height="380" fill="url(#dhakaSky)"/>
      <!-- Clouds -->
      <ellipse cx="200" cy="70" rx="110" ry="25" fill="#ffffff" opacity="0.7"/>
      <ellipse cx="480" cy="90" rx="80" ry="20" fill="#ffffff" opacity="0.6"/>
      <!-- Dhaka Skyline (Dhanmondi / Hatirjheel / Gulshan) -->
      <rect x="40" y="140" width="45" height="120" fill="#64748b" opacity="0.8"/>
      <rect x="95" y="110" width="55" height="150" fill="#334155" opacity="0.85"/>
      <rect x="160" y="130" width="50" height="130" fill="#475569"/>
      <rect x="220" y="160" width="40" height="100" fill="#64748b"/>
      <rect x="360" y="125" width="60" height="135" fill="#334155"/>
      <rect x="430" y="105" width="50" height="155" fill="#1e293b"/>
      <rect x="490" y="145" width="55" height="115" fill="#475569"/>
      <!-- Lush green waterfront trees -->
      <ellipse cx="60" cy="245" rx="50" ry="25" fill="#166534"/>
      <ellipse cx="140" cy="240" rx="60" ry="28" fill="#15803d"/>
      <ellipse cx="230" cy="248" rx="55" ry="22" fill="#16a34a"/>
      <ellipse cx="420" cy="242" rx="70" ry="26" fill="#15803d"/>
      <ellipse cx="510" cy="245" rx="65" ry="24" fill="#166534"/>
      <!-- Hatirjheel Modern Express Bridge Arcs -->
      <path d="M0 250 Q160 215 310 245 T600 250" stroke="#f1f5f9" stroke-width="9" fill="none"/>
      <path d="M60 250 Q170 185 280 250" stroke="#dc2626" stroke-width="5" fill="none"/>
      <path d="M330 250 Q440 190 550 250" stroke="#dc2626" stroke-width="5" fill="none"/>
      <!-- Bridge Stay Cables -->
      <g stroke="#94a3b8" stroke-width="1.5" opacity="0.7">
        <line x1="170" y1="185" x2="110" y2="250"/>
        <line x1="170" y1="185" x2="140" y2="250"/>
        <line x1="170" y1="185" x2="170" y2="250"/>
        <line x1="170" y1="185" x2="200" y2="250"/>
        <line x1="170" y1="185" x2="230" y2="250"/>
        <line x1="440" y1="190" x2="380" y2="250"/>
        <line x1="440" y1="190" x2="410" y2="250"/>
        <line x1="440" y1="190" x2="440" y2="250"/>
        <line x1="440" y1="190" x2="470" y2="250"/>
        <line x1="440" y1="190" x2="500" y2="250"/>
      </g>
      <!-- Beautiful Lake Water with Reflections -->
      <rect x="0" y="255" width="600" height="125" fill="url(#waterGrad)"/>
      <ellipse cx="300" cy="300" rx="250" ry="12" fill="#38bdf8" opacity="0.25"/>
      <ellipse cx="180" cy="330" rx="160" ry="8" fill="#38bdf8" opacity="0.3"/>
      <ellipse cx="450" cy="340" rx="130" ry="7" fill="#38bdf8" opacity="0.25"/>
    </svg>
  `,

  // Hero Panoramic Background Composite (Tokyo on Left, Dhaka on Right, Seamless blending)
  heroComposite: `
    <svg viewBox="0 0 1600 520" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" class="hero-bg-svg">
      <defs>
        <linearGradient id="heroSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#99d6ff" />
          <stop offset="45%" stop-color="#d0ebff" />
          <stop offset="100%" stop-color="#ffffff" />
        </linearGradient>
        <linearGradient id="tokyoDhakaBlend" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#0f172a" stop-opacity="0.25" />
          <stop offset="50%" stop-color="#ffffff" stop-opacity="0.85" />
          <stop offset="100%" stop-color="#0284c7" stop-opacity="0.25" />
        </linearGradient>
        <linearGradient id="bottomFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0" />
          <stop offset="70%" stop-color="#ffffff" stop-opacity="0.7" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="1" />
        </linearGradient>
      </defs>
      <!-- Base Sky -->
      <rect width="1600" height="520" fill="url(#heroSky)" />
      <!-- Soft Cloud Atmosphere -->
      <ellipse cx="280" cy="90" rx="260" ry="50" fill="#ffffff" opacity="0.75" />
      <ellipse cx="800" cy="80" rx="200" ry="40" fill="#ffffff" opacity="0.65" />
      <ellipse cx="1350" cy="110" rx="240" ry="55" fill="#ffffff" opacity="0.7" />

      <!-- Left Side: Mount Fuji Snow Peak -->
      <path d="M-40 400 L180 160 L280 160 L500 400 Z" fill="#94a3b8" opacity="0.65" />
      <path d="M150 200 L180 160 L280 160 L310 200 L285 220 L255 205 L230 225 L195 210 Z" fill="#ffffff" opacity="0.95" />

      <!-- Left Side: Tokyo Tower -->
      <g transform="translate(230, 190) scale(0.95)">
        <polygon points="40,20 44,20 56,260 28,260" fill="#e11d48" opacity="0.9" />
        <line x1="42" y1="-10" x2="42" y2="35" stroke="#e11d48" stroke-width="3.5" />
        <rect x="33" y="90" width="18" height="16" fill="#ffffff" stroke="#e11d48" stroke-width="2" />
        <rect x="29" y="145" width="26" height="20" fill="#ffffff" stroke="#e11d48" stroke-width="2" />
      </g>

      <!-- Tokyo Skyline Buildings -->
      <rect x="0" y="320" width="70" height="180" fill="#475569" opacity="0.5" />
      <rect x="80" y="290" width="55" height="210" fill="#334155" opacity="0.6" />
      <rect x="145" y="330" width="60" height="170" fill="#475569" opacity="0.55" />
      <rect x="310" y="300" width="80" height="200" fill="#334155" opacity="0.6" />
      <rect x="400" y="340" width="75" height="160" fill="#475569" opacity="0.5" />

      <!-- Right Side: Dhaka Hatirjheel Bridge & Waterfront -->
      <path d="M1000 390 Q1280 300 1590 380" stroke="#dc2626" stroke-width="7" fill="none" opacity="0.8" />
      <path d="M960 410 Q1280 340 1600 410" stroke="#ffffff" stroke-width="12" fill="none" opacity="0.9" />
      <g stroke="#64748b" stroke-width="2" opacity="0.65">
        <line x1="1280" y1="310" x2="1180" y2="400" />
        <line x1="1280" y1="310" x2="1230" y2="400" />
        <line x1="1280" y1="310" x2="1280" y2="400" />
        <line x1="1280" y1="310" x2="1330" y2="400" />
        <line x1="1280" y1="310" x2="1380" y2="400" />
      </g>

      <!-- Dhaka Green Waterfront & Towers -->
      <ellipse cx="1120" cy="400" rx="90" ry="30" fill="#15803d" opacity="0.75" />
      <ellipse cx="1380" cy="395" rx="100" ry="32" fill="#166534" opacity="0.75" />
      <rect x="1060" y="270" width="65" height="150" fill="#334155" opacity="0.6" />
      <rect x="1135" y="240" width="70" height="180" fill="#1e293b" opacity="0.7" />
      <rect x="1340" y="260" width="85" height="160" fill="#334155" opacity="0.65" />
      <rect x="1440" y="220" width="80" height="200" fill="#1e293b" opacity="0.75" />

      <!-- Water Lake with Reflections on Right -->
      <rect x="960" y="415" width="640" height="105" fill="#0284c7" opacity="0.3" />
      <ellipse cx="1280" cy="460" rx="280" ry="16" fill="#38bdf8" opacity="0.4" />

      <!-- Foreground White Fog & Soft Radial Readability Layer for Hero Text -->
      <rect width="1600" height="520" fill="url(#bottomFade)" />
      <rect width="1600" height="520" fill="url(#tokyoDhakaBlend)" />
    </svg>
  `,

  // Portfolio Mockup 1: Sales Force Automation (Laptop + Mobile Phone)
  portfolioSalesForce: `
    <svg viewBox="0 0 500 320" fill="none" xmlns="http://www.w3.org/2000/svg" class="portfolio-card-img">
      <defs>
        <linearGradient id="screenBg1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f8fafc" />
          <stop offset="100%" stop-color="#e2e8f0" />
        </linearGradient>
      </defs>
      <!-- Background subtle gradient -->
      <rect width="500" height="320" fill="#f1f5f9" />

      <!-- Laptop Mockup -->
      <g transform="translate(40, 30)">
        <!-- Screen Outer Bezel -->
        <rect x="0" y="0" width="300" height="190" rx="8" fill="#1e293b" />
        <circle cx="150" cy="6" r="2" fill="#64748b" />
        <!-- Screen Content -->
        <rect x="8" y="12" width="284" height="170" fill="url(#screenBg1)" />
        <!-- Top bar -->
        <rect x="8" y="12" width="284" height="16" fill="#0066cc" />
        <rect x="16" y="16" width="30" height="8" rx="2" fill="#ffffff" opacity="0.8" />
        <circle cx="280" cy="20" r="4" fill="#ffffff" opacity="0.8" />
        <!-- Dashboard Panels -->
        <!-- KPI Row -->
        <rect x="16" y="34" width="60" height="32" rx="3" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />
        <rect x="22" y="38" width="24" height="4" fill="#94a3b8" />
        <rect x="22" y="46" width="40" height="8" fill="#0284c7" />

        <rect x="84" y="34" width="60" height="32" rx="3" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />
        <rect x="90" y="38" width="24" height="4" fill="#94a3b8" />
        <rect x="90" y="46" width="40" height="8" fill="#10b981" />

        <rect x="152" y="34" width="60" height="32" rx="3" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />
        <rect x="158" y="38" width="24" height="4" fill="#94a3b8" />
        <rect x="158" y="46" width="40" height="8" fill="#dc2626" />

        <rect x="220" y="34" width="64" height="32" rx="3" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />
        <rect x="226" y="38" width="24" height="4" fill="#94a3b8" />
        <rect x="226" y="46" width="40" height="8" fill="#8b5cf6" />

        <!-- Chart Area -->
        <rect x="16" y="74" width="160" height="96" rx="4" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />
        <rect x="22" y="80" width="70" height="6" fill="#64748b" />
        <!-- Bar Charts -->
        <rect x="26" y="130" width="12" height="30" fill="#0284c7" rx="2" />
        <rect x="44" y="115" width="12" height="45" fill="#0066cc" rx="2" />
        <rect x="62" y="100" width="12" height="60" fill="#0284c7" rx="2" />
        <rect x="80" y="120" width="12" height="40" fill="#0066cc" rx="2" />
        <rect x="98" y="95" width="12" height="65" fill="#0284c7" rx="2" />
        <rect x="116" y="110" width="12" height="50" fill="#0066cc" rx="2" />
        <rect x="134" y="90" width="12" height="70" fill="#0066cc" rx="2" />

        <!-- Right Side Data List -->
        <rect x="184" y="74" width="100" height="96" rx="4" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />
        <rect x="190" y="82" width="50" height="5" fill="#64748b" />
        <line x1="190" y1="95" x2="276" y2="95" stroke="#f1f5f9" stroke-width="2" />
        <rect x="190" y="102" width="60" height="5" fill="#94a3b8" />
        <rect x="260" y="102" width="16" height="6" rx="2" fill="#10b981" />
        <rect x="190" y="118" width="55" height="5" fill="#94a3b8" />
        <rect x="260" y="118" width="16" height="6" rx="2" fill="#0284c7" />
        <rect x="190" y="134" width="65" height="5" fill="#94a3b8" />
        <rect x="260" y="134" width="16" height="6" rx="2" fill="#f59e0b" />
        <rect x="190" y="150" width="50" height="5" fill="#94a3b8" />
        <rect x="260" y="150" width="16" height="6" rx="2" fill="#10b981" />

        <!-- Laptop Base -->
        <path d="M-20 190 L320 190 L340 200 L-40 200 Z" fill="#94a3b8" />
        <rect x="120" y="190" width="60" height="3" rx="1.5" fill="#475569" />
      </g>

      <!-- Mobile Phone Mockup Overlay -->
      <g transform="translate(340, 70)">
        <rect x="0" y="0" width="90" height="170" rx="12" fill="#0f172a" stroke="#334155" stroke-width="2" />
        <rect x="5" y="6" width="80" height="158" rx="8" fill="#ffffff" />
        <!-- Notch -->
        <rect x="30" y="8" width="30" height="4" rx="2" fill="#0f172a" />
        <!-- Mobile App Content -->
        <rect x="5" y="16" width="80" height="18" fill="#0284c7" />
        <circle cx="15" cy="25" r="4" fill="#ffffff" opacity="0.9" />
        <rect x="24" y="23" width="35" height="4" rx="1" fill="#ffffff" />
        <!-- Mobile Cards -->
        <rect x="9" y="40" width="72" height="24" rx="3" fill="#f1f5f9" />
        <rect x="14" y="45" width="30" height="4" fill="#0f172a" />
        <rect x="14" y="52" width="45" height="3" fill="#64748b" />
        <rect x="9" y="70" width="72" height="45" rx="3" fill="#f1f5f9" />
        <circle cx="22" cy="85" r="8" fill="#38bdf8" />
        <rect x="36" y="78" width="40" height="4" fill="#0f172a" />
        <rect x="36" y="86" width="30" height="3" fill="#64748b" />
        <rect x="36" y="94" width="20" height="8" rx="2" fill="#dc2626" />
        <!-- Bottom Tab Bar -->
        <rect x="5" y="148" width="80" height="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" />
        <circle cx="20" cy="156" r="3" fill="#0284c7" />
        <circle cx="45" cy="156" r="3" fill="#94a3b8" />
        <circle cx="70" cy="156" r="3" fill="#94a3b8" />
      </g>
    </svg>
  `,

  // Portfolio Mockup 2: Order & Distribution Management (Laptop Dashboard)
  portfolioOrderDistribution: `
    <svg viewBox="0 0 500 320" fill="none" xmlns="http://www.w3.org/2000/svg" class="portfolio-card-img">
      <defs>
        <linearGradient id="screenBg2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="100%" stop-color="#f8fafc" />
        </linearGradient>
      </defs>
      <rect width="500" height="320" fill="#f8fafc" />
      <!-- Centered Laptop -->
      <g transform="translate(60, 30)">
        <rect x="0" y="0" width="380" height="210" rx="8" fill="#1e293b" />
        <circle cx="190" cy="6" r="2.5" fill="#64748b" />
        <rect x="8" y="12" width="364" height="190" fill="url(#screenBg2)" />
        <!-- Nav Header -->
        <rect x="8" y="12" width="364" height="20" fill="#0f172a" />
        <circle cx="20" cy="22" r="4" fill="#38bdf8" />
        <rect x="32" y="19" width="50" height="6" rx="2" fill="#ffffff" />
        <rect x="100" y="20" width="30" height="4" fill="#94a3b8" />
        <rect x="140" y="20" width="35" height="4" fill="#94a3b8" />
        <rect x="185" y="20" width="30" height="4" fill="#38bdf8" />
        <!-- Table & Orders View -->
        <rect x="16" y="38" width="348" height="24" rx="3" fill="#f1f5f9" />
        <rect x="24" y="47" width="60" height="6" fill="#0f172a" />
        <rect x="270" y="44" width="84" height="12" rx="3" fill="#0284c7" />
        <!-- Table Header -->
        <rect x="16" y="68" width="348" height="16" fill="#e2e8f0" />
        <rect x="24" y="74" width="40" height="4" fill="#475569" />
        <rect x="90" y="74" width="50" height="4" fill="#475569" />
        <rect x="180" y="74" width="45" height="4" fill="#475569" />
        <rect x="260" y="74" width="35" height="4" fill="#475569" />
        <rect x="320" y="74" width="35" height="4" fill="#475569" />
        <!-- Rows -->
        <g fill="#64748b">
          <!-- Row 1 -->
          <rect x="24" y="92" width="35" height="5" fill="#0284c7" />
          <rect x="90" y="92" width="60" height="5" />
          <rect x="180" y="92" width="45" height="5" />
          <rect x="260" y="90" width="32" height="10" rx="3" fill="#dcfce7" />
          <rect x="320" y="92" width="30" height="5" />
          <!-- Row 2 -->
          <rect x="24" y="112" width="35" height="5" fill="#0284c7" />
          <rect x="90" y="112" width="70" height="5" />
          <rect x="180" y="112" width="40" height="5" />
          <rect x="260" y="110" width="32" height="10" rx="3" fill="#dbeafe" />
          <rect x="320" y="112" width="30" height="5" />
          <!-- Row 3 -->
          <rect x="24" y="132" width="35" height="5" fill="#0284c7" />
          <rect x="90" y="132" width="55" height="5" />
          <rect x="180" y="132" width="50" height="5" />
          <rect x="260" y="130" width="32" height="10" rx="3" fill="#fef3c7" />
          <rect x="320" y="132" width="30" height="5" />
          <!-- Row 4 -->
          <rect x="24" y="152" width="35" height="5" fill="#0284c7" />
          <rect x="90" y="152" width="65" height="5" />
          <rect x="180" y="152" width="45" height="5" />
          <rect x="260" y="150" width="32" height="10" rx="3" fill="#dcfce7" />
          <rect x="320" y="152" width="30" height="5" />
          <!-- Row 5 -->
          <rect x="24" y="172" width="35" height="5" fill="#0284c7" />
          <rect x="90" y="172" width="50" height="5" />
          <rect x="180" y="172" width="45" height="5" />
          <rect x="260" y="170" width="32" height="10" rx="3" fill="#fee2e2" />
          <rect x="320" y="172" width="30" height="5" />
        </g>
        <!-- Laptop Base -->
        <path d="M-25 210 L405 210 L430 222 L-50 222 Z" fill="#94a3b8" />
        <rect x="150" y="210" width="80" height="3" rx="1.5" fill="#475569" />
      </g>
    </svg>
  `,

  // Portfolio Mockup 3: Field Force Mobile App (Smartphone held in hand outdoors)
  portfolioFieldForce: `
    <svg viewBox="0 0 500 320" fill="none" xmlns="http://www.w3.org/2000/svg" class="portfolio-card-img">
      <defs>
        <linearGradient id="natureBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#bbf7d0" />
          <stop offset="50%" stop-color="#86efac" />
          <stop offset="100%" stop-color="#4ade80" />
        </linearGradient>
      </defs>
      <!-- Blurred Outdoor Background with bokeh circles -->
      <rect width="500" height="320" fill="url(#natureBg)" />
      <circle cx="60" cy="80" r="45" fill="#ffffff" opacity="0.3" />
      <circle cx="430" cy="90" r="60" fill="#fef08a" opacity="0.35" />
      <circle cx="100" cy="240" r="50" fill="#ffffff" opacity="0.25" />
      <circle cx="440" cy="250" r="55" fill="#ffffff" opacity="0.3" />

      <!-- Centered Modern Smartphone -->
      <g transform="translate(175, 20)">
        <!-- Phone Frame -->
        <rect x="0" y="0" width="150" height="280" rx="20" fill="#0f172a" stroke="#334155" stroke-width="3" />
        <!-- Screen -->
        <rect x="6" y="8" width="138" height="264" rx="14" fill="#ffffff" />
        <!-- Notch / Dynamic Island -->
        <rect x="52" y="12" width="46" height="7" rx="3.5" fill="#0f172a" />
        <!-- Map View in Upper Half -->
        <rect x="6" y="22" width="138" height="130" fill="#e0f2fe" />
        <!-- Map Road Network -->
        <path d="M10 60 L140 100" stroke="#ffffff" stroke-width="6" />
        <path d="M30 140 L100 30" stroke="#ffffff" stroke-width="8" />
        <path d="M60 40 Q90 90 140 120" stroke="#fef08a" stroke-width="4" />
        <!-- GPS Route Pulse -->
        <circle cx="75" cy="80" r="10" fill="#0284c7" opacity="0.3" />
        <circle cx="75" cy="80" r="5" fill="#0284c7" />
        <!-- Destination Pin -->
        <circle cx="115" cy="110" r="6" fill="#dc2626" />
        <path d="M115 116 L115 124" stroke="#dc2626" stroke-width="2" />

        <!-- Bottom Sheet with Tasks -->
        <rect x="6" y="145" width="138" height="127" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1" />
        <rect x="60" y="150" width="30" height="3" rx="1.5" fill="#cbd5e1" />
        <rect x="14" y="160" width="60" height="6" fill="#0f172a" />
        <!-- Task Card 1 -->
        <rect x="12" y="172" width="126" height="34" rx="4" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" />
        <circle cx="24" cy="189" r="6" fill="#10b981" />
        <rect x="36" y="180" width="55" height="5" fill="#0f172a" />
        <rect x="36" y="189" width="40" height="4" fill="#64748b" />
        <rect x="106" y="182" width="26" height="12" rx="2" fill="#0066cc" />
        <!-- Task Card 2 -->
        <rect x="12" y="212" width="126" height="34" rx="4" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" />
        <circle cx="24" cy="229" r="6" fill="#f59e0b" />
        <rect x="36" y="220" width="65" height="5" fill="#0f172a" />
        <rect x="36" y="229" width="45" height="4" fill="#64748b" />
        <rect x="106" y="222" width="26" height="12" rx="2" fill="#e2e8f0" />
      </g>
    </svg>
  `,

  // Portfolio Mockup 4: Business Intelligence & Reporting (Tablet Screen)
  portfolioBusinessIntelligence: `
    <svg viewBox="0 0 500 320" fill="none" xmlns="http://www.w3.org/2000/svg" class="portfolio-card-img">
      <defs>
        <linearGradient id="biBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="100%" stop-color="#f1f5f9" />
        </linearGradient>
      </defs>
      <rect width="500" height="320" fill="#e2e8f0" />
      <!-- Tablet Device -->
      <g transform="translate(70, 30)">
        <rect x="0" y="0" width="360" height="240" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2" />
        <rect x="10" y="10" width="340" height="220" rx="6" fill="url(#biBg)" />
        <!-- BI Top Bar -->
        <rect x="10" y="10" width="340" height="22" fill="#1e293b" />
        <rect x="20" y="17" width="80" height="7" rx="2" fill="#38bdf8" />
        <circle cx="330" cy="21" r="5" fill="#f59e0b" />
        <!-- BI 3 Mini KPI cards -->
        <rect x="20" y="40" width="96" height="40" rx="4" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />
        <rect x="28" y="46" width="40" height="5" fill="#64748b" />
        <rect x="28" y="56" width="55" height="12" fill="#0284c7" />

        <rect x="132" y="40" width="96" height="40" rx="4" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />
        <rect x="140" y="46" width="40" height="5" fill="#64748b" />
        <rect x="140" y="56" width="55" height="12" fill="#10b981" />

        <rect x="244" y="40" width="96" height="40" rx="4" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />
        <rect x="252" y="46" width="40" height="5" fill="#64748b" />
        <rect x="252" y="56" width="55" height="12" fill="#8b5cf6" />

        <!-- Line Chart Box -->
        <rect x="20" y="90" width="190" height="130" rx="4" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />
        <rect x="28" y="98" width="70" height="6" fill="#0f172a" />
        <!-- Line graph -->
        <path d="M30 190 Q65 170 100 180 T170 130 T200 110" stroke="#0066cc" stroke-width="3" fill="none" />
        <path d="M30 200 Q65 185 100 195 T170 160 T200 140" stroke="#f43f5e" stroke-width="2.5" fill="none" stroke-dasharray="3 3" />
        <circle cx="200" cy="110" r="4" fill="#0066cc" />

        <!-- Donut / Pie & Bar Stack -->
        <rect x="220" y="90" width="120" height="130" rx="4" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />
        <rect x="228" y="98" width="60" height="6" fill="#0f172a" />
        <!-- Donut chart -->
        <circle cx="280" cy="155" r="32" stroke="#e2e8f0" stroke-width="12" fill="none" />
        <circle cx="280" cy="155" r="32" stroke="#0284c7" stroke-width="12" stroke-dasharray="80 120" fill="none" />
        <circle cx="280" cy="155" r="32" stroke="#10b981" stroke-width="12" stroke-dasharray="40 160" stroke-dashoffset="-80" fill="none" />
        <circle cx="280" cy="155" r="32" stroke="#f59e0b" stroke-width="12" stroke-dasharray="30 170" stroke-dashoffset="-120" fill="none" />
      </g>
    </svg>
  `,

  // Team Member Portraits
  taroSato: `
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="team-avatar-svg">
      <circle cx="60" cy="60" r="60" fill="#f8fafc" />
      <!-- Soft circle background tint -->
      <circle cx="60" cy="60" r="58" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="2" />
      <!-- Suited Businessman (Japanese) -->
      <path d="M25 115 C25 90 40 82 60 82 C80 82 95 90 95 115 Z" fill="#1e293b" />
      <!-- White Shirt & Red Tie -->
      <polygon points="60,82 50,96 70,96" fill="#ffffff" />
      <polygon points="60,86 57,115 63,115" fill="#dc2626" />
      <!-- Neck & Head -->
      <rect x="52" y="70" width="16" height="16" rx="4" fill="#fed7aa" />
      <ellipse cx="60" cy="52" rx="22" ry="26" fill="#fed7aa" />
      <!-- Hair -->
      <path d="M38 48 C38 32 46 25 60 25 C74 25 82 32 82 48 C82 36 72 30 60 30 C46 30 40 38 38 48 Z" fill="#1e1e1e" />
      <!-- Eyes & Smile -->
      <circle cx="52" cy="50" r="2.5" fill="#1e293b" />
      <circle cx="68" cy="50" r="2.5" fill="#1e293b" />
      <path d="M54 62 Q60 67 66 62" stroke="#c2410c" stroke-width="2" stroke-linecap="round" fill="none" />
    </svg>
  `,

  mdRahman: `
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="team-avatar-svg">
      <circle cx="60" cy="60" r="60" fill="#f8fafc" />
      <circle cx="60" cy="60" r="58" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="2" />
      <!-- Bangladeshi Tech Founder in Dark Navy Blazer -->
      <path d="M24 115 C24 88 40 80 60 80 C80 80 96 88 96 115 Z" fill="#0f172a" />
      <polygon points="60,80 52,95 68,95" fill="#38bdf8" />
      <!-- Neck & Head -->
      <rect x="52" y="68" width="16" height="16" rx="4" fill="#d97706" opacity="0.6" />
      <ellipse cx="60" cy="50" rx="22" ry="25" fill="#d97706" opacity="0.6" />
      <!-- Beard & Hair -->
      <path d="M38 44 C38 28 48 24 60 24 C72 24 82 28 82 44 C82 32 72 28 60 28 C48 28 40 34 38 44 Z" fill="#09090b" />
      <path d="M42 56 C42 74 50 78 60 78 C70 78 78 74 78 56 C74 70 66 73 60 73 C54 73 46 70 42 56 Z" fill="#09090b" opacity="0.85" />
      <!-- Glasses -->
      <rect x="44" y="44" width="13" height="10" rx="2" stroke="#09090b" stroke-width="2" fill="none" />
      <rect x="63" y="44" width="13" height="10" rx="2" stroke="#09090b" stroke-width="2" fill="none" />
      <line x1="57" y1="49" x2="63" y2="49" stroke="#09090b" stroke-width="2" />
      <!-- Eyes & Smile -->
      <circle cx="50" cy="49" r="2" fill="#09090b" />
      <circle cx="70" cy="49" r="2" fill="#09090b" />
      <path d="M54 65 Q60 69 66 65" stroke="#78350f" stroke-width="2" stroke-linecap="round" fill="none" />
    </svg>
  `,

  fahimAhmed: `
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="team-avatar-svg">
      <circle cx="60" cy="60" r="60" fill="#f8fafc" />
      <circle cx="60" cy="60" r="58" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="2" />
      <!-- Young Co-Founder in Modern Slate Grey Blazer -->
      <path d="M25 115 C25 89 40 82 60 82 C80 82 95 89 95 115 Z" fill="#334155" />
      <polygon points="60,82 52,98 68,98" fill="#ffffff" />
      <rect x="52" y="70" width="16" height="15" rx="4" fill="#b45309" opacity="0.5" />
      <ellipse cx="60" cy="52" rx="21" ry="25" fill="#b45309" opacity="0.5" />
      <!-- Modern stylish dark hair -->
      <path d="M38 46 C38 27 47 22 60 22 C74 22 82 27 82 46 C80 30 70 27 60 27 C46 27 40 35 38 46 Z" fill="#18181b" />
      <!-- Friendly expression -->
      <circle cx="51" cy="50" r="2.5" fill="#18181b" />
      <circle cx="69" cy="50" r="2.5" fill="#18181b" />
      <path d="M53 63 Q60 68 67 63" stroke="#78350f" stroke-width="2.5" stroke-linecap="round" fill="none" />
    </svg>
  `,

  rasedHasan: `
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="team-avatar-svg">
      <circle cx="60" cy="60" r="60" fill="#f8fafc" />
      <circle cx="60" cy="60" r="58" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="2" />
      <!-- Co-Founder in Royal Blue Shirt -->
      <path d="M25 115 C25 89 40 82 60 82 C80 82 95 89 95 115 Z" fill="#0066cc" />
      <polygon points="60,82 54,95 66,95" fill="#e0f2fe" />
      <rect x="52" y="68" width="16" height="16" rx="4" fill="#b45309" opacity="0.55" />
      <ellipse cx="60" cy="50" rx="21" ry="25" fill="#b45309" opacity="0.55" />
      <!-- Hair & Neat Trim -->
      <path d="M39 44 C39 28 48 24 60 24 C72 24 81 28 81 44 C81 32 72 28 60 28 C48 28 40 33 39 44 Z" fill="#111827" />
      <circle cx="52" cy="49" r="2.5" fill="#111827" />
      <circle cx="68" cy="49" r="2.5" fill="#111827" />
      <path d="M53 62 Q60 67 67 62" stroke="#78350f" stroke-width="2.5" stroke-linecap="round" fill="none" />
    </svg>
  `,

  kenjiTanaka: `
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="team-avatar-svg">
      <circle cx="60" cy="60" r="60" fill="#f8fafc" />
      <circle cx="60" cy="60" r="58" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="2" />
      <!-- Japanese Business Partner in Charcoal Suit -->
      <path d="M25 115 C25 88 40 81 60 81 C80 81 95 88 95 115 Z" fill="#1e293b" />
      <polygon points="60,81 50,96 70,96" fill="#ffffff" />
      <polygon points="60,86 58,115 62,115" fill="#0284c7" />
      <rect x="52" y="69" width="16" height="15" rx="4" fill="#fed7aa" />
      <ellipse cx="60" cy="51" rx="21" ry="25" fill="#fed7aa" />
      <path d="M38 46 C38 29 47 24 60 24 C73 24 82 29 82 46 C80 32 72 28 60 28 C48 28 40 35 38 46 Z" fill="#0f172a" />
      <circle cx="52" cy="49" r="2.5" fill="#0f172a" />
      <circle cx="68" cy="49" r="2.5" fill="#0f172a" />
      <path d="M54 62 Q60 66 66 62" stroke="#c2410c" stroke-width="2" stroke-linecap="round" fill="none" />
    </svg>
  `,

  // CTA Banner Skyline Background (Night time illuminated skyscrapers)
  ctaNightSkyline: `
    <svg viewBox="0 0 1600 360" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" class="cta-skyline-bg">
      <defs>
        <linearGradient id="nightSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#09142e" />
          <stop offset="60%" stop-color="#0f2b5c" />
          <stop offset="100%" stop-color="#061226" />
        </linearGradient>
      </defs>
      <rect width="1600" height="360" fill="url(#nightSky)" />
      <!-- Distant City Lights -->
      <g fill="#38bdf8" opacity="0.3">
        <circle cx="120" cy="180" r="1.5" /><circle cx="240" cy="190" r="1.5" />
        <circle cx="480" cy="170" r="1.5" /><circle cx="780" cy="185" r="1.5" />
        <circle cx="1020" cy="165" r="1.5" /><circle cx="1340" cy="175" r="1.5" />
      </g>
      <!-- Tokyo & Dhaka Combined Night Silhouette -->
      <rect x="40" y="140" width="60" height="220" fill="#071021" />
      <rect x="110" y="110" width="70" height="250" fill="#030814" />
      <rect x="190" y="150" width="55" height="210" fill="#071021" />
      <!-- Tokyo Tower in Glowing Crimson Red -->
      <polygon points="310,80 314,80 326,290 298,290" fill="#e11d48" opacity="0.95" />
      <line x1="312" y1="50" x2="312" y2="85" stroke="#e11d48" stroke-width="3" />
      <circle cx="312" cy="50" r="2.5" fill="#fef08a" />
      <rect x="304" y="130" width="16" height="12" fill="#ffffff" stroke="#e11d48" stroke-width="2" />
      <rect x="300" y="180" width="24" height="16" fill="#ffffff" stroke="#e11d48" stroke-width="2" />

      <!-- Skyline Centers -->
      <rect x="420" y="130" width="80" height="230" fill="#071021" />
      <rect x="520" y="90" width="90" height="270" fill="#030814" />
      <rect x="630" y="145" width="75" height="215" fill="#071021" />

      <!-- Hatirjheel Bridge Silhouette Arcs on Right -->
      <path d="M900 280 Q1180 180 1480 270" stroke="#0284c7" stroke-width="4" fill="none" opacity="0.75" />
      <path d="M850 295 Q1180 230 1520 295" stroke="#38bdf8" stroke-width="7" fill="none" opacity="0.6" />
      <g stroke="#38bdf8" stroke-width="1.5" opacity="0.45">
        <line x1="1180" y1="185" x2="1080" y2="290" />
        <line x1="1180" y1="185" x2="1130" y2="290" />
        <line x1="1180" y1="185" x2="1180" y2="290" />
        <line x1="1180" y1="185" x2="1230" y2="290" />
        <line x1="1180" y1="185" x2="1280" y2="290" />
      </g>

      <rect x="1220" y="120" width="75" height="240" fill="#071021" />
      <rect x="1310" y="80" width="85" height="280" fill="#030814" />
      <rect x="1420" y="135" width="80" height="225" fill="#071021" />

      <!-- Water Reflection along bottom -->
      <rect x="0" y="300" width="1600" height="60" fill="#020817" opacity="0.7" />
      <ellipse cx="312" cy="330" rx="40" ry="6" fill="#e11d48" opacity="0.4" />
      <ellipse cx="560" cy="330" rx="80" ry="7" fill="#fef08a" opacity="0.25" />
      <ellipse cx="1180" cy="330" rx="140" ry="8" fill="#38bdf8" opacity="0.3" />
    </svg>
  `,
};

export function getAsset(key) {
  return ASSET_MAP[key] || '';
}
