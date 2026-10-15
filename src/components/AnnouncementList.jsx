import { C } from "../theme";

export default function AnnouncementList({ items = [] }) {
  return (
    <div className="space-y-2">
      {items.map((a, i) => (
        <div
          key={a.id ?? i}
          className="flex items-center justify-between rounded-xl p-3 bg-white shadow-sm"
        >
          <div>
            <p className="font-semibold text-sm" style={{ color: C.dark }}>
              {a.title}
            </p>
            <p className="text-xs text-gray-500">{a.sub}</p>
          </div>
          <span className="text-gray-400">›</span>
        </div>
      ))}
    </div>
  );
}