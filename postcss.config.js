module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss")("./tailwind.config.js"), // Asegúrate de que la ruta sea correcta
    require("autoprefixer"),
  ],
};
