import footerStyles from "../styles/Footer.module.css";
import siteMetadata from "../data/siteMetadata";

const Footer = () => {
    return (
        <section
            className={`${footerStyles.s2} ${footerStyles.footer}`}
            id="footer"
        >
            <div className={footerStyles.main_container}>
                <div className={footerStyles.row}>
                    <div className={footerStyles.column_6}>
                        <label>
                            Designed and Built by{" "}
                            <a
                                href={siteMetadata.twitter}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {siteMetadata.author}
                            </a>
                        </label>
                        <br />
                        <span>
                            Inspired by{" "}
                            <a
                                href="https://twitter.com/dennisivy11"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {" "}
                                @DennisIvy11 <i className="fab fa-twitter"></i>
                            </a>
                        </span>
                    </div>

                    <div className={footerStyles.column_6}>
                        <ul
                            className={`${footerStyles.icons} ${footerStyles.row}`}
                        >
                            <li>
                                <a
                                    href={siteMetadata.github}
                                    target="_blank"
                                    title="Github"
                                    rel="noreferrer"
                                >
                                    <i className="fab fa-github fa-lg"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={siteMetadata.linkedin}
                                    title="LinkedIn"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fab fa-linkedin fa-lg"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={siteMetadata.twitter}
                                    target="_blank"
                                    rel="noreferrer"
                                    title="Facebook"
                                >
                                    <i className="fab fa-twitter fa-lg"></i>
                                </a>
                            </li>
                        </ul>
                        <ul
                            className={`${footerStyles.find_me} ${footerStyles.row}`}
                        >
                            <span>Find Me</span>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
