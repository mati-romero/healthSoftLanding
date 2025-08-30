import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Script from "next/script";

export const metadata = {
  title: "HealthSoft",
  description: "Proyecto con Next.js y Bootstrap",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>

        {/* Script de Bootstrap para dropdowns y collapse */}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
