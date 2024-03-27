import TransitionProvider from "@/components/transitionProvider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shivam Gupta",
  description: `The best Animated Portfolio website created using NextJS and Framer-Motion 
                ~ by Shivam Gupta - Mern Developer`,
  metadataBase: new URL("https://shivam-gupta-portfolio.vercel.app"),
  verification: { google: "jETJr9s-P4kd2glNc5ZVKJr0TMTtbDm8RavCQ1QGzj4" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children} </TransitionProvider>
      </body>
    </html>
  );
}
