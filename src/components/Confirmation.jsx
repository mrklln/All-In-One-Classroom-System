import Icon from '../components/Icon'
import { C } from '../theme'

export default function Confirmation({ activity: a, submission: s, go }) {
  return (
    <div className="p-6 flex flex-col items-center text-center">
      <span className="grid place-items-center w-20 h-20 rounded-full text-white" style={{ background: C.mid }}>
        <Icon name="check" className="w-12 h-12" />
      </span>
      <h2 className="mt-4 text-2xl font-extrabold" style={{ color: C.dark }}>Submission successful</h2>
      <p className="mt-1 text-gray-600">Your work for {a.title} has been submitted successfully.</p>

      <dl className="mt-5 w-full rounded-2xl p-4 text-left text-sm space-y-2" style={{ background: C.card }}>
        <div><dt className="text-gray-600">File</dt><dd className="font-bold break-all">{s.fileName}</dd></div>
        <div><dt className="text-gray-600">Submitted</dt><dd className="font-bold">{s.time}</dd></div>
        <div><dt className="text-gray-600">Reference number</dt><dd className="font-bold">{s.ref}</dd></div>
      </dl>

      <div className="mt-5 w-full space-y-2">
        <button onClick={() => go('tasks')} className="w-full rounded-xl py-3 font-bold text-white" style={{ background: C.mid }}>Back to Activities</button>
        <button onClick={() => go('detail')} className="w-full rounded-xl py-3 font-bold" style={{ background: C.card, color: C.dark }}>View Submission</button>
      </div>
    </div>
  )
}