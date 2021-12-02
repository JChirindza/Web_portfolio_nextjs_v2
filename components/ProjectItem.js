import Link from 'next/link'
import projectStyles from '../styles/Project.module.css'

const ProjectItem = ({project: project}) => {
    return (
        <>
            <div className={projectStyles.card}>
                <div className={projectStyles.post}>
                    <Link href="/project/[id]" as={`/project/${project.id}`}>
                        <div className={projectStyles.project_image}>
                            <img className='thumbnail' width='100%' src={project.img1_path} />
                        </div>
                    </Link>
                    <div className={projectStyles.post_preview}>
                        <Link href="/project/[id]" as={`/project/${project.id}`}>
                            <h6 className={projectStyles.post_title}>{project.title} &rarr;</h6>
                        </Link>
                        <p className={projectStyles.post_intro}>{project.description}</p>
                    </div>
                </div>

                <div className={projectStyles.post_tech}>
                    <label className={projectStyles.tech_used}>{project.tech_used}</label>
                </div>

                <div className={projectStyles.project_veiw}>
                    <a href="projects.html" data-toggle="tooltip" title="View More"><i className="fas fa-eye fa-lg"></i></a>
                    <a href="https://github.com/JChirindza" data-toggle="tooltip" title="Github Repository"><i className="fab fa-github fa-lg"></i></a>
                </div>
            </div>
        </>
    )
}

export default ProjectItem