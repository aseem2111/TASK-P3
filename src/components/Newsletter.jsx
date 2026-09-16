import { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:3000/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })

      const data = await response.json()

      if (response.ok) {
        setMessage(data.message)
        setEmail('')
      } else {
        setMessage(data.error)
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <h2>Subscribe to DEV@Deakin</h2>
        <p>
          Get the latest articles, tutorials and developer
          resources delivered straight to your inbox.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="subscribe-container">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit">Subscribe</button>
          </div>

          <p>{message}</p>
        </form>
      </div>
    </section>
  )
}

export default Newsletter