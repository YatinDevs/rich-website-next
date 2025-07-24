// app/404/page.js

'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function NotFoundPage() {
  const searchParams = useSearchParams();
  
  // Your logic using searchParams

  return <div>404 Not Found Page</div>;
}

// Wrap the component with Suspense in the parent component
export default function WrapperComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NotFoundPage />
    </Suspense>
  );
}
