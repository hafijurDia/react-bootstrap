import React from 'react'
import Contact from './Contact'

export default function Contacts({contacts,deleteContact}) {
  return (
    <>
    {contacts.map((contact) => ( 
    <Contact key={contact.id} contact={contact} deleteContact={deleteContact}/>
    )) } 
    </>
  )
}
