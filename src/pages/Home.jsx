import Header from "../components/Header.jsx";
import MusicToggle from "../components/MusicToggle.jsx";
import Boasvindas from "../components/Boasvindas.jsx";
import Evento from "../components/Evento.jsx";
import hero from "../assets/hero.jpg";
import titulo from "../assets/titulo.svg";
import "../styles/home.css";

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
          <img src={titulo} alt="Festa di Fidanzamento" />
        </h1>
      </section>

      {/* tudo que vem depois da capa fica aqui dentro: o fundo cobre a hero,
          que continua "presa" atrás durante a rolagem */}
      <div className="pagina">
        <Boasvindas />
        <Evento />
      </div>
    </>
  );
}