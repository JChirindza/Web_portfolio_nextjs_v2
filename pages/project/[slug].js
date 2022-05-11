import * as React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Meta from "../../components/Meta";
import Link from "next/dist/client/link";
import Image from "next/image";
import markdownStyles from "../../styles/MarkdownProject.module.css";

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

                    <div className="project__header">
                        <div className="project__info">
                            <h2 className="text_center">{frontmatter.title}</h2>
                        </div>

                        <Image
                            src={frontmatter.hero_image}
                            width={1000}
                            height={562}
                            alt={frontmatter.title}
                        />

                        <div className="description">
                            <span>{frontmatter.description}</span>
                        </div>
                    </div>

                    <div className="project__body">
                        <ReactMarkdown className={markdownStyles["markdown"]}>
                            {markdownBody}
                        </ReactMarkdown>
                    </div>

                    <div className="project__footer">
                        <div className="author">
                            <label htmlFor="">Written By:</label>
                            <span>{frontmatter.author}</span>
                        </div>

                        <div className="row next_back_btn">
                            <div className="column_6 back">
                                <Link href="/">
                                    <a>← Back to home</a>
                                </Link>
                            </div>
                            <div className="column_6 next">
                                <Link
                                    key={frontmatter.slug}
                                    href={{
                                        pathname: `/project/${frontmatter.slug}`,
                                    }}
                                >
                                    <a>Next project &rarr;</a>
                                </Link>
                            </div>
                            {/* set next md project */}
                        </div>
                    </div>
                </div>

                <style jsx>
                    {`
                        .main_container {
                            max-width: 1000px;
                        }
                        .project__body {
                            display: flex;
                            justify-content: center;
                        }
                        .project__header .description {
                            padding: 15px 0;
                        }

                        .project__body {
                        }

                        .project__footer {
                            margin: 25px 0;
                        }

                        .project__footer .row {
                            display: -ms-flexbox;
                            display: flex;
                            -ms-flex-wrap: wrap;
                            flex-wrap: wrap;
                        }

                        .project__footer .next_back_btn {
                            margin: 40px 0;
                        }

                        .project__footer .author span {
                            padding-left: 15px;
                        }

                        .project__footer .next {
                            display: flex;
                            justify-content: flex-end;
                        }
                    `}
                </style>
            </section>
        </>
    );
}

export async function getStaticProps({ ...ctx }) {
    const { slug } = ctx.params;
    const content = await import(`../../projects/${slug}.md`);
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
    //get all .md files in the projects dir
    const projects = glob.sync("projects/**/*.md");

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
