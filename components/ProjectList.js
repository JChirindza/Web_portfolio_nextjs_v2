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
                                                        {post.frontmatter.title}{" "}
                                                        &rarr;
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
                                                href="projects.html"
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
            <style jsx>
                {`
                    margin-bottom: 0;
                    a:hover {
                        opacity: 1;
                    }
                    a:hover li div.hero_image img {
                        opacity: 0.8;
                        transition: opacity 0.3s ease;
                    }
                    a:hover li .project__info h2,
                    a:hover li .project__info h3,
                    a:hover li .project__info p {
                        transform: translateX(10px);
                        transition: transform 0.5s ease-out;
                    }
                    .hero_image {
                        width: 100%;
                        height: 33vh;
                        overflow: hidden;
                        background-color: #000;
                    }
                    .hero_image img {
                        object-fit: cover;
                        object-position: 50% 50%;
                        opacity: 1;
                        transition: opacity 0.3s ease;
                        min-height: 100%;
                    }
                    .project__info {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        padding: 1.5rem 1.25rem;
                        transform: translateX(0px);
                        transition: transform 0.3s ease-in;
                        border-bottom: 1px solid #ebebeb;
                    }
                    .project__info h2,
                    .project__info h3,
                    .project__info p {
                        transform: translateX(0px);
                        transition: transform 0.5s ease-out;
                    }
                    li {
                        opacity: inherit;
                        display: flex;
                        justify-content: center;
                        flex-direction: column;
                        min-height: 38vh;
                        margin-bottom: 0;
                    }
                    h2 {
                        margin-bottom: 0.5rem;
                    }
                    h3 {
                        margin-bottom: 1rem;
                    }
                    p {
                        max-width: 900px;
                    }
                    @media (min-width: 768px) {
                        li {
                            min-height: 250px;
                            height: 33.333vh;
                            flex-direction: row;
                        }
                        .hero_image {
                            height: 100%;
                        }
                        .hero_image img {
                            min-width: 100%;
                            height: 100%;
                            width: auto;
                            min-height: 0;
                        }
                        .project__info {
                            min-width: 70%;
                        }
                    }
                    @media (min-width: 1280px) {
                        .project__info {
                            padding: 3rem;
                        }
                        h3 {
                            margin-bottom: 1.2rem;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default ProjectList;
