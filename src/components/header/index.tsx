"use client";

import style from "./style.module.sass";
import Image from "next/image";
import iconeMsgHeader from "../../../public/icone-msg-header.png";
import Link from "next/link";
import logoHeader from "../../../public/assets/logoHeader.png";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // ícones de menu

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className={style.container}>
      <div className={style.logo}>
        <Link href="/">
          <Image
            src="/assets/logoHeader.png"
            alt="Jhônatas Lima Melo - Advocacia"
            className={style.imgAdv}
            width={130}
            height={75}
            priority
            unoptimized
          />
        </Link>
      </div>

      <div className={style.hamburger} onClick={toggleMenu}>
        {menuOpen ? (
          <X size={28} color="#333" />
        ) : (
          <Menu size={28} color="#333" />
        )}
      </div>

      <div className={`${style.menu} ${menuOpen ? style.open : ""}`}>
        <nav>
          <ul>
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <a href="/#sobre">SOBRE</a>
            </li>
            <li>
              <a href="/#atuacao">ÁREAS DE ATUAÇÃO</a>
            </li>
            <li>
              <Link href="/artigos">ARTIGOS</Link>
            </li>
            <li>
              <a href="/#contato">LOCALIZAÇÃO</a>
            </li>
            <li className={style.somenteMobile}>
              <a
                href="https://wa.me/5579996284351"
                target="_blank"
                rel="noopener noreferrer"
                className={style.linkWhatsapp}
              >
                CONTATO - (79) 99628-4351
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={style.area_contato}>
        <div className={style.info}>
          <p id={style.titulo}>Contate-nos!</p>
          <a href="https://wa.me/5579996284351" target="_blank">
            <p id={style.numero}>(79) 99628-4351</p>
          </a>
        </div>
      </div>
    </header>
  );
}
