import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const JWT = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3NTg3MzcwOTAsImV4cCI6MTc5MDI3MzA5NywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIktleSI6IldFQkNIQVNFIn0.8Wgpm-J2YXjaqhpmpb7m_IsJJAom-s1qV1umxOPzdqE'
const KEY = 'WEBCHASE'

export default function Round4() {
  const [val, setVal] = useState('')
  const [msg, setMsg] = useState('')
  const navigate = useNavigate()

  function checkKey(input) {
    if (input === JWT) {
      setMsg('It is a JWT token, not the key')
      return
    }

    if (input === KEY) {
      setMsg('Congratulations!')
      setTimeout(() => {
        // Redirect to internal page
        // navigate('/next')

        // Or redirect to external URL
        window.location.href = 'https://sdc-password-game.vercel.app'
      }, 700)
      return
    }

    setMsg('Wrong key, try again!')
  }

  function handleChange(e) {
    setVal(e.target.value)
    setMsg('')
    checkKey(e.target.value) // live feedback on typing
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') checkKey(val) // submit on Enter
  }

  return (
    <div className="page">
      <div className="card">
        <h1 className="title">Round 4</h1>
        <input
          className="input"
          value={val}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          aria-label="key-input"
          autoFocus
        />
        <h2 className="texts">
          HINT: Follow @SDC Insta &nbsp;
          <a href="https://www.instagram.com/frontend_frenzy/" target="_blank" rel="noreferrer">
            frontend_frenzy
          </a>
        </h2>
        {msg && (
          <p className={`message ${msg === 'Congratulations!' ? 'success' : 'info'}`}>
            {msg}
          </p>
        )}
      </div>
    </div>
  )
}
