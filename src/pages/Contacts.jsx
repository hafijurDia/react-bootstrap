import React from 'react'
import Contact from '../components/contacts/Contact'
import { ContactContext} from '../context/Contact.context'


export default function Contacts() {
  const {contacts,deleteContact} = React.useContext(ContactContext)
  return (
    <>
    <h3 className='text-center'>All Contacts</h3>
    {contacts.map((contact) => ( 
    <Contact key={contact.id} contact={contact} />
    )) } 
    </>
  )
}
