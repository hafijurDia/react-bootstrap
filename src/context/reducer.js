import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom'
import { ADD_CONTACT,CONTACT_DELETE,UPDATE_CONTACT } from './types';

const contactReducer = (state, action) => {
    //state - initial contacts
    //action - {type: 'CONTACT_DELETE', payload: id }
    const {type, payload} = action
    
    switch(type){
    // delete contact
      case CONTACT_DELETE :
      const deleteContacts = state.filter(
        (contact) => contact.id !== payload
        )
        return [...deleteContacts]
    //add contact
      case ADD_CONTACT :
        const newContact = {
          id: uuidv4(),
          ...payload,
        }
        return [newContact, ...state]
    //update contact
        case UPDATE_CONTACT :
          const {id, contactToUpdate} = payload
          const contactWithUpdate = state.map((contact) => {
            if (contact.id === id) {
              //update
              return {
                id,
                ...contactToUpdate,
              }
            }else{
              return contact
            }
          })
          return [...contactWithUpdate]
    
          default:
            state
    }
    
    }

    export default contactReducer