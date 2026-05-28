import { Search } from 'lucide-react'

export default function SearchBar({ placeholder = 'Search', value, onChange }) {
  return (
    <div className="flex items-center gap-2 bg-surface-container-low border border-outline-variant/40 rounded-full px-4 py-2">
      <Search size={16} className="text-on-surface-variant" />
      <input
        className="bg-transparent outline-none text-sm flex-1"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
      />
    </div>
  )
}
