import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const courses = ['All', 'Computer Science', 'Business', 'Engineering']
const locations = ['All', 'New York', 'California', 'Texas']

export function FilterSidebar({ onFilter }: { onFilter: () => void }) {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="course-filter" className="block text-sm font-medium text-gray-700 mb-1">
          Course
        </label>
        <Select onValueChange={(value) => console.log(value)}>
          <SelectTrigger id="course-filter">
            <SelectValue placeholder="Select course" />
          </SelectTrigger>
          <SelectContent>
            {courses.map((course) => (
              <SelectItem key={course} value={course}>{course}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <label htmlFor="location-filter" className="block text-sm font-medium text-gray-700 mb-1">
          Location
        </label>
        <Select onValueChange={(value) => console.log(value)}>
          <SelectTrigger id="location-filter">
            <SelectValue placeholder="Select location" />
          </SelectTrigger>
          <SelectContent>
            {locations.map((location) => (
              <SelectItem key={location} value={location}>{location}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
          Search
        </label>
        <Input
          id="search"
          type="text"
          placeholder="Search posts..."
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <Button onClick={onFilter} className="w-full">Apply Filters</Button>
    </div>
  )
}