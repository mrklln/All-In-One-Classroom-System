import Icon from '../components/Icon'
import { C } from '../theme'
import { SUBJECTS, USER } from '../data'

export default function Home({ go, openSubject }) {
  const quick = [
    { label: 'My Subjects', sub: 'View your classes', icon: 'book', to: 'subjects' },
    { label: 'Activities', sub: 'Check assignments', icon: 'calendar', to: 'activities' },
    { label: 'Chat', sub: 'Message your group', icon: 'chat', to: 'chats' },
    { label: 'Profile', sub: 'View your information', icon: 'user', to: 'profile' },
  ]
  return (
    <div className="p-4 space-y-4">
      <div className="rounded-2xl p-4 flex items-center justify-between" style={{ background: C.card }}>
        <div>
          <h2 className="text-xl font-extrabold" style={{ color: C.dark }}>Welcome, {USER.first}!</h2>
          <p className="text-sm font-semibold">Keep learning, keep growing.</p>
        </div>
        <span className="text-4xl" aria-hidden="true">📚</span>
      </div>

      <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {SUBJECTS.map((s) => (
          <div key={s.code} className="snap-start shrink-0 w-[85%] rounded-2xl p-4" style={{ background: C.card }}>
            <h3 className="font-extrabold text-lg" style={{ color: C.dark }}>{s.code}</h3>
            <p className="font-semibold">{s.name}</p>
            <button onClick={() => openSubject(s)} className="mt-4 rounded-lg bg-white px-4 py-1.5 text-sm font-bold active:scale-95 transition-transform">
              Open
            </button>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-extrabold" style={{ color: C.dark }}>Quick Access</h3>
      <div className="grid grid-cols-2 gap-3">
        {quick.map((q) => (
          <button key={q.label} onClick={() => go(q.to)} className="rounded-xl p-3 text-left active:scale-95 transition-transform" style={{ background: C.card }}>
            <span style={{ color: C.dark }}><Icon name={q.icon} className="w-7 h-7" /></span>
            <span className="block mt-1 font-extrabold" style={{ color: C.dark }}>{q.label}</span>
            <span className="block text-xs font-semibold">{q.sub}</span>
          </button>
        ))}
      </div>
    </div>
  )
}