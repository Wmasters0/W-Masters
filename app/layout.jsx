import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "W Masters | Trading Signals & Market Education",
  description: "Ελληνική trading κοινότητα με VIP Discord signals, market analysis, education και ROI dashboard."
};

export default function RootLayout({ children }) {
  return (
    <html lang="el">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
