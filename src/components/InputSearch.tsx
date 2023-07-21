import { InputHTMLAttributes } from 'react'

export default function InputSearch(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className='w-80'>
      <input
        {...props}
        type='search'
        className='rounded-md border-2 py-2 pl-2 text-sm w-full placeholder:font-medium focus'
      />
    </label>
  )
}
