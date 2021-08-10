import { ExclamationIcon } from '@heroicons/react/solid';
import React from 'react';

export default function Offline() {
  return (
    <div className="bg-yellow-400 border-l-4 border-yellow-400 p-4">
      <div className="flex justify-center items-center">
        <div className="flex-shrink-0 ">
          <ExclamationIcon className="h-8 w-8 text-yellow-700" />
        </div>
        <div className="ml-3 text-center">
          <p className="text-lg text-yellow-700">
            You are offine. Don't you worry, you still can do things.
          </p>
        </div>
      </div>
    </div>
  );
}
