import Meta from "../components/Meta";
import HomePage from "./home";
import matter from "gray-matter";
import ProjectList from "../components/ProjectList";
import OtherProjects from "../components/OtherProjects";
import Contact from "../components/Contact";
import siteMetadata from "../data/siteMetadata";

const Index = (props) => {
    return (
        <>
            <Meta />
            <HomePage />
            <ProjectList allProjects={props.allProjects} />
            <OtherProjects />
            <Contact />
        </>
    );
};

export default Index;

export async function getStaticProps() {
    //get projects & context from folder
    const projects = ((context) => {
        const keys = context.keys();
        const values = keys.map(context);

        const data = keys.map((key, index) => {
            // Create slug from filename
            const slug = key
                .replace(/^.*[\\\/]/, "")
                .split(".")
                .slice(0, -1)
                .join(".");
            const value = values[index];
            // Parse yaml metadata & markdownbody in document
            const document = matter(value.default);
            return {
                frontmatter: document.data,
                markdownBody: document.content,
                slug,
            };
        });
        return data;
    })(require.context("../projects", true, /\.md$/));

    return {
        props: {
            allProjects: projects,
        },
    };
}
