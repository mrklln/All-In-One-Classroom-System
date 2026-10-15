import Icon from './Icon'
import { C } from '../theme'
import { TABS } from '../data'

export default function Drawer({ onClose, go, logout }) {
  const item = 'w-full flex items-center gap-3 rounded-xl p-3 font-bold'
  const style = { background: C.card, color: C.dark }
  return (
    <div className="absolute inset-0 z-20 flex bg-black/40" onClick={onClose}>
      <aside className="w-3/4 bg-white p-5 space-y-2" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-extrabold" style={{ color: C.dark }}>Menu</h2>
          <button onClick={onClose} aria-label="Close menu"><Icon name="x" /></button>
        </div>
        {TABS.map((t) => (
          <button key={t.id} onClick={() => go(t.id)} className={item} style={style}>
            <Icon name={t.icon} className="w-5 h-5" />{t.label}
          </button>
        ))}
        <button onClick={() => go('activities')} className={item} style={style}>
          <Icon name="calendar" className="w-5 h-5" />Activities
        </button>
        <button onClick={logout} className={item} style={style}>
          <Icon name="logout" className="w-5 h-5" />Logout
        </button>
      </aside>
    </div>
  )
}