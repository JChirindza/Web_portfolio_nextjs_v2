import Image from "next/image";

const writings = () => {
    return (
        <>
            <section className="s1">
                <div className="main_container">
                    <h2>WRITINGS</h2>

                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>

                    <div className="under_constraction">
                        <Image
                            className="thumbnail"
                            width="200"
                            height="200"
                            src="/page_under_construction.png"
                            alt=""
                        ></Image>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .under_constraction {
                    display: flex;
                    justify-content: center;
                    margin: 5rem 0;
                }
            `}</style>
        </>
    );
};

export default writings;
