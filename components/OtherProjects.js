import React, { useState, useEffect } from "react";

function reformatDate(fullDate) {
    const date = new Date(fullDate);
    return date.toDateString().slice(4);
}

const MAX_DISPLAY = 5;
const totalProjects = 0;

export default function Repos() {
    const [repositories, setRepositories] = useState([]);
    const [next, setNext] = useState(MAX_DISPLAY);

    const fetchRepoData = async (start, end) => {
        const response = await fetch(
            "https://api.github.com/users/jchirindza/repos"
        );
        const data = await response.json();
        totalProjects = data.length;
        setRepositories(data.slice(0, end));
    };

    useEffect(() => {
        fetchRepoData(0, MAX_DISPLAY);
    }, []);

    const showMoreProjects = () => {
        MAX_DISPLAY += 3;
        fetchRepoData(next, MAX_DISPLAY);
        setNext(next + MAX_DISPLAY);
    };

    return (
        <>
            <section className="s2 some_projects" id="projects">
                <div className="main_container">
                    <h3 className="text_center">
                        <span className="github_icon">
                            <i className="fab fa-github"></i>
                        </span>
                        OTHER PROJECTS
                        <span className="github_icon">
                            <i className="fab fa-github"></i>
                        </span>
                    </h3>
                    <div>
                        <table className="tbl_other_projects">
                            <thead>
                                <th width="10%">Lang</th>
                                <th width="30%" className="name">
                                    <i className="fi-rr-facebook"></i>Name
                                    <i className="fas fa-external-link-alt"></i>
                                </th>
                                <th width="40%">Description</th>
                                <th width="10%">Last update</th>
                                <th width="5%">Stars</th>
                            </thead>
                            <tbody>
                                {repositories.map((repo) => (
                                    <tr key={repo.id}>
                                        <td>{repo.language}</td>
                                        <td>
                                            <a
                                                key={repo.id}
                                                href={repo.html_url}
                                                className="name"
                                                target="_blank"
                                                rel="noreferrer"
                                                title="Github repo"
                                            >
                                                {repo.name}
                                                <i className="fab fa-github fa-lg"></i>
                                            </a>
                                        </td>
                                        <td>
                                            <label className="description">
                                                {repo.description}
                                            </label>
                                        </td>
                                        <td>{reformatDate(repo.updated_at)}</td>
                                        <td className="stars">
                                            <i className="fas fa-star"></i>
                                            {repo.stargazers_count}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="view_more_projects">
                        {totalProjects > MAX_DISPLAY ? (
                            <div className="load_more_btn">
                                <button
                                    onClick={showMoreProjects}
                                    className="more_button"
                                >
                                    Load More
                                </button>
                            </div>
                        ) : (
                            <label className="no_more_project">
                                😔 No more projects 😔
                            </label>
                        )}
                    </div>
                </div>
            </section>
            <style jsx>
                {`
                    table {
                        margin-bottom: 40px;
                        border-spacing: 0;
                    }

                    th {
                        text-align: left;
                        padding: 10px 0 5px 0px;
                        border-bottom: 1px solid var(--borderColor);
                        color: var(--secondaryText) !important;
                    }

                    thead .name i {
                        padding-left: 10px;
                    }

                    td {
                        padding: 10px 10px 12px 0;
                        color: var(--secondaryText);
                        border-bottom: 1px solid var(--mainColor);
                    }

                    td a {
                        color: var(--mainText);
                        font-weight: bold;
                        border-bottom: 1px dotted rgba(128, 128, 128, 0.35);
                    }

                    td a:hover {
                        color: var(--buttonColor);
                        border: none;
                    }

                    .tbl_other_projects th {
                        color: var(--mainText);
                    }

                    tr:hover {
                        background-color: var(--mainColor);
                    }

                    tbody {
                        color: var(--secondaryText);
                    }

                    td .name i {
                        padding-left: 10px;
                        display: none;
                    }

                    td:hover .name i {
                        display: inline;
                    }

                    td .description {
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }

                    td {
                        height: 50px;
                    }

                    .stars {
                        text-align: center;
                    }

                    .stars i {
                        padding-right: 5px;
                        color: gold;
                        text-shadow: 0 0 3px #000;
                    }

                    .view_more_projects {
                        display: flex;
                        justify-content: center;
                    }

                    .more_button {
                        color: var(--secondaryText);
                        background-color: var(--secondaryColor);
                        border: 1px solid var(--borderColor);
                        border-radius: 5px;
                        font-size: 13px;
                        line-height: 1;
                        text-decoration: none;
                        cursor: pointer;
                        padding: 0.8rem 2rem;
                        margin: 40px auto 0px;
                    }

                    .more_button:hover {
                        box-shadow: 1px 1px 5px var(--previewShadow);
                    }

                    .some_projects .github_icon {
                        color: var(--secondaryText);
                        padding: 0 10px;
                        font-size: 16px;
                    }

                    @media (min-width: 768px) {
                    }
                    @media (min-width: 1280px) {
                    }
                `}
            </style>
        </>
    );
}
