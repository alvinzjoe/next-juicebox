"use client";

import React, { forwardRef } from 'react';
import Button from "./Button";

interface InputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (value: string) => void;
    placeholder?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ value, onChange, onSubmit, placeholder = '' }, ref) => {
        const handleSubmit = () => {
            onSubmit(value);
        };

        const isButtonDisabled = !value.trim();

        return (
            <div className='relative w-full'>
                <input
                    ref={ref} 
                    type='text'
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className='bg-transparent border border-white60 font-sohne text-white60 min-h-[60px] w-full py-5 px-3 pr-6 rounded-defaultRadius'
                />
                <div className='absolute top-1/2 -translate-y-1/2 right-3'>
                    <Button
                        variant="icon"
                        className='w-8 h-8'
                        size="sm"
                        onClick={() => {
                            if (!isButtonDisabled) {
                                handleSubmit();
                            }
                        }}
                        disabled={isButtonDisabled}
                    >
                        <img src="/arrow-up.svg" alt="Submit" />
                    </Button>
                </div>
            </div>
        );
    }
);

export default Input;
