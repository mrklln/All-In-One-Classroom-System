import { useState } from 'react'
import Icon from '../components/Icon'
import StatusPill from '../components/StatusPill'
import ConfirmDialog from '../components/ConfirmDialog'
import { C } from '../theme'

export default function ActivityDetail({ activity: a, submission, go, onRemove }) {
  const [confirming, setConfirming] = useState(false)
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-3">
        <span className="grid place-items-center w-14 h-14 rounded-xl text-white shrink-0" style={{ background: a.color }}>
          <Icon name="doc" className="w-8 h-8" />
        </span>
        <div>
          <h2 className="text-xl font-extrabold" style={{ color: C.dark }}>{a.title}</h2>
          <p className="text-sm text-gray-500">ITEC 85 - Information Assurance and Security 1</p>
        </div>
      </div>

      <div className="flex gap-3 text-sm font-bold">
        <span className="flex-1 rounded-xl p-3" style={{ background: C.card }}>Due<span className="block text-base">{a.due}, 11:59 PM</span></span>
        <span className="flex-1 rounded-xl p-3" style={{ background: C.card }}>Points<span className="block text-base">{a.points}</span></span>
      </div>
      <StatusPill submitted={Boolean(submission)} />

      <section>
        <h3 className="font-extrabold">Description</h3>
        <p className="text-sm text-gray-700 mt-1">{a.description}</p>
      </section>
      <section>
        <h3 className="font-extrabold">What to do</h3>
        <ul className="mt-1 list-disc pl-5 text-sm text-gray-700 space-y-1">
          {a.steps.map((s) => <li key={s}>{s}</li>)}
        </ul>
      </section>

      {submission ? (
        <section className="rounded-2xl border border-gray-200 p-3 text-sm">
          <h3 className="font-extrabold" style={{ color: C.dark }}>Your submission</h3>
          <p className="mt-1">File: {submission.fileName}</p>
          <p className="text-gray-500">Submitted {submission.time}</p>
          <button onClick={() => setConfirming(true)} className="mt-3 w-full rounded-xl py-2.5 font-bold" style={{ background: C.card, color: C.dark }}>
            Remove submission
          </button>
        </section>
      ) : (
        <button onClick={() => go('submit')} className="w-full rounded-xl py-3 font-bold text-white active:scale-[0.99] transition-transform" style={{ background: C.mid }}>
          Submit Work
        </button>
      )}

      {confirming && (
        <ConfirmDialog title="Remove your submission?" confirmLabel="Yes, remove"
          body="Your file will be removed and the activity will go back to Not submitted. You can submit again before the deadline."
          onCancel={() => setConfirming(false)} onConfirm={() => { setConfirming(false); onRemove() }} />
      )}
    </div>
  )
}