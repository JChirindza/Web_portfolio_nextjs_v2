import { projects } from '../../../projectsData'

export default function handler({ query: { id } }, res) {

    const filtered = projects.filter((project) => project.id === id)

    if (filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({ message: `Project with id of ' ${id} ' not found` })
    }
}