import {createContext, useReducer, useState} from 'react'
import { FaReacteurope } from 'react-icons/fa';
import { toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid';
import { date } from 'yup/lib/locale';

import contactReducer from './reducer';
import { ADD_CONTACT,CONTACT_DELETE,UPDATE_CONTACT } from './types';

//create contact context
export const ContactContext = createContext()

//if existing date is string then parse It as object (suitable for datePicker field) 
//if existing data is Object then don't parse it
// import {parse} from 'date-fns'
// const parseDate =
//     contact?.dateOfBirth instanceof Object
//       ? contact?.dateOfBirth
//       : parse(contact?.dateOfBirth, 'dd/MM/yyyy', new Date())

//   const [birthYear, setBirthYear] = useState(
//     contact?.date ? parseDate : new Date()
//   )

const initialContacts = [
    {
      id: '1',
      firstName: 'Barbette',
      lastName: 'Pfertner',
      email: 'bpfertner0@drupal.org',
      profession: 'developer',
      gender: 'female',
      image: 'https://randomuser.me/api/portraits/women/75.jpg',
      dateOfBirth: new Date(),
      bio: 'All About me',
    },
    {
      id: '2',
      firstName: 'Ignatius',
      lastName: 'McPhilip',
      email: 'imcphilip1@toplist.cz',
      profession: 'designer',
      gender: 'male',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      dateOfBirth: new Date(),
      bio: 'All About me',
    },
    {
      id: '3',
      firstName: 'Fletch',
      lastName: 'Veel',
      email: 'fveel2@yellowbook.com',
      profession: 'marketer',
      gender: 'male',
      image: 'https://randomuser.me/api/portraits/men/78.jpg',
      dateOfBirth: new Date(),
      bio: 'All About me',
    },
    {
      id: '4',
      firstName: 'Shawn',
      lastName: 'Lawrenz',
      email: 'slawrenz3@independent.co.uk',
      profession: 'developer',
      gender: 'female',
      image: 'https://randomuser.me/api/portraits/women/80.jpg',
      dateOfBirth: new Date(),
      bio: 'All About me',
    },
    {
      id: '5',
      firstName: 'Bucky',
      lastName: 'Casaccio',
      email: 'bcasaccio4@netlog.com',
      gender: 'male',
      profession: 'marketer',
      image: 'https://randomuser.me/api/portraits/men/56.jpg',
      dateOfBirth: new Date(),
      bio: 'All About me',
    },
    {
      id: '6',
      firstName: 'Regan',
      lastName: 'Lodford',
      email: 'rlodford5@nbcnews.com',
      profession: 'designer',
      gender: 'female',
      image: 'https://randomuser.me/api/portraits/women/81.jpg',
      dateOfBirth: new Date(),
      bio: 'All About me',
    },
    {
      id: '7',
      firstName: 'Hubert',
      lastName: 'Langhorne',
      email: 'hlanghorne6@thetimes.co.uk',
      gender: 'male',
      profession: 'marketer',
      image: 'https://randomuser.me/api/portraits/men/80.jpg',
      dateOfBirth: new Date(),
      bio: 'All About me',
    },
  ]

// create provider
export const ContactProvider = ({ children }) => {
    const [contacts, dispatch] = useReducer(contactReducer, initialContacts)
    //add contact
    const addContact = contact => {
      dispatch({type: ADD_CONTACT, payload: contact })
    }
    //delete contact
    const deleteContact = (id) => {
      dispatch({type: CONTACT_DELETE, payload: id })
    }
    //update contact
    const updateContact = (contactToUpdate, id) => {
      dispatch({type: UPDATE_CONTACT, payload:{id, contactToUpdate}})
  
    }

    const value = {
        contacts,
        addContact,
        updateContact,
        deleteContact,
    }
    return (
        <ContactContext.Provider value={value}>
            {children}
        </ContactContext.Provider>
    )
    
}
