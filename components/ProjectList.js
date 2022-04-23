import Link from "next/link";
import ReactMarkdown from "react-markdown";
import projectStyles from "../styles/Project.module.css";
import Image from "next/image";

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
                                allProjects.map((project) => (
                                    <div
                                        key={project.slug}
                                        className={projectStyles.card}
                                    >
                                        <div className={projectStyles.post}>
                                            <Link
                                                key={project.slug}
                                                href={{
                                                    pathname: `/project/${project.slug}`,
                                                }}
                                                passHref
                                            >
                                                <div
                                                    className={
                                                        projectStyles.project_image
                                                    }
                                                >
                                                    <Image
                                                        className="thumbnail"
                                                        width="300"
                                                        height="180"
                                                        src={
                                                            project.frontmatter
                                                                .hero_image
                                                        }
                                                        alt={
                                                            project.frontmatter
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
                                                    key={project.slug}
                                                    href={{
                                                        pathname: `/project/${project.slug}`,
                                                    }}
                                                    passHref
                                                >
                                                    <h6
                                                        className={
                                                            projectStyles.post_title
                                                        }
                                                    >
                                                        <span>
                                                            {
                                                                project
                                                                    .frontmatter
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
                                                        project.frontmatter
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
                                                {project.frontmatter.tech_used}
                                            </label>
                                        </div>

                                        <div
                                            className={
                                                projectStyles.external_links
                                            }
                                        >
                                            {project.frontmatter
                                                .web_site_url ? (
                                                <a
                                                    href={
                                                        project.frontmatter
                                                            .web_site_url
                                                    }
                                                    data-toggle="tooltip"
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    title="Web site"
                                                    className={
                                                        projectStyles.link1
                                                    }
                                                >
                                                    <i className="fas fa-external-link-alt"></i>
                                                </a>
                                            ) : (
                                                <span></span>
                                            )}

                                            {project.frontmatter.github_url ? (
                                                <a
                                                    href={
                                                        project.frontmatter
                                                            .github_url
                                                    }
                                                    data-toggle="tooltip"
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    title="Github Repository"
                                                    className={
                                                        projectStyles.link2
                                                    }
                                                >
                                                    <i className="fab fa-github"></i>
                                                </a>
                                            ) : (
                                                <span></span>
                                            )}
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
