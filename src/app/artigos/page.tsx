import style from "./style.module.sass";

export default function ArtigosPage() {
  const artigos = [
    {
      titulo: "Sobre a Nulidade Matrimonial",
      arquivo: "/artigosAdv/sobre nulidade matrimonial 1.pdf",
    },
    {
      titulo:
        "A Personalidade Jurídica dos Bebês Reborn à Luz do Ordenamento Brasileiro",
      arquivo:
        "/artigosAdv/A Personalidade Jurídica dos Bebês Reborn à Luz do Ordenamento Brasileiro.pdf",
    },
    {
      titulo: "Quando o imóvel é seu, mesmo sem escritura",
      arquivo: "/artigosAdv/QUANDO O IMÓVEL É SEU.pdf",
    },
    {
      titulo: "Quando o voo atrasa, o direito não pode falhar!",
      arquivo:
        "/artigosAdv/QUANDO O VOO ATRASA, O DIREITO NÃO PODE FALHAR!.pdf",
    },
    {
      titulo:
        "Fogos de artifício: Tradição em festa ou ameça à saúde pública? Novo Projeto de Lei em Itabaiana/SE",
      arquivo: "/artigosAdv/FOGOS DE ARTIFÍCIO. artigo.pdf",
    },
  ];

  return (
    <div className={style.container}>
      <h1>Artigos Jurídicos</h1>
      <p>
        Explore conteúdos produzidos com responsabilidade e clareza para tirar
        suas dúvidas e ampliar seu conhecimento.
      </p>
      <ul className={style.listaArtigos}>
        {artigos.map((artigo, index) => (
          <li key={index}>
            <a href={artigo.arquivo} target="_blank" rel="noopener noreferrer">
              📄 {artigo.titulo}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
