'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Layouts';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const hideHeaderPaths = ['/lasik/book-consultancy', '/lasik/book-consultancy/','/kidney-stones/book-consultancy','/kidney-stones/book-consultancy/','/thank-you','/thank-you/','/lipoma/book-consultancy/','/lipoma/book-consultancy','/hernia/book-consultancy','/hernia/book-consultancy/','/appendix/book-consultancy','/appendix/book-consultancy/'];

  const showHeader = !hideHeaderPaths.includes(pathname);

  return showHeader ? <Header>{children}</Header> : <>{children}</>;
}