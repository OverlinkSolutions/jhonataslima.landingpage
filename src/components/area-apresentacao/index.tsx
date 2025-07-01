"use client";

import { useState, useEffect } from "react";
import style from "./style.module.sass";

export default function AreaApresentacao() {
  const words = ["Excelência", "Ética", "Respeito"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");
  const [isRemoving, setIsRemoving] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 100;
    const erasingSpeed = 100;
    const delay = 1000;

    const timeout = setTimeout(
      () => {
        if (!isRemoving) {
          if (charIndex < words[currentWordIndex].length) {
            setDisplayedWord(
              (prev) => prev + words[currentWordIndex][charIndex]
            );
            setCharIndex((prev) => prev + 1);
          } else {
            setIsRemoving(true);
            setTimeout(() => {}, delay);
          }
        } else {
          if (charIndex > 0) {
            setDisplayedWord((prev) => prev.slice(0, -1));
            setCharIndex((prev) => prev - 1);
          } else {
            setIsRemoving(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isRemoving ? erasingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isRemoving, currentWordIndex, words]);

  return (
    <section className={style.container}>
      <div className={style.leftArea}>
        <div className={style.infoArea}>
          <h1>
            Advocacia Especializada na Área da Nulidade Matrimonial e Direito
            Imobiliário com{" "}
            <span id={style.animatedText}>
              <span className={style.wordWrapper}>
                {displayedWord}
                <span className={style.placeholder}>Excelência</span>
              </span>
            </span>
          </h1>

          <p id={style.description}>
            Defendemos o direito do “Recomeçar”, ou melhor, direcionar,
            acompanhar e instruir para que o casamento católico seja declarado
            Nulo pelo Tribunal Eclesiástico. Deste modo, o nosso compromisso é
            de ressignificar e conduzir para que as pessoas escrevam novas
            Histórias e participem ativamente do catolicismo sem qualquer
            impedimento ou restrição.
          </p>
          <a
            href="https://wa.me/5579996284351"
            target="_blank"
            id={style.contact}
          >
            Fale conosco
          </a>
        </div>
      </div>
      <div className={style.rightArea}></div>
    </section>
  );
}
