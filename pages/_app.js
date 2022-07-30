import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import "../public/font-awesome/css/all.min.css";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}

export default MyApp;
