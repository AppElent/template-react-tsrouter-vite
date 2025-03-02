import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  beforeLoad: () => ({ getTitle: () => 'Info' }),
  component: App,
});

function App() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to {import.meta.env.VITE_APP_NAME}</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Start</CardTitle>
            <CardDescription>Get started with our platform in minutes</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Follow our step-by-step guide to set up your first project and deploy it to
              production.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Documentation</CardTitle>
            <CardDescription>Learn more about our features</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Explore our comprehensive documentation to learn about all the features and
              capabilities.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
