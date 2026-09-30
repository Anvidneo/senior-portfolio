import { Anton, Archivo, JetBrains_Mono } from "next/font/google";

const display = Anton({ variable: "--font-display", subsets: ["latin"], weight: "400", display: "swap" });
const body = Archivo({ variable: "--font-body", subsets: ["latin"], weight: ["400", "500", "700"], display: "swap" });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["500", "700"], display: "swap" });

export const fontVariables = `${display.variable} ${body.variable} ${mono.variable}`;
