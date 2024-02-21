"use client"
import { useState } from 'react';
import {Button} from '@nextui-org/button'; 
import {Input} from "@nextui-org/react";

const ComingSoonPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isFormError, setIsFormError] = useState({
    name: false,
    email: false
  });
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const clearErrors = () => {
    setIsFormError({
      name: false,
      email: false
    })
  }

  const isEmailValid = (email: string): Boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email)
  }

  const handleFormChange = (event: React.FormEvent<HTMLFormElement>) => {
    const { name, value } = event.target as HTMLInputElement
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  };

  const sendEmail = async () => {
    let response = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subscriberEmail: formData.email,
        subscriberName: formData.name
      })
    })

    response = await response.json()
    console.log({ response })
    return response
  }

  const checkFormForErrors = (): boolean => {
    let errorsFound = false

    if (formData.name === '' || formData.name.split(' ').length < 2) {
      setIsFormError(prevError => ({
        ...prevError,
        name: true
      }))
      errorsFound = true
      setTimeout(() => clearErrors(), 3000)
    }
    if (!isEmailValid(formData.email)) {
      setIsFormError(prevError => ({
        ...prevError,
        email: true
      }))
      errorsFound = true
      setTimeout(() => clearErrors(), 3000)
    }
    return errorsFound
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errorsFound = checkFormForErrors();
    if (errorsFound) {
      return
    }
    setIsSendingEmail(true)
    setTimeout(async () => {
      await sendEmail()
      setIsSendingEmail(false)
      console.log('email sent');
      setIsSuccess(true);
    }, 80)
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
      <form onChange={handleFormChange} onSubmit={handleSubmit} className="flex flex-col space-y-6 items-center w-full pt-4">
        <Input 
          autoComplete='off'
          label='Name'
          name='name'
          color="primary"
          variant='underlined'
          description='Please provide your full name'
          isReadOnly={isSuccess || isSendingEmail}
          value={formData.name}
          isInvalid={isFormError.name}
          errorMessage={isFormError.name ? 'Please provide your full name' : ''}
          className='max-w-xs'
        />
        <Input 
          autoComplete='off'
          label='Email'
          name='email'
          color="primary"
          variant='underlined'
          description='Enter email to subscribe'
          isReadOnly={isSuccess || isSendingEmail}
          value={formData.email}
          isInvalid={isFormError.email}
          errorMessage={isFormError.email ? 'Please enter a valid email' : ''}
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
