import { useState } from 'react'
export default function Round4(){
const [val, setVal] = useState('')
const [msg, setMsg] = useState('')
const navigate = useNavigate()


function handleChange(e){
const v = e.target.value
setVal(v)
setMsg('')


if (v === JWT) {
setMsg('it is a jwt token not the key')
return
}


if (v === KEY) {
setMsg('congradulations')
// small delay so user sees the message before navigation
setTimeout(() => navigate("https://sdc-password-game.vercel.app"), 700)
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
{msg && (
<p className={`message ${msg === 'congradulations' ? 'success' : 'info'}`}>{msg}</p>
)}
</div>
</div>
)
}