import { useEffect, useState } from "react";

// true quando a página foi rolada mais do que "limite" pixels
export default function useScrolled(limite = 10) {
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > limite);
    onScroll(); // cobre o caso de a página abrir já rolada (ex.: ao recarregar)
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [limite]);

  return rolou;
}