import {createContext, useState} from 'react'
import { toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid';

const initialContacts = [
    {
      id: '1',
      firstName: 'Barbette',
      lastName: 'Pfertner',
      email: 'bpfertner0@drupal.org',
      profession: 'developer',
      gender: 'female',
      image: 'https://randomuser.me/api/portraits/women/75.jpg',
      dateOfBirth: '05/11/2021',
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
      dateOfBirth: '04/04/2022',
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
      dateOfBirth: '17/05/2022',
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
      dateOfBirth: '30/07/2022',
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
      dateOfBirth: '21/03/2022',
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
      dateOfBirth: '16/01/2022',
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
      dateOfBirth: '05/02/2022',
      bio: 'All About me',
    },
  ]

//create contact context
export const ContactContext = createContext()

// create provider
export const ContactProvider = ({ children }) => {
    const [contacts, setContacts] = useState(initialContacts)

    const addContact = contact => {
      let contactToAdd = {
        id: uuidv4(),
        ...contact
      }
      setContacts([contactToAdd, ...contacts])
    
    }
  
    const deleteContact = (id) => {
      toast.success("Contact Deleted Successfully !")
      const updateContacts = contacts.filter(contact => contact.id !==  id)
      setContacts(updateContacts)
    }
  
    const updateContact = (contactToUpdate, id) => {
  
      const contactWithUpdate = contacts.map((contact) => {
        if (contact.id === id) {
          //update
          return {
            ...contactToUpdate,
          }
        }else{
          return contact
        }
      })
      setContacts(contactWithUpdate)
  
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
