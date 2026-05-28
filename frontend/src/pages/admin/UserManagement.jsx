const users = [
  { id: 'U-1021', name: 'Ava Patel', role: 'Customer' },
  { id: 'U-1022', name: 'Green Valley Organics', role: 'Seller' },
]

export default function UserManagement() {
  return (
    <div className="space-y-6">
      <h1 className="font-literata text-3xl text-primary">User Management</h1>
      <div className="bg-white rounded-2xl shadow-card p-6">
        {users.map((user) => (
          <div key={user.id} className="flex justify-between border-b border-outline-variant/10 py-3">
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-xs text-on-surface-variant">{user.id}</p>
            </div>
            <span className="text-sm text-primary">{user.role}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
