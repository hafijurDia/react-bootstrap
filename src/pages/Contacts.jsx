import React from "react";
import Contact from "../components/contacts/Contact";
import Loader from "../components/Loader";
import { ContactContext } from "../context/Contact.context";

export default function Contacts() {
  const { contacts, loaded, deleteContact } = React.useContext(ContactContext);
  return (
    <>
      <h3 className="text-center">All Contacts</h3>
      {loaded ? (
        contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))
      ) : (
        <Loader />
      )}
    </>
  )
}
