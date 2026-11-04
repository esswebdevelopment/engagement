import { useCallback, useEffect, useRef, useState } from "react";

export default function useMusic(volume = 0.4) {
  const audioRef = useRef(null);
  const wantedRef = useRef(false); // o convidado quer ouvir?
  const rampRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const start = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return Promise.resolve(false);

    clearInterval(rampRef.current);
    audio.volume = 0;
    return audio
      .play()
      .then(() => {
        wantedRef.current = true;
        setPlaying(true);
        // fade-in do volume em ~3s (no iPhone o volume é fixo, sem problema)
        let v = 0;
        rampRef.current = setInterval(() => {
          v = Math.min(v + volume / 30, volume);
          audio.volume = v;
          if (v >= volume) clearInterval(rampRef.current);
        }, 100);
        return true;
      })
      .catch(() => false);
  }, [volume]);

  const stop = useCallback(() => {
    clearInterval(rampRef.current);
    audioRef.current?.pause();
    wantedRef.current = false;
    setPlaying(false);
  }, []);

  // Pausa ao trocar de aba/app e retoma ao voltar
  useEffect(() => {
    const onVisibility = () => {
      const audio = audioRef.current;
      if (!audio) return;
      if (document.hidden) audio.pause();
      else if (wantedRef.current) audio.play().catch(() => {});
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      clearInterval(rampRef.current);
    };
  }, []);

  return { audioRef, playing, start, stop };
}