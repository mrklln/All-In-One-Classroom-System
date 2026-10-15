import { useState } from 'react'
import Card from '../components/Card'
import Chips from '../components/Chips'
import { C } from '../theme'
import { ACTIVITIES } from '../data'

export default function TaskList({ openActivity, submissions }) {
  const [filter, setFilter] = useState('All')
  const list = ACTIVITIES.filter((a) => filter === 'All' || a.type === filter)
  return (
    <div className="p-4">
      <h2 className="text-xl font-extrabold">Subject: ITEC 85</h2>
      <Chips filter={filter} setFilter={setFilter} />
      <h3 className="text-lg font-extrabold mb-2" style={{ color: C.dark }}>Activities / Assignments</h3>
      <div className="space-y-3">
        {list.map((a) => (
          <Card key={a.id} icon="doc" color={a.color} title={a.title} sub={`Due: ${a.due}`}
            status={Boolean(submissions[a.id])} onClick={() => openActivity(a, 'tasks')} />
        ))}
        {list.length === 0 && <p className="text-center text-gray-500">No activities in this category yet.</p>}
      </div>
    </div>
  )
}