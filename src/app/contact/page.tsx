'use client'
import Contacts from "@/components/contacts";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = 'Chain The Barber | Contacto';
  }, []);

  return (
    <>
      <Contacts></Contacts>
    </>
  )
}