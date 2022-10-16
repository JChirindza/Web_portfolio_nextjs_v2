import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import "../public/font-awesome/css/all.min.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider>
                <Layout>
                    <Script
                        strategy="lazyOnload"
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                    />

                    <Script strategy="lazyOnload" id="g-analystics">
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                            page_path: window.location.pathname,
                            });
                        `}
                    </Script>

                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    );
}

export default MyApp;
