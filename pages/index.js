import Meta from "../components/Meta";
import HomePage from "./home";
import matter from "gray-matter";
import ProjectList from "../components/ProjectList";
import OtherProjects from "../components/OtherProjects";
import Contact from "../components/Contact";
import projectStyles from "../styles/Project.module.css";

const Index = (props) => {
    return (
        <>
            <Meta />
            <HomePage />
            <ProjectList allProjects={props.allProjects} />
            <OtherProjects allProjects={props.allProjects} />
            <Contact />
        </>
    );
};

export default Index;

export async function getStaticProps() {
    const siteConfig = await import(`../data/config.json`);
    //get posts & context from folder
    const posts = ((context) => {
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
    })(require.context("../posts", true, /\.md$/));

    return {
        props: {
            allProjects: posts,
            title: siteConfig.default.title,
            description: siteConfig.default.description,
        },
    };
}
