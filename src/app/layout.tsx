import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import SideNav from "./sidenav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | my-Blog',
    default: 'my-Blog'
  },
  description: "Generated blog using nextJs and Markdown",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <SideNav />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
