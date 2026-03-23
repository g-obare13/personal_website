import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="py-12">
      <h1 className="text-2xl font-bold">About</h1>
      <p className="text-muted-foreground mt-2">Add your content here.</p>
    </div>
  )
}
