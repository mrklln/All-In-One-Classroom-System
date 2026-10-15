import Icon from './Icon'
import { C } from '../theme'

export default function StatusPill({ submitted }) {
  return submitted ? (
    <span className="inline-flex items-center gap-1 mt-1 rounded-full px-2 py-0.5 text-xs font-bold text-white" style={{ background: C.mid }}>
      <Icon name="check" className="w-3 h-3" />Submitted
    </span>
  ) : (
    <span className="inline-block mt-1 rounded-full px-2 py-0.5 text-xs font-bold bg-amber-100 text-amber-800">Not submitted</span>
  )
}