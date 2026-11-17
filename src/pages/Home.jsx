import Header from "../components/Header.jsx";
import MusicToggle from "../components/MusicToggle.jsx";
import Evento from "../components/Evento.jsx";
import hero from "../assets/hero.jpg";
import abertura from "../assets/Group 29.svg";
import "../styles/home.css";

const TEXTO_ABERTURA =
  "Festa di Fidanzamento. Seja muito bem-vindo(a). É com o coração cheio de alegria que recebemos você para compartilhar um dos momentos mais especiais de nossas vidas. Hoje celebramos muito mais do que o nosso noivado: celebramos o amor que nos uniu, os sonhos que construímos juntos e a linda história que estamos escrevendo a cada dia. Ter você aqui torna essa ocasião ainda mais significativa. Preparamos tudo com muito carinho para que esta noite seja repleta de sorrisos, abraços, boas lembranças e momentos que ficarão guardados para sempre em nossos corações. Que você se sinta acolhido(a), aproveite cada instante e celebre conosco a alegria de um amor que escolhemos viver e cultivar todos os dias. Com muito carinho, seja bem-vindo(a) à nossa celebração!";

export default function Home({ entered, music }) {
  return (
    <>
      <section
        className={`hero ${entered ? "hero--revealed" : ""}`}
        aria-labelledby="home-title"
      >
        <img className="hero__image" src={hero} alt="" fetchPriority="high" />
        <div className="hero__shade" aria-hidden="true" />

        <Header />
        <MusicToggle
          playing={music.playing}
          onToggle={music.playing ? music.stop : music.start}
        />

        <h1 id="home-title" className="hero__title">
          <img src={abertura} alt={TEXTO_ABERTURA} />
        </h1>
      </section>

      <Evento />
    </>
  );
}