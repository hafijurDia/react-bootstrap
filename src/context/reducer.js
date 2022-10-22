import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom'
import { ADD_CONTACT,CONTACT_DELETE,LOAD_CONTACTS,UPDATE_CONTACT } from './types';

const contactReducer = (state, action) => {
    //state - initial contacts
    //action - {type: 'CONTACT_DELETE', payload: id }
    const {type, payload} = action
    
    switch(type){
    //load contacts
    case LOAD_CONTACTS :
    return [...action.payload]
    // delete contact
      case CONTACT_DELETE :
      const deleteContacts = state.filter(
        (contact) => contact.id !== payload
        )
        return [...deleteContacts]
        
    //add contact
      case ADD_CONTACT :
        const newContact = {
          ...payload,
        }
        return [newContact, ...state]

    //update contact
        case UPDATE_CONTACT :
          const {id, contact: contactToUpdate} = payload
          const contacts  = state.map((contact) => {
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
          return [...contacts]
    
          default:
            state
    }
    
    }

    export default contactReducer