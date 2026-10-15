import { C } from '../theme'

export default function ConfirmDialog({ title, body, confirmLabel, onConfirm, onCancel }) {
  return (
    <div className="absolute inset-0 z-40 grid place-items-center bg-black/40 px-6" role="dialog" aria-modal="true">
      <div className="w-full rounded-3xl bg-white p-6 shadow-xl">
        <h2 className="text-lg font-extrabold" style={{ color: C.dark }}>{title}</h2>
        <p className="mt-2 text-sm text-gray-600">{body}</p>
        <div className="mt-5 flex gap-3">
          <button onClick={onCancel} className="flex-1 rounded-xl py-3 font-bold" style={{ background: C.card, color: C.dark }}>Cancel</button>
          <button onClick={onConfirm} className="flex-1 rounded-xl py-3 font-bold text-white" style={{ background: C.mid }}>{confirmLabel}</button>
        </div>
      </div>
    </div>
  )
}