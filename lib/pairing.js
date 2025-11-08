export function createPairs(participants) {
if (!Array.isArray(participants)) return {}
const n = participants.length
if (n < 2) return {}
const arr = participants.slice()
for (let i = arr.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1))
;[arr[i], arr[j]] = [arr[j], arr[i]]
}
const receivers = arr.slice()
for (let i = 0; i < n; i++) {
if (arr[i].id === receivers[i].id) {
const swapIdx = (i + 1) % n
;[receivers[i], receivers[swapIdx]] = [receivers[swapIdx], receivers[i]]
}
}
const map = {}
for (let i = 0; i < n; i++) map[arr[i].id] = receivers[i].id
return map
}
