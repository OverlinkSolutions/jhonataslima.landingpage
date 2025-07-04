import Image from "next/image";
import style from "./style.module.sass";

import imgAtuacao from "../../../public/assets/imgAtuacao.svg";
import Link from "next/link";

export default function AreaAreasAtuacao() {
  return (
    <section className={style.container} id="atuacao">
      <div className={style.title}>
        <h3>Áreas de atuação</h3>
        <span className={style.line}></span>
      </div>
      <div className={style.cards}>
        <div className={style.card}>
          <div className={style.cardImage}>
            <Image src={imgAtuacao} width={350} height={280} alt={""} />
          </div>
          <div className={style.cardInfo}>
            <h4>Nulidade Matrimonial</h4>
            <p>
              Defendemos o direito do “Recomeçar”, ou melhor, direcionar,
              acompanhar e instruir para que o casamento católico seja declarado
              Nulo pelo Tribunal Eclesiástico.
            </p>
            <Link href={"/artigos"} id={style.linkArtigos}>Saiba mais</Link>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.cardImage}>
            <Image src={imgAtuacao} width={350} height={280} alt={""} />
          </div>
          <div className={style.cardInfo}>
            <h4>Direito Imobiliário</h4>
            <ul>
              <li>Aquisição e regularização de imóveis</li>
              <li>Contratos imobiliários</li>
              <li>Condomónios e associações</li>
              <li>Regularização fundiária</li>
              <li>Direito urbanístico e planejamento imobiliário</li>
            </ul>
            <Link href={"/artigos"} id={style.linkArtigos}>Saiba mais</Link>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.cardImage}>
            <Image src={imgAtuacao} width={350} height={280} alt={""} />
          </div>
          <div className={style.cardInfo}>
            <h4>Direito Sucessório</h4>
            <ul>
              <li>Testamento e codicilos</li>
              <li>Direitos dos herdeiros e legatários</li>
              <li>Disputas sucessórias</li>
              <li>Aspectos tributários da sucessão</li>
            </ul>
            <Link href={"/artigos"} id={style.linkArtigos}>Saiba mais</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
