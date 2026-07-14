// Device-frame thumbnails — colored tile + faux desktop / tablet / phone mockup

const ThumbDesktop = ({ p }) => {
  const fg = p.dark ? "rgba(255,255,255,0.92)" : "rgba(0,0,0,0.86)";
  const sub = p.dark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.42)";
  const stroke = p.dark ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.10)";
  return (
    <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid meet" style={{ width: "78%", height: "auto", filter: "drop-shadow(0 18px 30px rgba(0,0,0,0.18))" }}>
      <rect x="20" y="14" width="280" height="160" rx="6" fill={p.dark ? "#1a1a1c" : "#fff"} stroke={stroke}/>
      <rect x="20" y="14" width="280" height="14" rx="6" fill={p.dark ? "#252528" : "#f4f4f5"}/>
      <circle cx="29" cy="21" r="2" fill="#ff5f57"/><circle cx="37" cy="21" r="2" fill="#febc2e"/><circle cx="45" cy="21" r="2" fill="#28c840"/>
      {/* faux content */}
      <rect x="32"  y="40"  width="86" height="6"  rx="2" fill={fg}/>
      <rect x="32"  y="52"  width="120" height="3" rx="1.5" fill={sub}/>
      <rect x="32"  y="60"  width="100" height="3" rx="1.5" fill={sub}/>
      <rect x="32"  y="78"  width="120" height="80" rx="3" fill={p.accent} opacity="0.85"/>
      <rect x="164" y="78"  width="60" height="38" rx="3" fill={sub} opacity="0.35"/>
      <rect x="232" y="78"  width="56" height="38" rx="3" fill={sub} opacity="0.35"/>
      <rect x="164" y="120" width="124" height="38" rx="3" fill={sub} opacity="0.25"/>
      {/* base */}
      <rect x="140" y="174" width="40" height="3" rx="1.5" fill={stroke}/>
    </svg>
  );
};

const ThumbTablet = ({ p }) => {
  const fg = p.dark ? "rgba(255,255,255,0.92)" : "rgba(0,0,0,0.86)";
  const sub = p.dark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.42)";
  return (
    <svg viewBox="0 0 220 280" preserveAspectRatio="xMidYMid meet" style={{ width: "60%", height: "auto", filter: "drop-shadow(0 18px 30px rgba(0,0,0,0.18))" }}>
      <rect x="20" y="14" width="180" height="252" rx="14" fill={p.dark ? "#1a1a1c" : "#fff"} stroke={p.dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.10)"}/>
      <rect x="32" y="32" width="156" height="100" rx="6" fill={p.accent} opacity="0.85"/>
      <rect x="32" y="144" width="100" height="6" rx="2" fill={fg}/>
      <rect x="32" y="158" width="156" height="3" rx="1.5" fill={sub}/>
      <rect x="32" y="166" width="140" height="3" rx="1.5" fill={sub}/>
      <rect x="32" y="186" width="70" height="38" rx="4" fill={sub} opacity="0.3"/>
      <rect x="108" y="186" width="80" height="38" rx="4" fill={sub} opacity="0.3"/>
      <circle cx="110" cy="252" r="5" fill="none" stroke={p.dark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.25)"} strokeWidth="1.2"/>
    </svg>
  );
};

const ThumbPhone = ({ p }) => {
  const fg = p.dark ? "rgba(255,255,255,0.92)" : "rgba(0,0,0,0.86)";
  const sub = p.dark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.42)";
  return (
    <svg viewBox="0 0 160 280" preserveAspectRatio="xMidYMid meet" style={{ width: "44%", height: "auto", filter: "drop-shadow(0 18px 30px rgba(0,0,0,0.18))" }}>
      <rect x="30" y="14" width="100" height="252" rx="16" fill={p.dark ? "#1a1a1c" : "#fff"} stroke={p.dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.10)"}/>
      <rect x="62" y="22" width="36" height="5" rx="2.5" fill={p.dark ? "#0a0a0b" : "#e5e5e7"}/>
      <rect x="42" y="40" width="76" height="46" rx="6" fill={p.accent} opacity="0.85"/>
      <rect x="42" y="96"  width="60" height="5" rx="1.5" fill={fg}/>
      <rect x="42" y="108" width="76" height="3" rx="1.5" fill={sub}/>
      <rect x="42" y="116" width="68" height="3" rx="1.5" fill={sub}/>
      <rect x="42" y="134" width="34" height="32" rx="4" fill={sub} opacity="0.3"/>
      <rect x="84" y="134" width="34" height="32" rx="4" fill={sub} opacity="0.3"/>
      <rect x="42" y="174" width="76" height="32" rx="4" fill={sub} opacity="0.25"/>
      <circle cx="80" cy="254" r="3" fill="none" stroke={p.dark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.25)"} strokeWidth="1"/>
    </svg>
  );
};

const Thumb = ({ p }) => {
  if (p.thumb) {
    const isPhone = p.frame === "phone";
    const isTablet = p.frame === "tablet";
    return (
      <img src={p.thumb} alt={p.name}
        style={{ width: isPhone ? "42%" : isTablet ? "72%" : "90%", height: isPhone ? "78%" : isTablet ? "85%" : "auto",
                 objectFit: "contain",
                 filter: "drop-shadow(0 18px 30px rgba(0,0,0,0.18))" }}/>
    );
  }
  if (p.frame === "phone") return <ThumbPhone p={p}/>;
  if (p.frame === "tablet") return <ThumbTablet p={p}/>;
  return <ThumbDesktop p={p}/>;
};

Object.assign(window, { Thumb, ThumbDesktop, ThumbTablet, ThumbPhone });
