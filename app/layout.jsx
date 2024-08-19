import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import PageTransition from "@/components/ui/PageTransition";
import StairTransition from "@/components/ui/StairTransition";

const jetBrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-jetBrains_Mono",
});

export const metadata = {
  title: "Joy Dhar",
  description: "Joy Dhar's Portfolio Website || Software Engineer || Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrains_Mono.variable}>
        <Header />
        <PageTransition>
          <StairTransition />
          {children}
        </PageTransition>
      </body>
    </html>
  );
}