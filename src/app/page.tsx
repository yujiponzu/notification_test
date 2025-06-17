import React from 'react';
import dynamic from 'next/dynamic';


const NotificationApp = dynamic(
  () => import('@/components/NotificationApp').then((mod) => mod.NotificationApp),
  { ssr: false }
);


export default function Page() {
  return <NotificationApp />;
}
