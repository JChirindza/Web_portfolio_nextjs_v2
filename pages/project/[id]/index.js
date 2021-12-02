import { server } from "../../../config"
import Link from "next/link"
import { useRouter } from "next/router" 
import Meta from "../../../components/Meta"

const project = ({project}) => {

    return (
        <>
            <section className='s2'>
                <div className='main_container'>
                    <Meta title={project.title} description={project.excerpt}/>
                    <h2 className='text_center'>{project.title}</h2>
                    <img src={project.img1_path} width='100%' alt="" />
                    <br />
                    <p>{project.description}</p>
                    <br />
                    <img src={project.img2_path} width='100%' alt="" />
                    <br />
                    <div className='text_center'>
                        <h4>Tech used:</h4>
                        <p>{project.tech_used}</p>
                        <br />
                    </div>
                    <div className='row back_next'>
                        <div className='column_6 text_left back'>
                            <Link href='/'>← Back to home</Link>
                        </div>
                        <div className='column_6 text_right next'>
                            <Link href="/project/[id]" as={`/project/${project.id}`}> Next project  &rarr;</Link>
                        </div>
                        {/* set next id */}
                    </div>
                </div>
            </section>
        </>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(
        `${server}/api/projects/${context.params.id}`
    )

    const project = await res.json()

    return {
       props: {
        project,
       }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(
        `${server}/api/projects`
    )

    const project = await res.json()

    const ids = project.map(project => project.id)

    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback: false,
    }
}

export default project