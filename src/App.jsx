import { useEffect, useState } from "react";
import Home from "./pages/Home.jsx";
import Intro from "./components/Intro.jsx";
import useMusic from "./hooks/useMusic.js";

export default function App() {
  const [entered, setEntered] = useState(false);
  const music = useMusic(0.4);

  // trava a rolagem enquanto a tela de entrada está aberta
  useEffect(() => {
    document.body.style.overflow = entered ? "" : "hidden";
  }, [entered]);

  const enter = () => {
    music.start(); // precisa ser chamado dentro do toque
    setEntered(true); // a Home abre mesmo se o áudio falhar
  };

  return (
    <main>
      <audio ref={music.audioRef} src="/audio/Misty - Stan Getz.mp3" loop preload="auto" />
      <Home entered={entered} music={music} />
      <Intro open={!entered} onEnter={enter} />
    </main>
  );
}