// Lightbox — click any image in main content to view fullscreen, arrow through the rest

const { useState: useStateLB, useEffect: useEffectLB, useCallback: useCallbackLB } = React;

function useLightbox(containerRef) {
  const [state, setState] = useStateLB({ open: false, images: [], index: 0 });

  const handleClick = useCallbackLB((e) => {
    const target = e.target;
    if (!target || target.tagName !== "IMG") return;
    if (target.closest("button")) return; // tile thumbnails / carousel controls stay clickable, not lightboxed
    if (!containerRef.current) return;
    const imgs = Array.from(containerRef.current.querySelectorAll("img")).filter(
      (img) => !img.closest("button")
    );
    const idx = imgs.indexOf(target);
    if (idx === -1) return;
    setState({ open: true, images: imgs.map((img) => img.src), index: idx });
  }, [containerRef]);

  const close = useCallbackLB(() => setState((s) => ({ ...s, open: false })), []);
  const prev = useCallbackLB(() => setState((s) => ({ ...s, index: (s.index - 1 + s.images.length) % s.images.length })), []);
  const next = useCallbackLB(() => setState((s) => ({ ...s, index: (s.index + 1) % s.images.length })), []);

  useEffectLB(() => {
    if (!state.open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [state.open, close, prev, next]);

  return { state, handleClick, close, prev, next };
}

function Lightbox({ state, close, prev, next }) {
  if (!state.open) return null;
  const multi = state.images.length > 1;
  return (
    <div
      onClick={close}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(10,10,10,0.92)",
        display: "flex", alignItems: "center", justifyContent: "center",
        animation: "fadeUp .2s ease",
      }}
    >
      <button
        onClick={close}
        aria-label="Close"
        style={{
          position: "absolute", top: 20, right: 24, zIndex: 2,
          background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "50%",
          width: 40, height: 40, color: "#fff", fontSize: 20, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >✕</button>

      {multi && (
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          aria-label="Previous"
          style={{
            position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "50%",
            width: 48, height: 48, color: "#fff", fontSize: 22, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2,
          }}
        >←</button>
      )}

      <img
        src={state.images[state.index]}
        alt=""
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "88vw", maxHeight: "88vh", objectFit: "contain",
          borderRadius: 4, boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
        }}
      />

      {multi && (
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          aria-label="Next"
          style={{
            position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "50%",
            width: 48, height: 48, color: "#fff", fontSize: 22, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2,
          }}
        >→</button>
      )}

      {multi && (
        <span style={{
          position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)",
          color: "rgba(255,255,255,0.7)", fontSize: 12, letterSpacing: ".05em",
        }}>
          {state.index + 1} / {state.images.length}
        </span>
      )}
    </div>
  );
}

Object.assign(window, { useLightbox, Lightbox });
