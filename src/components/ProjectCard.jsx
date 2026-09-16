function ProjectCard({ image, title, description }) {
  return (
    <div className="article-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default ProjectCard