import Icon from './Icon'
import { C } from '../theme'

function Toggle({ on, onChange, label }) {
  return (
    <button role="switch" aria-checked={on} aria-label={label} onClick={onChange}
      className="relative w-12 h-7 rounded-full transition-colors shrink-0"
      style={{ background: on ? C.mid : '#cbd5d0' }}>
      <span className="absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow transition-transform"
        style={{ background: '#fff', transform: on ? 'translateX(20px)' : 'translateX(0)' }} />
    </button>
  )
}

const OPTIONS = [
  { key: 'notifications', icon: 'chat', label: 'Chat notifications', sub: 'Get alerts for new messages' },
  { key: 'reminders', icon: 'calendar', label: 'Due date reminders', sub: 'Remind me before activities are due' },
  { key: 'sound', icon: 'speaker', label: 'Sound', sub: 'Play a sound for alerts' },
  { key: 'dark', icon: 'moon', label: 'Dark theme', sub: 'Use a darker color scheme' },
]

export default function Settings({ settings, setSettings, toast }) {
  const flip = (o) => {
    const next = !settings[o.key]
    setSettings({ ...settings, [o.key]: next })
    toast(`${o.label} ${next ? 'on' : 'off'}`)
  }
  return (
    <div className="p-4 space-y-3">
      <h2 className="text-xl font-extrabold" style={{ color: C.dark }}>Preferences</h2>
      {OPTIONS.map((o) => (
        <div key={o.key} className="flex items-center gap-3 rounded-xl p-3" style={{ background: C.card }}>
          <span style={{ color: C.dark }}><Icon name={o.icon} className="w-6 h-6" /></span>
          <div className="flex-1 min-w-0">
            <p className="font-bold" style={{ color: C.dark }}>{o.label}</p>
            <p className="text-xs font-semibold text-gray-600">{o.sub}</p>
          </div>
          <Toggle on={settings[o.key]} onChange={() => flip(o)} label={o.label} />
        </div>
      ))}

      <h2 className="text-xl font-extrabold pt-2" style={{ color: C.dark }}>Account</h2>
      <button onClick={() => toast('Password change is not available in this prototype')}
        className="w-full flex items-center gap-3 rounded-xl p-3 text-left active:scale-[0.99] transition-transform" style={{ background: C.card }}>
        <span style={{ color: C.dark }}><Icon name="lock" className="w-6 h-6" /></span>
        <span className="flex-1 font-bold" style={{ color: C.dark }}>Change password</span>
        <Icon name="chev" className="w-5 h-5 text-gray-500" />
      </button>

      <div className="flex items-center gap-3 rounded-xl p-3" style={{ background: C.card }}>
        <span style={{ color: C.dark }}><Icon name="doc" className="w-6 h-6" /></span>
        <span className="flex-1 font-bold" style={{ color: C.dark }}>About</span>
        <span className="text-xs font-semibold text-gray-600">All-In-One Classroom v1.0</span>
      </div>
    </div>
  )
}