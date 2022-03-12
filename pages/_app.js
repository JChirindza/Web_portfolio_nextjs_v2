import Layout from "../components/layout";
import "../styles/globals.css";
import "../public/font-awesome/css/all.min.css";

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
