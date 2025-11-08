import Head from 'next/head'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import SignUpForm from '../components/SignUpForm'
import { createPairs } from '../lib/pairing'


const CHALLENGES = [
'Gift something that represents their favourite app',
'Create a tiny UX post-it with a cheeky critique',
'Buy something under £5 that sparks joy',
'Wrap a common PM phrase like “circle back” in a creative way'
]


export default function Home() {
const [participants, setParticipants] = useState([])
const [pairs, setPairs] = useState({})


useEffect(() => {
const saved = localStorage.getItem('pmsanta_participants')
if (saved) setParticipants(JSON.parse(saved))
}, [])


useEffect(() => {
localStorage.setItem('pmsanta_participants', JSON.stringify(participants))
}, [participants])


function add(p) { setParticipants(prev => [...prev, p]) }


function generatePairs() {
const map = createPairs(participants)
setPairs(map)
}


function reveal(id) {
const recId = pairs[id]
if (!recId) return
const rec = participants.find(x => x.id === recId)
alert(`🎁 You are Secret Santa for: ${rec?.name}`)
}


return (
<div className="container">
<Head>
<title>PM Santa 🎅</title>
</Head>


<div className="card">
<h1>🎅 PM Santa — Secret Santa for Product Managers</h1>
<p>Sign up, draw names, and enjoy fun challenges!</p>


<SignUpForm onAdd={add} />
<button onClick={generatePairs}>Generate Pairs</button>


<h2>Participants</h2>
{participants.map(p => (
<div key={p.id} style={{ marginBottom: '0.5rem' }}>
{p.name} — {p.team || 'Team N/A'}
{pairs[p.id] && <button onClick={() => reveal(p.id)} style={{ marginLeft: '1rem' }}>Reveal</button>}
</div>
))}


<h3>🎲 Random Challenge:</h3>
<motion.div whileHover={{ scale: 1.05 }} style={{ padding: '1rem', border: '1px solid #cbd5e1', borderRadius: '8px' }}>
{CHALLENGES[Math.floor(Math.random() * CHALLENGES.length)]}
</motion.div>
</div>
</div>
)
}
