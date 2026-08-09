import { createContext, useCallback, useContext, useMemo, useState } from "react";

const LightboxContext = createContext(null);

export function LightboxProvider({ children }) {
  const [state, setState] = useState({ images: [], index: 0, open: false });

  const openLightbox = useCallback((images, index = 0) => {
    if (!images || !images.length) return;
    setState({ images, index, open: true });
  }, []);

  const closeLightbox = useCallback(() => {
    setState((s) => ({ ...s, open: false }));
  }, []);

  const next = useCallback(() => {
    setState((s) => ({ ...s, index: (s.index + 1) % s.images.length }));
  }, []);

  const prev = useCallback(() => {
    setState((s) => ({ ...s, index: (s.index - 1 + s.images.length) % s.images.length }));
  }, []);

  const value = useMemo(
    () => ({ ...state, openLightbox, closeLightbox, next, prev }),
    [state, openLightbox, closeLightbox, next, prev]
  );

  return <LightboxContext.Provider value={value}>{children}</LightboxContext.Provider>;
}

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox must be used within LightboxProvider");
  return ctx;
}
