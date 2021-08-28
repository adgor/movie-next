// module.exports = {
//   images: {
//     domains: ["www.filma24.ai"],
//   },
// };
const withTM = require("next-transpile-modules")([
  "swiper", // The package I'm trying to import
  "ssr-window",
  "dom7",
]);

module.exports = withTM({
  images: {
    domains: ["www.filma24.ai"],
  },
  reactStrictMode: true,
});
