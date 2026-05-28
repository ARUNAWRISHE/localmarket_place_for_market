export default function Messages() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="bg-white rounded-2xl shadow-card p-6">
        <h1 className="font-literata text-2xl text-primary mb-4">Inbox</h1>
        <div className="space-y-3">
          <div className="p-3 rounded-xl bg-primary/5">
            <p className="font-semibold">Elena Martinez</p>
            <p className="text-sm text-on-surface-variant truncate">
              Are the tomatoes back in stock?
            </p>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 bg-white rounded-2xl shadow-card p-6">
        <h2 className="font-semibold text-on-surface mb-4">Conversation</h2>
        <div className="space-y-4">
          <div className="bg-surface-container-low p-3 rounded-2xl max-w-[70%]">
            Hi! Are the Brandywines ready yet?
          </div>
          <div className="bg-primary text-on-primary p-3 rounded-2xl max-w-[70%] ml-auto">
            Yes, we picked the first basket this morning!
          </div>
        </div>
      </div>
    </div>
  )
}
