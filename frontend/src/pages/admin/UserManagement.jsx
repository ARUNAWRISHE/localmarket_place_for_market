const users = [
  { id: 'U-1021', name: 'Ava Patel', role: 'Customer' },
  { id: 'U-1022', name: 'Green Valley Organics', role: 'Seller' },
]

export default function UserManagement() {
  return (
    <div className="space-y-6">
      <h1 className="font-literata text-3xl text-primary">User Management</h1>
      <div className="bg-white rounded-2xl shadow-card p-6">
        <h2 className="text-lg font-semibold mb-4">Create User</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className="w-full px-4 py-3 rounded-xl border border-outline-variant/40"
            placeholder="Full name"
          />
          <input
            className="w-full px-4 py-3 rounded-xl border border-outline-variant/40"
            placeholder="Email"
            type="email"
          />
          <input
            className="w-full px-4 py-3 rounded-xl border border-outline-variant/40"
            placeholder="Phone"
            type="tel"
          />
          <select className="w-full px-4 py-3 rounded-xl border border-outline-variant/40 bg-white">
            <option>CUSTOMER</option>
            <option>SELLER</option>
            <option>DELIVERY</option>
            <option>ADMIN</option>
          </select>
          <select className="w-full px-4 py-3 rounded-xl border border-outline-variant/40 bg-white">
            <option>ACTIVE</option>
            <option>INACTIVE</option>
            <option>SUSPENDED</option>
          </select>
          <input
            className="w-full px-4 py-3 rounded-xl border border-outline-variant/40"
            placeholder="Profile image URL"
          />
        </div>
        <button className="mt-4 bg-primary text-on-primary px-5 py-2 rounded-xl font-semibold">
          Create user
        </button>
      </div>
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
