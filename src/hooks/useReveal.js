import { useEffect, useRef, useState } from "react";

// Devolve [ref, visivel]. "visivel" vira true uma única vez,
// quando o elemento aparece na tela.
export default function useReveal(threshold = 0.3) {
  const ref = useRef(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisivel(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, visivel];
}