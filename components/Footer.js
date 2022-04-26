import footerStyles from "../styles/Footer.module.css";

const Footer = () => {
    const x = 2;
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
                                href="https://twitter.com/jchirindza"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {" "}
                                João Chirindza
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
                                    href="https://github.com/JChirindza/"
                                    target="_blank"
                                    title="Github"
                                    rel="noreferrer"
                                >
                                    <i className="fab fa-github fa-lg"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/john-chirindza-7676085b/"
                                    title="LinkedIn"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fab fa-linkedin fa-lg"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer"
                                    title="Facebook"
                                >
                                    <i className="fab fa-facebook fa-lg"></i>
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
