import { useState } from 'react'

export function App() {
  const [output, setOutput] = useState<string>('')
  
  return (
    <main className='h-screen bg-zinc-50 flex items-center justify-center flex-col gap-6'>
      <form
        className='flex flex-col gap-4 w-full max-w-md'
      >
        <div className='flex flex-col gap-1'>
          <label htmlFor='email'>E-mail</label>
          <input
            type='email'
            name='email'
            className='border border-zinc-200 shadow-sm rounded h-10 outline-none px-3'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            className='border border-zinc-200 shadow-sm rounded h-10 outline-none px-3'
          />
        </div>

        <button
          type='submit'
          className='bg-emerald-500 rounded font-semibold text-white h-10 hover:bg-emerald-600'
        >
          Submit
        </button>
      </form>

      <hr className='border border-b-zinc-200 w-full max-w-md' />

      <div className='bg-gray-800 text-white p-4 rounded-lg overflow-x-auto w-full max-w-md'>
        <pre>{output}</pre>
      </div>
    </main>
  )
}