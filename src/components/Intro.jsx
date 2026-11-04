import monograma from "../assets/monograma.svg";
import "../styles/intro.css";

export default function Intro({ open, onEnter }) {
  return (
    <button
      type="button"
      className={`intro ${open ? "" : "intro--out"}`}
      onClick={onEnter}
      aria-hidden={!open}
      tabIndex={open ? 0 : -1}
    >
      <span className="intro__content">
        <img className="intro__monogram" src={monograma} alt="" width="40" height="43" />
        <span className="intro__text">— Toque para entrar</span>
      </span>
    </button>
  );
}