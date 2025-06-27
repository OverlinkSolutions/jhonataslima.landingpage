import style from "./style.module.sass";
import Image from "next/image";

import imgAdv from "../../../public/assets/img-jhonatas-info.jpeg"

export default function AreaSobreAdv() {
  return (
    <section className={style.container} id ="sobre">
      <div className={style.areaImg}>
        <Image src={imgAdv} id={style.imgAdv} alt="Jhônatas Lima" width={400} height={600} />
      </div>
      <div className={style.areaInfoAdv}>
        <h2>JHÔNATAS LIMA MELO</h2>
        <span>Advogado | OAB/SE 12.021</span>
        <p>
          Jhônatas Lima Melo é advogado inscrito na OAB/SE sob o nº 12.021, com
          atuação dedicada, especialmente, ao Processo de Nulidade Matrimonial
          Canônica, segundo o Código de Direito Canônico. Seu trabalho é voltado
          ao acompanhamento de pessoas que buscam, junto à Igreja Católica, a
          declaração de nulidade de seu matrimônio, com uma abordagem
          acolhedora, ética e esclarecedora.
        </p>

        <p>
          Graduado em Direito pela Universidade Tiradentes, é especialista em
          Direito Imobiliário pela Faculdade Legale e especialista em Nulidades
          Matrimoniais e Processo Canônico pelo Seminário Maior Nossa Senhora da
          Conceição (Sergipe). Atualmente, é especializando em Licitações e
          Contratos Públicos pela Faculdade CERS.
        </p>

        <p>
          Com sólida formação e sensibilidade no trato de temas tão íntimos e
          pessoais, Jhônatas atua ao lado de seus clientes com escuta atenta,
          empatia e clareza, orientando-os durante todas as etapas do processo
          canônico, da preparação documental até o acompanhamento junto aos
          Tribunais Eclesiásticos.
        </p>

        <p>
          Acredita que cada história merece ser tratada com respeito e
          singularidade, oferecendo uma advocacia que une rigor técnico, cuidado
          humano e profundo respeito à fé e aos valores de cada pessoa.
        </p>
      </div>
    </section>
  );
}
