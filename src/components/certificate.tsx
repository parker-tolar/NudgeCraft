"use client";

import { APP_NAME } from '@/lib/content';
import { BrainCircuit } from 'lucide-react';
import { useState, useEffect } from 'react';

type CertificateProps = {
  userPatternTitle: string;
  userPatternDescription: string;
};

export function Certificate({ userPatternTitle, userPatternDescription }: CertificateProps) {
  const [date, setDate] = useState('');

  useEffect(() => {
    setDate(new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }));
  }, []);

  return (
    <div className="w-full h-full bg-slate-50 text-gray-800 p-8 flex flex-col font-body antialiased">
      <div className="w-full h-full border-2 border-slate-300 p-6 relative">
        <div className="text-center mb-10">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500">Certificate of Completion</h2>
          <h1 className="text-4xl font-bold tracking-tight text-blue-700 mt-2">{APP_NAME}</h1>
        </div>

        <div className="flex-grow flex flex-col items-center justify-center text-center my-8">
          <p className="text-lg text-gray-600">This certifies that</p>
          <p className="text-5xl font-semibold my-4 text-blue-800 tracking-wide">
            Valued Participant
          </p>
          <p className="text-lg text-gray-600 max-w-md">has successfully completed the micro-course on</p>
          <p className="text-2xl font-semibold mt-2 text-gray-700">The Science of Motivation</p>
        </div>

        <div className="mt-auto border-t-2 border-gray-200 pt-8">
          <h3 className="text-xl font-semibold text-center mb-4 text-gray-700">Key Insight Unlocked</h3>
          <div className="flex items-start gap-4 max-w-xl mx-auto text-left bg-blue-50/70 p-4 rounded-lg border border-blue-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-full shrink-0 mt-1 bg-blue-100 text-blue-700">
              <BrainCircuit className="h-7 w-7" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-gray-800">{userPatternTitle}</h4>
              <p className="text-gray-600 leading-relaxed">{userPatternDescription}</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12 text-sm text-gray-500 flex justify-around items-end">
            <div>
                <p className="border-b-2 border-gray-400 w-48 mx-auto pb-1"></p>
                <p className="mt-2">{APP_NAME}, Issuing Authority</p>
            </div>
             <div>
                <p className="border-b-2 border-gray-400 w-48 mx-auto pb-1">{date}</p>
                <p className="mt-2">Date</p>
            </div>
        </div>
         <div className="text-center mt-12 text-xs text-gray-400">
            <p>This certificate acknowledges participation and reflection, not clinical expertise.</p>
        </div>
      </div>
    </div>
  );
}
