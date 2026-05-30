import { ReactNode } from 'react';

import TVRemoteReceiver from '@/components/tv/TVRemoteReceiver';

export const metadata = {
  title: 'TV - MoonTV Plus',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <TVRemoteReceiver />
    </>
  );
}
