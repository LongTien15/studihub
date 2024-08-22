import React from 'react';
import { ArrowLeft } from 'lucide-react';
//

export const BackButton = () => {
  return (
    <button
      className="relative flex gap-3 self-start text-xl font-semibold leading-7 tracking-normal text-slate-50"
      type="button"
    >
      <ArrowLeft className="shrink-0" size={40} />
      <span className="my-auto">Back</span>
    </button>
  );
};
