import Icon from './Icon'
import { C } from '../theme'
import { TABS, TAB_OF } from '../data'

export default function BottomNav({ screen, go }) {
  const active = TAB_OF[screen]
  return (
    <nav className="flex justify-around border-t-[3px] border-black bg-white py-2">
      {TABS.map((t) => (
        <button key={t.id} onClick={() => go(t.id)} aria-current={active === t.id}
          className="flex flex-col items-center gap-0.5 px-3 py-1 text-xs font-semibold"
          style={{ color: active === t.id ? C.dark : '#000' }}>
          <Icon name={t.icon} className="w-6 h-6" />
          {t.label}
        </button>
      ))}
    </nav>
  )
}
