import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_empty/privacy')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_default/privacy"!</div>
}
