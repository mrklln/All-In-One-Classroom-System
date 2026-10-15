import Icon from '../components/Icon'
import { C } from '../theme'
import { SUBJECTS } from '../data'

export default function Subjects({ openSubject }) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-extrabold mb-3">My Subjects</h2>
      <div className="space-y-3">
        {SUBJECTS.map((s) => (
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
    </div>
  )
}