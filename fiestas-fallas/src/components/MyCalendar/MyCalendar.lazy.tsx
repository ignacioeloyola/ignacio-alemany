import React, { lazy, Suspense } from 'react';

const LazyMyCalendar = lazy(() => import('./MyCalendar'));

const MyCalendar = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMyCalendar {...props} />
  </Suspense>
);

export default MyCalendar;
