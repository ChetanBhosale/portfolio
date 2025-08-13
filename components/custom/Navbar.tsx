import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { AnimatedShinyText } from '../magicui/animated-shiny-text'
import { ArrowRightIcon } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='sticky top-0 left-0 right-0 z-50 flex justify-between items-center w-full h-20 px-10'>
        <span className='text-2xl font-bold'>Dev</span>
        <span className='flex items-center gap-2'>
        <AnimatedShinyText className="inline-flex border border-gray-300 rounded-md rounded-full cursor-pointer items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ Resume</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
        </span>
    </div>
  )
}

export default Navbar