import Link from "next/link";
import ReactMarkdown from "react-markdown";
import projectStyles from "../styles/Project.module.css";
import React, { useState, useEffect } from "react";

function reformatDate(fullDate) {
    const date = new Date(fullDate);
    return date.toDateString().slice(4);
}

export default function Repos() {
    const [repositories, setRepositories] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const fetchRepoData = async () => {
        const response = await fetch(
            "https://api.github.com/users/jchirindza/repos"
        );
        const data = await response.json();

        setRepositories(data);
    };

    useEffect(() => {
        fetchRepoData();
    }, []);

    return (
        <>
            <section className="s2 some_projects" id="projects">
                <div className="main_container">
                    <h3 className="text_center">OTHER PROJECTS</h3>
                    <div>
                        <table className="tbl_other_projects">
                            <thead>
                                <th width="5%">Lang</th>
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
                                    <tr>
                                        <td>{repo.language}</td>
                                        <td>
                                            <a
                                                key={repo.id}
                                                href={repo.html_url}
                                                className="name"
                                                target="_blank"
                                                title="Github repo"
                                            >
                                                {repo.name}
                                                <i className="fas fa-external-link-alt"></i>
                                            </a>
                                        </td>
                                        <td>{repo.description}</td>
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

                    .stars {
                        text-align: center;
                    }

                    .stars i {
                        padding-right: 5px;
                        color: gold;
                        text-shadow: 0 0 3px #000;
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
