import React, { useContext } from "react";
import { AuthContext } from "../context/Auth.Context";
import { Table, Button } from "react-bootstrap";
import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import { FaEye, FaTrashAlt, FaPenAlt } from "react-icons/fa";
import { ContactContext } from "../context/Contact.context";
import { Link } from "react-router-dom";

function UserContactList() {
  const { userContacts, loaded, setTrigerDelete } = useContext(AuthContext);
  const { deleteContact } = useContext(ContactContext);
  const handleDelete = (id) => {
    deleteContact(id)
    setTrigerDelete(true)
  }
  return (
    loaded && (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Profession</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {userContacts && userContacts.map((userContact) => {
            return (
              <tr key={userContact.id}>
                <td>{userContact.id}</td>
                <td>{userContact.firstName}</td>
                <td>{userContact.lastName}</td>
                <td>{userContact.email}</td>
                <td>{userContact.profession} </td>
                <td>
                  <Button
                    variant="warning ms-3"
                    size="md"
                    type="view"
                    as={Link}
                    to={`/edit-contact/${userContact.id}`}
                  >
                    <FaPenAlt />
                  </Button>
                  <Button
                    variant="danger"
                    size="md"
                    onClick={() => handleDelete(userContact.id)}
                  >
                    <FaTrashAlt />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    )
  )
}

export default UserContactList;
