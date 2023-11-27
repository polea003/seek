"use client"
import { useState } from 'react';
import {Button} from '@nextui-org/button'; 
import {Input} from "@nextui-org/react";
import { send } from 'process';

const ComingSoonPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const isEmailValid = (email: string): Boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email)
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const sendEmail = async () => {
    let response = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subscriberEmail: email
      })
    })

    response = await response.json()
    console.log({ response })
    return response
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(email);
    event.preventDefault();
    // check if valid
    if (!isEmailValid(email)) {
      setIsError(true)
      setTimeout(() => setIsError(false), 3000)
      return 
    }
    setIsSendingEmail(true)


    setTimeout(async () => {
      // Handle email submission logic here, like sending it to a backend service or API
      await sendEmail()
      setIsSendingEmail(false)
      console.log('email sent');
      setIsSuccess(true);
    }, 300)
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-zinc-100 justify-center pb-20 text-zinc-600">
      <h1 className="text-xl uppercase tracking-wider mb-20">
        SEEK Medical Affairs
      </h1>
      <h1 className="text-center text-3xl sm:text-5xl uppercase tracking-wider mb-20">
        launching soon
      </h1>
      <h2 className="text-xl uppercase tracking-wider pb-2">
        get notified
      </h2>
      <p className='text-center mb-10'>Enter your email below to stay in touch</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row space-y-6 sm:space-x-4 sm:space-y-0 items-center sm:items-start sm:justify-center w-full pt-4">
        <Input 
          autoComplete='off'
          label='Email'
          color="primary"
          variant='underlined'
          description='Enter email to subscribe'
          isReadOnly={isSuccess || isSendingEmail}
          value={email}
          isInvalid={isError}
          errorMessage={isError ? 'Please enter a valid email' : ''}
          onChange={handleEmailChange}
          className='max-w-xs'
        />
        <div className='sm:pt-4'>
          <Button 
            isLoading={isSendingEmail}
            type='submit'
            color={isSuccess ? 'primary' : 'primary'}
            disabled={isSuccess}
            className='uppercase tracking-wider font-medium rounded-sm w-32'
            variant="bordered"
          >{isSuccess ? 'done' : 'subscribe'}</Button>
        </div>
      </form>
      <p className='text-medium tracking-wide h-10 text-align-center text-primary flex items-end'>{isSuccess && 'Successfully Subscribed!'}</p>
    </div>
  );
};

export default ComingSoonPage;
