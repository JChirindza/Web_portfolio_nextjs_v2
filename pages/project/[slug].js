import * as React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Meta from "../../components/Meta";
import Link from "next/dist/client/link";
import Image from "next/image";

const glob = require("glob");

export default function ProjectTemplate({
    frontmatter,
    markdownBody,
    siteTitle,
}) {
    function reformatDate(fullDate) {
        const date = new Date(fullDate);
        return date.toDateString().slice(4);
    }

    /*
     ** Odd fix to get build to run
     ** It seems like on first go the props
     ** are undefined — could be a Next bug?
     */

    if (!frontmatter) return <></>;

    return (
        <>
            <section className="s2">
                <div className="main_container">
                    <Meta
                        title={frontmatter.title}
                        description={frontmatter.description}
                    />
                    <div className="project__info">
                        <h2 className="text_center">{frontmatter.title}</h2>
                    </div>

                    <Image
                        src={frontmatter.hero_image}
                        width={1200}
                        height={800}
                        alt={frontmatter.title}
                    />

                    <div className="project__body">
                        <ReactMarkdown>{markdownBody}</ReactMarkdown>
                    </div>

                    <div className="project__footer">
                        <label htmlFor="">Written By:</label>
                        <span className="author">{frontmatter.author}</span>
                    </div>

                    <div className="row back_next">
                        <div className="column_6 text_left back">
                            <Link href="/">← Back to home</Link>
                        </div>
                        <div className="column_6 text_right next">
                            {/* <Link
                                key={post.slug}
                                href={{
                                    pathname: `/project/${post.slug}`,
                                }}
                            >
                                Next project &rarr;
                            </Link> */}
                        </div>
                        {/* set next md project */}
                    </div>
                </div>

                <style jsx>
                    {`
                        .project__footer {
                            margin: 25px 0;
                        }
                        span {
                            color: grey;
                        }

                        h3 {
                            font-weight: bold;
                        }
                    `}
                </style>
            </section>
        </>
    );
}

export async function getStaticProps({ ...ctx }) {
    const { slug } = ctx.params;
    const content = await import(`../../posts/${slug}.md`);
    const config = await import(`../../data/config.json`);
    const data = matter(content.default);

    return {
        props: {
            siteTitle: config.title,
            frontmatter: data.data,
            markdownBody: data.content,
        },
    };
}

export async function getStaticPaths() {
    //get all .md files in the posts dir
    const projects = glob.sync("posts/**/*.md");

    //remove path and extension to leave filename only
    const projectSlugs = projects.map((file) =>
        file.split("/")[1].replace(/ /g, "-").slice(0, -3).trim()
    );

    // create paths with `slug` param
    const paths = projectSlugs.map((slug) => `/project/${slug}`);
    return {
        paths,
        fallback: false,
    };
}
