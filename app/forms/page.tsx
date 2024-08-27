"use client"
import React, { useEffect } from 'react';
import Header from "../components/Header";
import MultistepForm from "../screens/MultistepForm";
import { useRouter } from 'next/navigation'

export default function FormsPage() {
  const router = useRouter()
  const handleSubmit = (value) => {
    alert(value)
    console.log('Submit with value:', value);
  };

  useEffect(() => {
  });
  return (
      <>
        <main className="flex min-h-screen flex-col items-center px-5 max-w-6xl mx-auto">
          <div className="fixed w-full px-5">
            <Header showBackButton onBackClick={() => router.push('/walkthrough')}  />
          </div>
          <MultistepForm />
        </main>
      </>
  )
}
