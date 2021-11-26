import Link from 'next/link'
import projectStyles from '../styles/Project.module.css'

const ProjectItem = ({project: project}) => {
    return (
        <Link href="/project/[id]" as={`/project/${project.id}`}>
            <div className={projectStyles.card}>
                <div className='post'>
                    <div>
                        <img className='thumbnail' width='100%' src={project.img_main_path} />
                    </div>
                    <div className='post_preview'>
                        <h6 className='post_title'>{project.title} &rarr;</h6>
                        <p className='post_intro'>{project.excerpt}</p>
                        <div className='project-veiw'>
                            <a href="projects.html" data-toggle="tooltip" title="View More"><i className="fas fa-eye fa-lg"></i></a>
                            <a href="https://github.com/JChirindza" data-toggle="tooltip" title="Github Repository"><i className="fab fa-github fa-lg"></i></a>
                        </div>
                    </div>
                </div>

                <div className='post_tech'>
                    <label className='tech_used'>{project.tech_used}</label>
                </div>
            </div>
        </Link>
    )
}

export default ProjectItem