import Link from "next/link";
import ReactMarkdown from "react-markdown";
import projectStyles from "../styles/Project.module.css";

const ProjectList = ({ allProjects: allProjects }) => {
    function truncateSummary(content) {
        return content.slice(0, 200).trimEnd();
    }

    function reformatDate(fullDate) {
        const date = new Date(fullDate);
        return date.toDateString().slice(4);
    }

    return (
        <>
            <section className="s1 some_projects" id="projects">
                <div className="main_container">
                    <h3 className="text_center">SOME OF MY PROJECTS</h3>
                    <div>
                        <div className={projectStyles.grid}>
                            {allProjects.length >= 1 &&
                                allProjects.map((post) => (
                                    <div className={projectStyles.card}>
                                        <div className={projectStyles.post}>
                                            <Link
                                                key={post.slug}
                                                href={{
                                                    pathname: `/project/${post.slug}`,
                                                }}
                                            >
                                                <div
                                                    className={
                                                        projectStyles.project_image
                                                    }
                                                >
                                                    <img
                                                        className="thumbnail"
                                                        width="100%"
                                                        height="200px"
                                                        src={
                                                            post.frontmatter
                                                                .hero_image
                                                        }
                                                        alt={
                                                            post.frontmatter
                                                                .hero_image
                                                        }
                                                    />
                                                </div>
                                            </Link>
                                            <div
                                                className={
                                                    projectStyles.post_preview
                                                }
                                            >
                                                <Link
                                                    key={post.slug}
                                                    href={{
                                                        pathname: `/project/${post.slug}`,
                                                    }}
                                                >
                                                    <h6
                                                        className={
                                                            projectStyles.post_title
                                                        }
                                                    >
                                                        <span>
                                                            {
                                                                post.frontmatter
                                                                    .title
                                                            }
                                                        </span>
                                                    </h6>
                                                </Link>
                                                <p
                                                    className={
                                                        projectStyles.post_intro
                                                    }
                                                >
                                                    {
                                                        post.frontmatter
                                                            .description
                                                    }
                                                </p>
                                            </div>
                                        </div>

                                        <div
                                            className={projectStyles.post_tech}
                                        >
                                            <label
                                                className={
                                                    projectStyles.tech_used
                                                }
                                            >
                                                {post.frontmatter.tech_used}
                                            </label>
                                        </div>

                                        <div
                                            className={
                                                projectStyles.project_veiw
                                            }
                                        >
                                            <a
                                                data-toggle="tooltip"
                                                title="View More"
                                            >
                                                <i className="fas fa-eye fa-lg"></i>
                                            </a>
                                            <a
                                                href="https://github.com/JChirindza"
                                                data-toggle="tooltip"
                                                title="Github Repository"
                                            >
                                                <i className="fab fa-github fa-lg"></i>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>

                    <div className="view_projects">
                        <button className="more_button">Show More</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectList;
