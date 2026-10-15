import { useRef, useState } from 'react'
import Icon from '../components/Icon'
import ConfirmDialog from '../components/ConfirmDialog'
import { C } from '../theme'

const MAX_MB = 10
const ALLOWED = ['pdf', 'doc', 'docx', 'zip']
const size = (b) => (b < 1048576 ? `${Math.max(1, Math.round(b / 1024))} KB` : `${(b / 1048576).toFixed(1)} MB`)

export default function SubmitWork({ activity: a, go, onSubmit }) {
  const input = useRef(null)
  const [file, setFile] = useState(null)
  const [note, setNote] = useState('')
  const [error, setError] = useState('')
  const [confirming, setConfirming] = useState(false)

  const pick = (e) => {
    const f = e.target.files[0]
    e.target.value = ''
    if (!f) return
    const ext = f.name.split('.').pop().toLowerCase()
    if (!ALLOWED.includes(ext)) return setError('This file type is not allowed. Upload a PDF, DOC, DOCX or ZIP file.')
    if (f.size > MAX_MB * 1048576) return setError(`This file is larger than ${MAX_MB} MB. Compress it and try again.`)
    setError('')
    setFile(f)
  }

  const confirm = () => {
    setConfirming(false)
    const time = new Date().toLocaleString([], { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })
    onSubmit({ fileName: file.name, size: size(file.size), note: note.trim(), time, ref: `SUB-${a.id}${String(Date.now()).slice(-5)}` })
  }

  return (
    <div className="p-4 space-y-4">
      <div>
        <h2 className="text-xl font-extrabold" style={{ color: C.dark }}>{a.title}</h2>
        <p className="text-sm text-gray-500">Due {a.due}, 11:59 PM</p>
      </div>

      <div>
        <p className="font-bold">Your file <span className="text-red-700">*</span></p>
        <input ref={input} type="file" accept=".pdf,.doc,.docx,.zip" onChange={pick} className="hidden" aria-label="Choose file" />
        {file ? (
          <div className="mt-1 flex items-center gap-3 rounded-2xl p-3" style={{ background: C.card }}>
            <Icon name="doc" className="w-8 h-8 shrink-0" />
            <span className="flex-1 min-w-0">
              <span className="block font-bold truncate">{file.name}</span>
              <span className="block text-xs text-gray-600">{size(file.size)}</span>
            </span>
            <button onClick={() => setFile(null)} aria-label="Remove file" className="p-1"><Icon name="x" /></button>
          </div>
        ) : (
          <button onClick={() => input.current.click()}
            className="mt-1 w-full rounded-2xl border-2 border-dashed py-6 font-bold" style={{ borderColor: C.mid, color: C.dark }}>
            Choose a file
            <span className="block text-xs font-semibold text-gray-500">PDF, DOC, DOCX or ZIP, up to {MAX_MB} MB</span>
          </button>
        )}
        {error && <p className="mt-2 text-sm text-red-700" role="alert">{error}</p>}
      </div>

      <label className="block">
        <span className="font-bold">Note to professor (optional)</span>
        <textarea value={note} maxLength={200} onChange={(e) => setNote(e.target.value)} rows={3}
          placeholder="Add a message about your work"
          className="mt-1 w-full rounded-2xl bg-gray-100 p-3 text-sm outline-none" />
        <span className="block text-right text-xs text-gray-500">{note.length}/200</span>
      </label>

      <div className="space-y-2">
        <button disabled={!file} onClick={() => setConfirming(true)}
          className="w-full rounded-xl py-3 font-bold text-white disabled:opacity-40 disabled:cursor-not-allowed" style={{ background: C.mid }}>
          Submit
        </button>
        {!file && <p className="text-center text-xs text-gray-500">Choose a file to turn on Submit.</p>}
        <button onClick={() => go('detail')} className="w-full rounded-xl py-3 font-bold" style={{ background: C.card, color: C.dark }}>Cancel</button>
      </div>

      {confirming && (
        <ConfirmDialog title="Submit this work?" confirmLabel="Yes, submit"
          body={`You are submitting ${file.name} for ${a.title}. Check that it is the right file.`}
          onCancel={() => setConfirming(false)} onConfirm={confirm} />
      )}
    </div>
  )
}