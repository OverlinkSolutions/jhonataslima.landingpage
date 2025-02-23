import style from "./style.module.sass";
import Image from "next/image";

import imgAdv from "../../../public/assets/imgAdv.svg";

export default function AreaSobreAdv() {
  return (
    <section className={style.container}>
      <div className={style.areaImg}>
        <Image src={imgAdv} alt="Jhônatas Lima" width={800} height={600} />
      </div>
      <div className={style.areaInfoAdv}>
        <h2>Jhônatas Lima</h2>
        <span>OAB/SE 12345</span>
        <p>
          Formado pela Universidade Tiradentes, busca por meio da advocacia o
          propósito de unir o Direito com a Fé no intuito de levar a dignidade a
          vida das pessoas. Deste modo, busco especialização em Direito
          Imobiliário pela Faculdade Legale e formação no Seminário Maior Nossa
          Senhora da Conceição para o aperfeiçoamento em Nulidade Matrimonial
          regida pelo Código de Direito Canônico.
        </p>
      </div>
    </section>
  );
}
