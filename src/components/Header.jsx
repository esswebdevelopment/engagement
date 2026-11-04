import monograma from "../assets/monograma.svg";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <img
        className="header__monogram"
        src={monograma}
        alt="Monograma A e E"
        width="40"
        height="43"
      />
    </header>
  );
}
