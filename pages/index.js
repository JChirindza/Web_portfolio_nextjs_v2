import { server } from '../config'
import ProjectList from '../components/ProjectList'
import Meta from '../components/Meta'
import HomePage from './home'
export default function Home({ projects }) {
  return (
    <div>
      <Meta />
      <HomePage />
      <ProjectList projects = {projects} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/projects`)
  const projects = await res.json()

  return {
    props: {
      projects,
    },
  }
}