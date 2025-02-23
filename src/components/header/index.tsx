import style from './style.module.sass';
import Image from 'next/image';
import iconeMsgHeader from '../../../public/icone-msg-header.png';
import Link from 'next/link';


import logoHeader from '../../../public/assets/logoHeader.png';


export default function Header()  {

  return (
    <header className={style.container}>
     <div className={style.logo}>
        <Image src={logoHeader} width={140} height={80} alt="logo do escritório" />
     </div>
     <div className={style.menu}>
        <nav>
          <ul>
            <li><Link href="/"/>HOME</li>
            <li>SOBRE</li>
            <li>ÁREAS DE ATUAÇÃO</li>
            <li>CONTATO</li>
          </ul>
        </nav>
     </div>
     <div className={style.area_contato}>
        <div id={style.icon}>
            <Image src={iconeMsgHeader} width={20} height={20} alt="icone de mensagem" />
        </div>
        <div className={style.info}>
          <p id={style.titulo}>Fale conosco</p>
          <p id={style.numero}>(79) 99628-4351</p>
        </div>
     </div>
    </header>
  );

}