import Head from "next/head";
import siteMetadata from "../data/siteMetadata";

const Meta = () => {
    return (
        <head>
            <meta
                name="viewport"
                content="width=device-width, 
            initial-scale=1"
            />
            <meta name="description" content={siteMetadata.description} />
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <title>{siteMetadata.title}</title>
        </head>
    );
};

export default Meta;
