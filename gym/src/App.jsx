import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SectionImage from './components/SectionImage'
import CardIcon from './components/CardIcon'
import FadeIn from './components/FadeIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <SectionImage imageUrl={"galera.png"} children={
        <div>
          aaaaa ned to now now
        </div>
      } />
      <div className='container lg:w-[calc(100vw*0.8)] mx-auto px-1 py-20'>
        <FadeIn children={
          <h1 className="text-3xl text-yellow-400 text-center mb-5 font-bold">Nossos Serviços</h1>
        }/>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          <CardIcon></CardIcon>
          <CardIcon></CardIcon>
          <CardIcon></CardIcon>
        </div>
      </div>
    </>
  )
}

export default App
