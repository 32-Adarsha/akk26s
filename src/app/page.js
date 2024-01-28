import Image from 'next/image'
import Navbar from './Front/nav'
import Main from './Front/main'
import Below from './Front/below'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <main className='flex flex-col bg-white h-full px-10'>
          <Navbar/>
          <div className='flex flex-wrap justify-around w-full mx-auto'>
            <Main/>
          </div>
          <Below/>
      </main>
    </div>
  )
}
