import Head from 'next/head'

const Meta = ({title, keywords, description}) => {
    return (
        <head>
            <meta name='viewport'
            content='width=device-width, 
            initial-scale=1'/>

            <meta name='description' content={description} />

            <meta charSet='utf-8' />
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
        </head>
    )
}

Meta.defaultProps = {
    title: 'WebDev Newz',
    keywords: 'Web development, programming',
    description: 'Get the latest news in web development'
}

export default Meta