import { useState } from 'react'
import Icon from './Icon'
import { C } from '../theme'

export default function GroupChat({ subject }) {
  const [msgs, setMsgs] = useState(
    subject.chat.map((m, i) => ({
      id: i + 1,
      name: m.from === 'prof' ? subject.professor.name : m.from,
      text: m.text,
      time: m.time,
      color: m.from === 'prof' ? '#a39bdb' : '#36315e',
    }))
  )
  const [text, setText] = useState('')
  const send = () => {
    if (!text.trim()) return
    const time = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
    setMsgs([...msgs, { id: Date.now(), name: 'You', text: text.trim(), time, color: C.mid }])
    setText('')
  }
  return (
    <div className="flex flex-col h-full">
      <div className="px-4 pt-4">
        <h2 className="text-xl font-extrabold">{subject.code}</h2>
        <p className="font-semibold text-gray-500">{subject.name}</p>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-5">
        {msgs.map((m) => (
          <div key={m.id} className="flex items-center gap-3">
            <span className="grid place-items-center w-14 h-14 rounded-full text-white text-xl font-bold shrink-0" style={{ background: m.color }}>
              {m.name.replace('Prof. ', '')[0]}
            </span>
            <div>
              <p className="font-bold">{m.name}</p>
              <p className="font-semibold text-sm">{m.text}</p>
              <p className="text-xs text-gray-500">{m.time}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 border-t-2 border-black p-3">
        <input value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && send()}
          placeholder="Type a message..." className="flex-1 rounded-full bg-gray-200 px-4 py-2.5 text-sm outline-none" />
        <button onClick={send} aria-label="Send message" className="grid place-items-center w-11 h-11 rounded-xl text-white active:scale-95 transition-transform"
          style={{ background: '#6d5de8' }}>
          <Icon name="send" className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}