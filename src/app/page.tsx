import AreaApresentacao from "@/components/area-apresentacao";
import AreaAreasAtuacao from "@/components/area-areas-atuacao";
import AreaSobreAdv from "@/components/area-sobre-adv";

export const metadata = {
  title: 'Jhônatas Lima Melo - Advocacia Especializada',
  description: 'Advogado | OAB/SE 12.021',
};

export default function Home() {
  return (
    <>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <AreaApresentacao />
      <AreaSobreAdv />
      <AreaAreasAtuacao />
    </>
  );
}
