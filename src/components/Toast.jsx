import { C } from '../theme'

export default function Toast({ message }) {
  if (!message) return null
  return (
    <div role="status"
      className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 rounded-full px-5 py-2 text-sm font-bold text-white shadow-lg"
      style={{ background: C.dark }}>
      ✓ {message}
    </div>
  )
}