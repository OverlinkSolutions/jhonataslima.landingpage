
import Header from "@/components/header";
import "./globals.css";
import Footer from "@/components/footer";
import HeaderTop from "@/components/header-top/HeaderTop";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <HeaderTop />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
