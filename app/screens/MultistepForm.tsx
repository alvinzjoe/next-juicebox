"use client";
import React, { useState, useRef } from 'react';
import Input from "../components/Input";
import LottieAnimation from '../components/LottieAnimation';
import Button from "../components/Button";
import { useRouter } from 'next/navigation'

export default function MultistepForm() {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [inputValue, setInputValue] = useState<string>('');
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (value: string) => {
    if (step === 1) {
      setFirstName(value);
      setStep(2);
    } else if (step === 2) {
      setEmail(value);
      setStep(3);
    }
    setInputValue("");
  };

  return (
    <>
      <div className='mt-4 pt-40 flex flex-col align-middle items-center font-bagoss text-[19px] tracking-[1%]'>
        <div className='w-full max-w-12 pb-8 -z-10 pointer-events-none'>
          <LottieAnimation />
        </div>
        {step === 1 && (
          <p className='text-white text-center'>
            Let’s start with the basics. Type in your <br />first name.
          </p>
        )}
        {step === 2 && (
          <p className='text-white text-center'>
            How should we contact you? Type in your <br />email address.
          </p>
        )}
        {step === 3 && (
          <p className='text-white text-center'>
            Thanks, {firstName}! Now, it’s time to get a reality check. <br /><br />
            This will take 2-3 minutes.
          </p>
        )}
      </div>
      {step < 3 && (
        <div className='absolute bottom-0 px-5 pb-6 w-full max-w-2xl'>
          <form method='post'>
            <Input
              value={inputValue}
              onChange={handleChange}
              onSubmit={handleSubmit}
              placeholder={step === 1 ? "First name" : "Email address"}
            />
          </form>
        </div>
      )}
      {step == 3 && (
        <div className="px-5 pb-6 absolute bottom-0 w-full max-w-2xl">
          <Button variant="white" onClick={() => router.push('/')} className="w-full">
              Continue
          </Button>
        </div>
      )}
    </>
  );
}
