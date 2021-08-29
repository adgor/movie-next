import "tailwindcss/tailwind.css";
import "../components/styles.css";
import "swiper/css/bundle";
import { Layout } from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
