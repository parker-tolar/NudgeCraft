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
    <div className="w-full h-full bg-white text-black p-12 flex flex-col font-body">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold tracking-tight text-blue-500">{APP_NAME}</h1>
        <p className="text-2xl text-gray-500 mt-2">Certificate of Completion</p>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center text-center my-8">
        <p className="text-xl text-gray-600">This certifies that</p>
        <p className="text-4xl font-semibold my-6 border-b-2 border-gray-400 px-12 pb-3 text-gray-800">
          Valued Participant
        </p>
        <p className="text-xl text-gray-600">has successfully completed the micro-course on</p>
        <p className="text-3xl font-bold my-4 text-blue-500">The Science of Motivation</p>
        <p className="text-xl text-gray-600">on {date}.</p>
      </div>

      <div className="mt-auto border-t-2 border-gray-200 pt-8">
        <h3 className="text-xl font-semibold text-center mb-4 text-gray-700">Key Insight Unlocked</h3>
        <div className="flex items-start gap-4 max-w-xl mx-auto text-left">
          <div className="flex h-12 w-12 items-center justify-center rounded-full shrink-0 mt-1 bg-blue-100 text-blue-500">
            <BrainCircuit className="h-7 w-7" />
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-800">{userPatternTitle}</h4>
            <p className="text-gray-600 leading-relaxed">{userPatternDescription}</p>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-12 text-xs text-gray-400">
        <p>This certificate acknowledges participation and reflection, not clinical expertise.</p>
        <p className="font-semibold mt-1">{APP_NAME}</p>
      </div>
    </div>
  );
}
