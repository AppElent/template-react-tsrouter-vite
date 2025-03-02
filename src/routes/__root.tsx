import { createRootRouteWithContext, Outlet, useRouterState } from '@tanstack/react-router';
// import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import React, { Suspense } from 'react';
import type { RouterContext } from '../main';

const TanStackRouterDevtools =
  import.meta.env.DEV === false
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        }))
      );

export const Route = createRootRouteWithContext<RouterContext>()({
  beforeLoad: () => ({ getTitle: () => 'Home' }),
  component: Layout,
});

function Layout() {
  const matches = useRouterState({ select: (s) => s.matches });

  const matchWithTitle = [...matches].reverse().find((d) => d.context.getTitle);

  const title = matchWithTitle?.context.getTitle?.() || 'Home';

  return (
    <>
      <title>{title}</title>

      <Outlet />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  );
}
