import metaData from "../data/siteMetaData";

const Meta = () => {
    return (
        <head>
            <meta
                name="viewport"
                content="width=device-width, 
                initial-scale=1"
            />
            <meta name="description" content={metaData.description} />
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <title>{metaData.title}</title>
        </head>
    );
};

export default Meta;
