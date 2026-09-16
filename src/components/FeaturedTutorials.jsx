import TutorialCard from './TutorialCard'

function FeaturedTutorials() {

  const tutorials = [
    {
      image: "/photo1.jpeg",
      title: "Simple Photography Tips",
      description: "Learn some basic techniques for taking better photographs.",
      link: "https://www.adobe.com/in/creativecloud/photography/basics.html"
    },
    {
      image: "/game1.jpeg",
      title: "Creating a Gaming Setup",
      description: "Learn how to organise a comfortable and practical gaming setup.",
      link: "https://www.intel.com/content/www/us/en/gaming/resources/gaming-desk-setup.html"
    },
    {
      image: "/travel1.jpeg",
      title: "Travel Photography Tips",
      description: "Learn how to capture better photographs while exploring new places.",
      link: "https://www.usa.canon.com/learning/training-articles/training-articles-list/tips-for-pro-quality-vacation-photos"
    }
  ]

  return (
    <section className="featured-articles">
      <h2>Featured Tutorials</h2>

      <div className="articles-container">
        {tutorials.map((tutorial) => (
          <TutorialCard
            image={tutorial.image}
            title={tutorial.title}
            description={tutorial.description}
            link={tutorial.link}
          />
        ))}
      </div>
    </section>
  )
}

export default FeaturedTutorials