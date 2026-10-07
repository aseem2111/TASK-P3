
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { auth, db } from '../firebase'
import './auth.css'

function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSignup(e) {
    e.preventDefault()
    setError('')

    if (!name.trim()) {
      setError('Please enter your name.')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    setLoading(true)

    try {
      const result = await createUserWithEmailAndPassword(
        auth, email.trim(), password
      )

      await updateProfile(result.user, {
        displayName: name.trim()
      })

      try {
        await Promise.race([
          setDoc(doc(db, 'users', result.user.uid), {
            name: name.trim(),
            email: email.trim(),
            createdAt: new Date()
          }),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Profile save timed out')), 8000)
          )
        ])
      } catch (profileError) {
        console.error('Profile save error:', profileError)
      }

      navigate('/login', { replace: true })
    } catch (err) {
      const messages = {
        'auth/email-already-in-use': 'This email is already registered. Please log in.',
        'auth/invalid-email': 'Please enter a valid email address.',
        'auth/weak-password': 'Password must be at least 6 characters.',
        'auth/operation-not-allowed': 'Enable Email/Password in Firebase Authentication.',
        'auth/network-request-failed': 'Check your internet connection.'
      }

      setError(messages[err.code] || err.message || 'Signup failed.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create a DEV@Deakin Account</h2>

        <form onSubmit={handleSignup}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter your full name" required />

          <label htmlFor="email">Email</label>
          <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" required />

          <label htmlFor="password">Password</label>
          <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} minLength={6} placeholder="Create a password" required />

          <label htmlFor="confirmPassword">Confirm password</label>
          <input id="confirmPassword" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} minLength={6} placeholder="Confirm your password" required />

          {error && <p role="alert">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  )
}

export default Signup
