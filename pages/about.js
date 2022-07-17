import Head from "next/head";
import Meta from "../components/Meta";
const about = () => {
    return (
        <section className="s1">
            <Meta title="About" />

            <Head>
                <title>About</title>
                <meta rel="og:description" content="About | Joao Chirindza" />
                <meta name="description" content="About | Joao Chirindza" />
            </Head>

            <div className="main_container">
                <h2>ABOUT</h2>

                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>
        </section>
    );
};

export default about;
