import "./globals.css";
import {Nunito_Sans} from "next/font/google"
import Link from "next/link";
import ThemeCompennet from "./components/ThemeComponet";
import { ThemeProvider } from "./components/provider";


const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight:[ "200","300", "400", "500", "600","700", "800"],
  variable: "--ff-nunito-sans"
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider>
       <body className={nunitoSans.className}>
           <header className="flex justify-between items-center px-4 py-3 ">
            <Link href={`/`}>
             <h1>Where in the world?</h1>
            </Link>
          <ThemeCompennet />
          </header>
           {children}
       </body>
      </ThemeProvider>
    </html>
  );
}
