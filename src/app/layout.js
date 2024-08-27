import { Jost } from "next/font/google";
import "./globals.css";
import EaseOut from './components/template/EaseOutComponent';

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "GemAfaWell",
  description: "CV for Ms. Gemini S. Powell, Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <EaseOut>
          {children}
        </EaseOut>
      </body>
    </html>
  );
}
