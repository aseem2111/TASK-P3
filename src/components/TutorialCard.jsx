function TutorialCard({ image, title, description, link }) {
  return (
    <div className="article-card">
      <img src={image} alt={title} />

      <h3>{title}</h3>

      <p>{description}</p>

      <a href={link} target="_blank" rel="noreferrer">
        Read Tutorial
      </a>
    </div>
  )
}

export default TutorialCard