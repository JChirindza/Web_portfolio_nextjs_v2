import ProjectItem from './ProjectItem'
import projectStyles from '../styles/Project.module.css'

const ProjectList = ({projects}) => {
    return (

        <section className='s1' id="projects">
            <div className='main_container'>
                <h3 className='text_center'>SOME OF MY PROJECTS</h3>
                <div>
                    <div className={projectStyles.grid}>
                        {projects.map((project) => (
                            <ProjectItem project={project} />
                        ))}
                    </div>
                </div>

                <div className='view_projects d_none'>
                    <button className="more_button">Show More</button>
                </div>
            </div>
        </section>

        
    )
}

export default ProjectList