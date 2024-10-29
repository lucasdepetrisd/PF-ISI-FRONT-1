import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/PF-ISI-FRONT/", // Asegúrate de usar el nombre exacto de tu repositorio
});
