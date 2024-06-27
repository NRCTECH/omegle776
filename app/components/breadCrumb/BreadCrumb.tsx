"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbProps {
  title?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title }) => {
  const pathname = usePathname();

  if (!pathname) {
    return null; // or you can return a loading spinner or a placeholder if pathname is null
  }

  const pathnames = pathname.split('/').filter((x) => x);
  return (
    <nav className="flex items-left space-x-2 text-md text-black">
      <Link href="/">
        <p className="text-black  font-bold hover:bg-blue-400 hover:rounded-lg hover:opacity-100 capitalize p-2">Home</p>
      </Link>
      {pathnames.map((_, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return (
          <React.Fragment key={routeTo}>
            <span className="mx-2 mt-2">{'>'}</span>
            {isLast ? (
              <span className="text-black font-bold capitalize mt-2 ">
                {isLast && title ? decodeURIComponent(title) : decodeURIComponent(_)}
              </span>
            ) : (
              <Link href={routeTo}>
                <p className="text-black mt-1   font-bold hover:bg-blue-400 hover:rounded-lg hover:opacity-100 capitalize p-1">
                  {decodeURIComponent(_)}
                </p>
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;