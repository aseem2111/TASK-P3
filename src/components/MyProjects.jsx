import ProjectCard from './ProjectCard'

function Myprojects() {

  const projects = [
    {
      title: "BMI Checker",
      description: "A simple tool that calculates your Body Mass Index (BMI) based on your height and weight.",
      image: "/BMI.png",
    },
    {
      title: "Student Grade Checker",
      description: "A simple tool that checks a student's marks and calculates their overall grade.",
      image: "/student.png",
    },
  ]

  return (
    <section id="work" className="featured-articles">
      <h2>My Projects</h2>

      <div className="articles-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}
      </div>
    </section>
  )
}

export default Myprojects