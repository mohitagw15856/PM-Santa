import { useState } from 'react'
import { nanoid } from 'nanoid'


export default function SignUpForm({ onAdd }) {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [team, setTeam] = useState('')


function submit(e) {
e.preventDefault()
if (!name.trim()) return
onAdd({ id: nanoid(8), name: name.trim(), email: email.trim(), team: team.trim() })
setName('')
setEmail('')
setTeam('')
}


return (
<form onSubmit={submit}>
<label>Name</label>
<input value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Alice" />
<label>Email (optional)</label>
<input value={email} onChange={e => setEmail(e.target.value)} placeholder="alice@company.com" />
<label>Squad / Team (optional)</label>
<input value={team} onChange={e => setTeam(e.target.value)} placeholder="Growth / Payments" />
<div style={{ display: 'flex', gap: '1rem' }}>
<button type="submit">Join PM Santa</button>
<button type="button" onClick={() => { setName(''); setEmail(''); setTeam('') }}>Clear</button>
</div>
</form>
)
}
