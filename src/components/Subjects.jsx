import Icon from '../components/Icon'
import { C } from '../theme'
import { SUBJECTS } from '../data'
import { useState, useEffect } from 'react'


export default function Subjects({ openSubject }) {
  const [subjects, setSubjects] = useState(() => {
    try {
      const saved = localStorage.getItem('subjects')
      return saved ? JSON.parse(saved) : SUBJECTS
    }
    catch{
      return SUBJECTS
    }
  })
  const [showForm, setShowForm] = useState(false)
  const [code, setCode] = useState('')
  const [name, setName] = useState('')


  useEffect(() => {
    localStorage.setItem('subjects',JSON.stringify(subjects))
  },[subjects])

  const handleAdd = () => {
    const newCode = code.trim().toUpperCase()
    const newName = name.trim()

    if(!newCode || !newName) return
    if(subjects.some((s)=> s.code ===newCode)) return

  
    setSubjects([...subjects, { code: newCode, name: newName, icon: subjects[0]?.icon }])
    setCode('')
    setName('')
    setShowForm(false)
  }

  
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-2xl font-extrabold">My Subjects</h2>
        <button onClick={() => setShowForm(true)} aria-label="Add subject" 
        className="grid place-items-center w-9 h-8 rounded-full text-white text-2xl leading-none active:scale-95 
        transition-transform"style={{ background: C.dark }}>
          +
        </button>
      </div>

      <div className="space-y-3">
        {subjects.map((s) => (
          <button key={s.code} onClick={() => openSubject(s)}
            className="w-full rounded-2xl p-3 text-left active:scale-[0.99] transition-transform" style={{ background: C.card }}>
            <span className="flex items-center gap-3">
              <span className="grid place-items-center w-16 h-16 rounded-xl shrink-0" style={{ background: C.icon }}>
                <Icon name={s.icon} className="w-9 h-9" />
              </span>
              <span className="flex-1">
                <span className="block text-xl font-extrabold" style={{ color: C.dark }}>{s.code}</span>
                <span className="block text-sm font-semibold">{s.name}</span>
              </span>
              <Icon name="go" className="w-6 h-6" />
            </span>
            <span className="inline-block mt-3 rounded-full bg-white px-5 py-1.5 text-sm font-bold">Ongoing</span>
          </button>
        ))}
      </div>

       {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6"
          onClick={() => setShowForm(false)}>
          <div className="w-full max-w-sm rounded-2xl bg-white p-5" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-extrabold mb-3">New Subject</h3>
            <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Subject code (e.g. ITEC 100)"
              className="w-full mb-2 rounded-xl border border-gray-300 px-3 py-2 outline-none"/>
             <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Subject name"
              className="w-full mb-4 rounded-xl border border-gray-300 px-3 py-2 outline-none"/>
            <div className="flex justify-end gap-2">
              <button onClick={() => setShowForm(false)} className="rounded-full px-4 py-2 font-bold">
                Cancel
              </button>
              <button onClick={handleAdd} className="rounded-full px-4 py-2 font-bold text-white"
                style={{ background: C.dark }}>
                  Add
              </button>
            </div>
          </div>
        </div>
       )}
    </div>
  )
}