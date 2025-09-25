import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// replace these with real values or import them instead
const JWT = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3NTg3MzcwOTAsImV4cCI6MTc5MDI3MzA5NywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIktleSI6IldFQkNIQVNFIn0.8Wgpm-J2YXjaqhpmpb7m_IsJJAom-s1qV1umxOPzdqE'
const KEY = 'WEBCHASE'

export default function Round4(){   
  const [val, setVal] = useState('')
  const [msg, setMsg] = useState('')
  const navigate = useNavigate()

  function handleChange(e){
    const v = e.target.value
    setVal(v)
    setMsg('')

    if (v === JWT) {
      setMsg('it is a jwt token, not the key')
      return
    }

    if (v === KEY) {
      setMsg('congratulations')
      // small delay so user sees the message before navigation
      setTimeout(() => navigate('/next'), 700)
      return
    }
  }

  return (
    <div className="page">
      <div className="card">
        <h1 className="title">Round 4</h1>
        <input
          className="input"
          value={val}
          onChange={handleChange}
          aria-label="key-input"
          autoFocus
        />
        <h2 className = "texts">HINT : "Follow @SDC Insta && https://www.instagram.com/frontend_frenzy?igsh=MWxjMXY0cjNqcDBnMA=="</h2>
        {msg && (
          <p className={`message ${msg === 'congratulations' ? 'success' : 'info'}`}>
            {msg}
          </p>
        )}
      </div>
    </div>
  )
}
