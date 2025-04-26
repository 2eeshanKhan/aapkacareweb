'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Layouts';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const hideHeaderPaths = ['/lasik/book-consultancy', '/lasik/book-consultancy/'];

  const showHeader = !hideHeaderPaths.includes(pathname);

  return showHeader ? <Header>{children}</Header> : <>{children}</>;
}