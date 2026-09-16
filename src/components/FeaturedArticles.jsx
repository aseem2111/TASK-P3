import ArticleCard from './ArticleCard'

function FeaturedArticles() {
  const articles = [
    {
      image: "/photo.jpeg",
      title: "My Love for Photography",
      description: "I enjoy capturing nature, interesting places, and everyday moments through photography.",
      rating: "4.8",
      author: "@NatureLens"
    },
    {
      image: "/game.jpeg",
      title: "Why I Enjoy Gaming",
      description: "Gaming is one of my favourite ways to relax, have fun, and explore different virtual worlds.",
      rating: "4.7",
      author: "@GameNight"
    },
    {
      image: "/travel.jpeg",
      title: "Exploring New Places",
      description: "I enjoy visiting new places, discovering new surroundings, and capturing memorable moments.",
      rating: "4.9",
      author: "@Explorer"
    }
  ]

  return (
    <section className="featured-articles">
      <h2>Featured Articles</h2>

      <div className="articles-container">
        {articles.map((article) => (
          <ArticleCard
            image={article.image}
            title={article.title}
            description={article.description}
            rating={article.rating}
            author={article.author}
          />
        ))}
      </div>

      <button className="see-all">See all articles</button>
    </section>
  )
}

export default FeaturedArticles