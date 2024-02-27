"use client"
import { useState } from 'react';
import {Button} from '@nextui-org/button'; 
import {Input, Textarea, Select, SelectItem, Chip} from "@nextui-org/react";
import Image from 'next/image';

const solutions = [
  { key: 'Talent Acquisition', value: 'Talent Acquisition' },
  { key: 'Consulting & Advisory', value: 'Consulting & Advisory' }, 
  { key: 'Training & Development', value: 'Training & Development' }
]

export const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    solutions: '',
    note: ''
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

  const handleFormChange = (event: React.FormEvent<HTMLFormElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target as HTMLInputElement
    console.log({ name, value })
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
        email: formData.email,
        name: formData.name,
        company: formData.company,
        solutions: formData.solutions,
        note: formData.note,
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
    <div className='flex gap-12'>
      <div className='hidden md:flex md:flex-col'>
        <div className="w-72 xl:w-[500px] flex-1 relative rounded-xl overflow-hidden">
          <Image
            className='object-cover'
            src="/seek_example.webp"
            fill
            alt="Seek Logo"
          />
        </div>
      </div>
      <div className="flex flex-col items-stretch justify-center text-zinc-600">
        <h2 className="text-xl uppercase tracking-wider pb-2">
          Contact Us
        </h2>
        <p className='mb-8 text-base sm:text-lg'>{'Ready to take the next step? We\'re here to support your journey to success. Drop us a message with your details, and let\'s discuss how we can help you reach your goals.'}</p>
        <form onChange={handleFormChange} onSubmit={handleSubmit} className="flex flex-col space-y-4 items-stretch w-full">
          <Input 
            variant='bordered'
            autoComplete='off'
            label='Name'
            name='name'
            // color="primary"
            description='Please provide your full name'
            isReadOnly={isSuccess || isSendingEmail}
            value={formData.name}
            isInvalid={isFormError.name}
            errorMessage={isFormError.name ? 'Please provide your full name' : ''}
          />
          <Input 
            variant='bordered'
            autoComplete='off'
            label='Company'
            description='Who do you work with?'
            name='company'
            // color="primary"
            isReadOnly={isSuccess || isSendingEmail}
            value={formData.company}
          />
          <Input 
            autoComplete='off'
            label='Email'
            name='email'
            description='How should we reach you?'
            // color="primary"
            variant='bordered'
            isReadOnly={isSuccess || isSendingEmail}
            value={formData.email}
            isInvalid={isFormError.email}
            errorMessage={isFormError.email ? 'Please enter a valid email' : ''}
          />
          {/* <Select
            name='solutions'
            label="Solutions"
            // isMultiline={true}
            description='What services are you interested in?'
            color="primary"
            variant='bordered'
            selectionMode="multiple"
            value={formData.solutions}
            onChange={handleFormChange}
          >
            {solutions.map((solution) => (
              <SelectItem key={solution} value={solution}>
                {solution}
              </SelectItem>
            ))}
          </Select> */}
          <Select
            items={solutions}
            name='solutions'
            onChange={handleFormChange}
            variant="bordered"
            isMultiline={true}
            selectionMode="multiple"
            description='What services are you interested in?'
            placeholder="Solutions"
            labelPlacement="outside"
            aria-label="Solutions"
            // color='primary'
            classNames={{
              trigger: "min-h-unit-12 py-2 placeholder:text-red-500",
            }}
            renderValue={(items) => {
              return (
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <Chip key={item.key}>{item.data.value}</Chip>
                  ))}
                </div>
              );
            }}
          >
            {(item) => (
              <SelectItem key={item.key} textValue={item.value}>{item.value}</SelectItem>
            )}
          </Select>
          <Textarea
            name='note'
            label="Note"
            variant='bordered'
            // color="primary"
            value={formData.note}
          />
          <div className='sm:pt-4'>
            <Button 
              isLoading={isSendingEmail}
              type='submit'
              color={isSuccess ? 'primary' : 'primary'}
              disabled={isSuccess}
              className='uppercase tracking-wider font-medium rounded-sm w-32'
              variant="bordered"
            >{isSuccess ? 'done' : 'send'}</Button>
          </div>
        </form>
        <p className='text-medium tracking-wide h-10 text-align-center text-primary flex items-end'>{isSuccess && 'Successfully Sent!'}</p>
      </div>
  </div>
  );
};
