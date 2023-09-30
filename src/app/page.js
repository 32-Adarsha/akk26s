import Image from 'next/image'
import Navbar from './nav'
import Main from './main'
import Content from './content'
import Below from './below'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <main className='bg-white h-screen text-black px-10'>
          <Navbar/>
          <div className='flex flex-wrap justify-around w-10/12 mx-auto'>
            <Content/> 
            <Main/>
          </div>
          <Below/>
      </main>
    </div>
  )
}
