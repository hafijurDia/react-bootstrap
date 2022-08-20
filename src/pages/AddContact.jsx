import React, {useContext} from 'react';
import ContactForm from '../components/contacts/ContactForm'
import { ContactContext } from '../context/Contact.context';

const AddContact = () => {
    const {addContact} = useContext(ContactContext);
    return (
        <ContactForm addContact={addContact}/>
    )
}

export default AddContact;
