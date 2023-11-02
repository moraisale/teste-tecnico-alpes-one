import { ChakraProvider } from "@chakra-ui/react";
import type { Metadata } from "next";
import localFont from "next/font/local";

const BMWTypeNextFonts = localFont({
  src: [
    {
      path: "./fonts/BMWTypeNext-Bold.20210426144302.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/BMWTypeNext-Light.20210426144302.ttf",
      weight: "300",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Alpes One",
  description: "Teste técnico para a empresa Alpes One",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={BMWTypeNextFonts.className}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
