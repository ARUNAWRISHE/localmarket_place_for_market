const categories = [
  {
    title: 'Vegetables',
    groups: [
      {
        title: 'Leafy Vegetables',
        items: ['Spinach (Pasalai Keerai)', 'Moringa Leaves (Murungai Keerai)', 'Coriander', 'Mint'],
      },
      {
        title: 'Root Vegetables',
        items: ['Carrot', 'Beetroot', 'Radish', 'Sweet Potato'],
      },
      {
        title: 'Common Vegetables',
        items: ['Tomato', 'Onion', 'Potato', 'Brinjal', 'Lady Finger', 'Cabbage', 'Cauliflower'],
      },
      {
        title: 'Native Tamil Nadu Vegetables',
        items: ['Drumstick', 'Snake Gourd', 'Ridge Gourd', 'Bitter Gourd', 'Cluster Beans'],
      },
    ],
  },
  {
    title: 'Fruits',
    groups: [
      { title: 'Local Fruits', items: ['Banana', 'Mango', 'Guava', 'Papaya', 'Sapota'] },
      { title: 'Seasonal Fruits', items: ['Watermelon', 'Muskmelon', 'Jackfruit'] },
      { title: 'Premium Fruits', items: ['Apple', 'Orange', 'Grapes', 'Pomegranate'] },
    ],
  },
  {
    title: 'Pulses & Grains',
    groups: [
      { title: 'Pulses', items: ['Toor Dal', 'Urad Dal', 'Moong Dal', 'Chana Dal', 'Horse Gram'] },
      { title: 'Grains', items: ['Rice', 'Traditional Rice Varieties'] },
      { title: 'Millets', items: ['Ragi', 'Kambu', 'Thinai', 'Varagu', 'Samai'] },
    ],
  },
  {
    title: 'Dairy Products',
    groups: [
      { title: 'Fresh Dairy', items: ['Milk', 'Curd', 'Buttermilk'] },
      { title: 'Processed Dairy', items: ['Paneer', 'Butter', 'Ghee'] },
      { title: 'Farm Fresh', items: ['Cow Milk', 'A2 Milk', 'Organic Ghee'] },
    ],
  },
  {
    title: 'Other',
    groups: [{ title: 'Other', items: ['Other'] }],
  },
]

export default function Categories() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-gutter">
      <h1 className="font-literata text-3xl text-primary mb-6">Categories</h1>
      <div className="space-y-8">
        {categories.map((section) => (
          <div key={section.title} className="bg-white rounded-3xl shadow-card p-6">
            <h2 className="font-literata text-2xl text-primary mb-4">{section.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.groups.map((group) => (
                <div key={group.title} className="bg-surface-container-low rounded-2xl p-4">
                  <h3 className="font-semibold text-on-surface mb-2">{group.title}</h3>
                  <ul className="space-y-1 text-sm text-on-surface-variant">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
