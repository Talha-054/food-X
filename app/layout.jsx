import Header from "@/components/header/Header";
import "./globals.css";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Indische Tandoori, indian food in bremerhaven",
  description:
    "Willkommen im Indische Tandoori Indian Restaurant! Genießen Sie traditionelle nordindische Küche mit exotischen Zutaten, duftenden Currys und intensiven Gewürzen. Jetzt Tisch reservieren oder online bestellen.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body className="">
        {children}
        <Footer />
      </body>
      
    </html>
  );
}
