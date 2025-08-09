import { useParams } from 'react-router-dom'

export default function PostPage() {
  const { id } = useParams()

  return (
    <div className="text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Post ID: {id}</h1>
      <p>This is where the full post will load dynamically based on the post ID.</p>
    </div>
  )
}