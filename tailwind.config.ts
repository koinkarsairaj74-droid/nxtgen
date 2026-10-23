import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"], theme: { extend: { colors: { navy:"#102A56", gold:"#D5A33D" } } }, plugins: [] } satisfies Config;
