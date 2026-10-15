import Icon from './Icon'
import { C } from '../theme'
import StatusPill from './StatusPill'

export default function Row({ icon, title, sub, onClick, right, status }) {
  return (
    <button onClick={onClick}
      className="w-full flex items-center gap-3 rounded-2xl p-3 text-left active:scale-[0.99] transition-transform"
      style={{ background: C.card }}>
      <span className="grid place-items-center w-14 h-14 rounded-xl text-black shrink-0" style={{ background: C.icon }}>
        <Icon name={icon} className="w-8 h-8" />
      </span>
      <span className="flex-1 min-w-0">
        <span className="block font-bold" style={{ color: C.dark }}>{title}</span>
        {sub && <span className="block text-sm text-gray-500">{sub}</span>}
        {status !== undefined && <StatusPill submitted={status} />}
      </span>
      {right ?? <Icon name="go" className="w-6 h-6 shrink-0" />}
    </button>
  )
}