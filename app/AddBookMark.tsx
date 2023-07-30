'use client';

import { useRef } from 'react';

export const AddBookMark = ({ title }: { title: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref}>
      <button
        type="button"
        className="border border-solid border-blue-300 py-2 px-4 rounded-md hover:bg-blue-300 transition-all"
      >
        {title}
      </button>
    </div>
  );
};
