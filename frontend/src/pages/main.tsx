import { useState } from 'react'
import { Header } from '../components/header'
import { FilterSidebar } from '../components/filtersidebar'
import { PostCard } from '../components/postcard'

// Mock data for demonstration
const mockPosts = [
  { id: 1, user: 'Alice', course: 'Computer Science', location: 'New York', content: 'Excited to start my journey in CS!', image: '/placeholder.svg?height=200&width=400' },
  { id: 2, user: 'Bob', course: 'Business', location: 'California', content: 'Looking forward to meeting new people!', image: '/placeholder.svg?height=200&width=400' },
  { id: 3, user: 'Charlie', course: 'Engineering', location: 'Texas', content: 'Can\'t wait for the first day of classes!', image: '/placeholder.svg?height=200&width=400' },
]

export default function MainPage() {
  const [filteredPosts, setFilteredPosts] = useState(mockPosts)

  const handleFilter = () => {
    // Implement actual filtering logic here
    console.log('Filtering...')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8">
        {/* Sidebar with filters for larger screens */}
        <aside className="w-full lg:w-64 hidden lg:block">
          <div className="bg-white p-6 rounded-lg shadow sticky top-24">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            <FilterSidebar onFilter={handleFilter} />
          </div>
        </aside>

        {/* Main content area */}
        <main className="flex-1">
          <div className="space-y-6">
            {filteredPosts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}