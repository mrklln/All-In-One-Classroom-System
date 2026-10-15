import { C } from '../theme'

const OPTIONS = ['All', 'Quizzes', 'Assignments', 'Projects']

export default function Chips({ filter, setFilter }) {
  return (
    <div className="flex gap-2 overflow-x-auto py-3">
      {OPTIONS.map((opt) => {
        const active = opt === filter
        return (
          <button
            key={opt}
            onClick={() => setFilter(opt)}
            className="px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap"
            style={{
              background: active ? C.mid : C.card,
              color: active ? '#fff' : C.dark,
            }}
          >
            {opt}
          </button>
        )
      })}
    </div>
  )
}