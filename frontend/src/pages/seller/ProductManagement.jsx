import Table from '../../components/Table.jsx'

const columns = [
  { key: 'name', label: 'Product' },
  { key: 'category', label: 'Category' },
  { key: 'stock', label: 'Stock' },
  { key: 'price', label: 'Price' },
]

const data = [
  {
    name: 'Organic Heirloom Tomatoes',
    category: 'Vegetables',
    stock: '85%',
    price: '$4.50/lb',
  },
  { name: 'Raw Wildflower Honey', category: 'Pantry', stock: '12%', price: '$12.00' },
]

export default function ProductManagement() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-literata text-3xl text-primary">Product Management</h1>
        <p className="text-sm text-on-surface-variant">Manage listings and pricing.</p>
      </div>
      <Table columns={columns} data={data} />
    </div>
  )
}
