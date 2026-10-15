import Icon from './Icon'
import { C } from '../theme'
import { SUBJECTS } from '../data'

export default function ChatList({ openChat }) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-extrabold" style={{ color: C.dark }}>Chats</h2>
      <div className="mt-3 space-y-3">
        {SUBJECTS.map((s) => {
          const last = s.chat[s.chat.length - 1]
          return (
            <button key={s.code} onClick={() => openChat(s)}
              className="w-full flex items-center gap-3 rounded-xl p-3 text-left active:scale-[0.99] transition-transform"
              style={{ background: C.card }}>
              <span className="grid place-items-center w-12 h-12 rounded-xl shrink-0" style={{ background: C.icon }}>
                <Icon name={s.icon} className="w-7 h-7 text-black" />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block font-bold" style={{ color: C.dark }}>{s.code}</span>
                <span className="block text-sm text-gray-600 truncate">{last.text}</span>
              </span>
              <span className="text-xs text-gray-500">{last.time}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}