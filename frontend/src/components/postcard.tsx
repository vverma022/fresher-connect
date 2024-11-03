import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface PostCardProps {
  id: number
  user: string
  course: string
  location: string
  content: string
  image: string
}

export function PostCard({ id, user, course, location, content, image }: PostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: id * 0.1 }}
    >
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${user}`} alt={user} />
              <AvatarFallback>{user[0]}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>{user}</CardTitle>
              <p className="text-sm text-gray-500">{course} - {location}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{content}</p>
          <div className="relative w-full h-48 rounded-md overflow-hidden">
            <img src={image} alt={content} className="w-full h-full object-cover" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}