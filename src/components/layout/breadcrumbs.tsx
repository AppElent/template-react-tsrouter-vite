import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { cn } from '@/lib/utils';
import { Link, useRouterState } from '@tanstack/react-router';

interface BreadcrumbsProps {
  className?: string; // Type the prop
  mobile?: boolean;
}

const Breadcrumbs = ({ className, mobile }: BreadcrumbsProps) => {
  const matches = useRouterState({ select: (s) => s.matches });

  const crumbs = matches
    .filter((match) => match.context.getTitle)
    .map(({ pathname, context }) => {
      return {
        title: context.getTitle?.(),
        path: pathname,
      };
    });
  return (
    <Breadcrumb className={cn(className)}>
      <BreadcrumbList>
        {crumbs.map((crumb, index) => {
          return (
            <div
              key={index}
              className={cn(mobile ? 'flex items-center' : 'hidden md:flex items-center')}
            >
              <BreadcrumbItem
                key={`crumb-${index}`}
                className={cn(mobile ? 'flex items-center' : 'hidden md:flex items-center')}
              >
                {index < crumbs.length - 1 ? (
                  <>
                    <BreadcrumbLink
                      asChild
                      className="mr-2"
                    >
                      <Link to={crumb.path}>{crumb.title}</Link>
                    </BreadcrumbLink>
                    {/* <BreadcrumbSeparator className={cn(mobile ? 'block' : 'hidden md:block')} /> */}
                  </>
                ) : (
                  <>
                    <BreadcrumbPage>{crumb.title}</BreadcrumbPage>
                  </>
                )}

                {/* <BreadcrumbLink href={crumb.path}>{crumb.title}</BreadcrumbLink> */}
              </BreadcrumbItem>
              {index < crumbs.length - 1 && (
                <BreadcrumbSeparator
                  key={`separator-${index}`}
                  className={cn(mobile ? 'flex items-center' : 'hidden md:flex items-center')}
                />
              )}
            </div>
          );
        })}
        {/* <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden md:block" />
        <BreadcrumbItem>
          <BreadcrumbPage>Data Fetching</BreadcrumbPage>
        </BreadcrumbItem> */}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
