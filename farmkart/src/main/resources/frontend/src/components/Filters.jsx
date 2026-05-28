export default function Filters({ items = [], selected, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <button
          key={item}
          onClick={() => onSelect?.(item)}
          className={`px-4 py-2 rounded-full text-sm border ${
            selected === item
              ? 'bg-primary text-on-primary border-primary'
              : 'border-outline-variant/40 text-on-surface-variant'
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  )
}
