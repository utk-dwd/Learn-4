import React from 'react'
import { useForm } from 'react-hook-form';


function Form({handleFormSubmitData}) {
  const {register, handleSubmit, reset} = useForm();
  const handleFormSubmit = (data) => {
    handleFormSubmitData(data);
    reset();
  }

  return (
    <div className='mt-10 flex justify-center'>
      <form className='flex gap-10' onSubmit={handleSubmit(handleFormSubmit)} >
      <input {...register('name')} className='rounded-md px-2 py-1 text-base font-semibold outline-none' placeholder='Name' type="text"/>
      <input {...register('email')} className='rounded-md px-2 py-1 text-base font-semibold outline-none' placeholder='email' type="text"/>
      <input {...register('image')} className='rounded-md px-2 py-1 text-base font-semibold outline-none' placeholder='Image Url' type="text"/>
      <input className='rounded-md px-5 py-1 bg-blue-600 text-white font-semibold' type='submit'/>
      </form>
    </div>
  )
}

export default Form