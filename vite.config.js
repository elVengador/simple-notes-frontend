import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    define: {
      //   __APP_ENV__: process.env.VITE_URI,
      "process.env.VITE_URI": JSON.stringify(process.env.VITE_URI),
    },
  };
});
