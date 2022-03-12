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
            <section className="s1 some_projects" id="contact">
                <div className="main_container">
                    <h3 className="text_center">CONTACT ME</h3>
                    <div id="contact_form">
                        <div className={projectStyles.grid}>
                            <input
                                className="input-field"
                                type="text"
                                placeholder="your-email@exemple.com"
                                name="name"
                            />
                            <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                placeholder="Write something were..."
                                className="input-field"
                            ></textarea>
                        </div>

                        <div className="">
                            <button id="submit-btn" type="submit">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>
                {`
                    #contact_form {
                        display: block;
                        max-width: 500px;
                        margin: 0 auto;
                        padding: 15px;
                        background-color: var(--mainColor);
                        margin-bottom: 50px;
                    }

                    #contact_form label {
                        line-height: 2.7em;
                    }

                    #contact_form textarea {
                        min-height: 100px;
                        font-size: 14px;
                    }

                    .input-field {
                        width: 100%;
                        padding: 10px;
                        margin: 10px 0;
                        background-color: var(--secondaryColor);
                        border-radius: 5px;
                        border: 1px solid var(--borderColor);
                        font-size: 14px;
                    }

                    #submit-btn {
                        margin-top: 10px;
                        width: 100%;
                        padding-top: 10px;
                        padding-bottom: 10px;
                        color: #fff;
                        background-color: var(--buttonColor);
                        border: none;
                        cursor: pointer;
                    }
                `}
            </style>
        </>
    );
};

export default ProjectList;
