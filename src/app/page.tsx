'use client'
import { useEffect } from 'react';
import Hero from '@/components/hero'
import About from '@/components/about'
import Services from '@/components/services'
import Schedule from '@/components/schedule'

export default function Home() {
  useEffect(() => {
    document.title = 'Chain The Barber | Inicio';
  }, []);

  return (
    <>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Schedule></Schedule>
    </>
  )
}
