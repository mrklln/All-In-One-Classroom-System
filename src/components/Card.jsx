import Icon from './Icon'
import StatusPill from './StatusPill'

export default function Card({ icon, title, sub, onClick, color, status }) {
  return (
    <button onClick={onClick}
      className="w-full flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-3 text-left shadow-sm active:scale-[0.99] transition-transform">
      <span className="grid place-items-center w-12 h-12 rounded-xl shrink-0 text-gray-700"
        style={color ? { background: color, color: '#fff' } : { background: '#eef2ee' }}>
        <Icon name={icon} className="w-7 h-7" />
      </span>
      <span className="flex-1 min-w-0">
        <span className="block font-bold text-sm">{title}</span>
        <span className="block text-xs text-gray-500">{sub}</span>
        {status !== undefined && <StatusPill submitted={status} />}
      </span>
      <Icon name="chev" className="w-5 h-5 text-gray-500 shrink-0" />
    </button>
  )
}