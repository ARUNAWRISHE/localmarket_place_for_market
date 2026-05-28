export default function Table({ columns, data }) {
  return (
    <div className="overflow-x-auto bg-white rounded-2xl border border-outline-variant/10 shadow-card">
      <table className="w-full text-left text-sm">
        <thead className="bg-surface-container-low text-on-surface-variant">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-3 font-semibold">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="border-t border-outline-variant/10">
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
