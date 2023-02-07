import axios from "axios"
import React from "react"
import { useEffect, useState } from "react"
import Popup from "../Popup/Popup"
import {
  UserListContainer,
  UserListContent,
  UserListItem,
  UserListName,
  UserListEmail,
} from "./userListStyles"

const UserList = () => {
  const [contacts, setContacts] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [showPop, setShowPop] = useState()
  const pop = (i) => {
    setIsOpen(!isOpen)
    setShowPop(i)
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      )
      setContacts(result.data)
      console.log(result.data)
    }
    fetchData()
  }, [])

  return (
    <UserListContainer>
      {contacts.map((contact, i) => {
        return (
          <div key={contact.id} onClick={() => pop(i)}>
            {i === showPop && (
              <Popup trigger={isOpen}>
                <div className="contact-popup">
                  <div className="contact-inner">
                    <div className="contact-content">
                      <div className="contact-header">
                        <button className="bttn">
                          <i className="fas fa-times"></i>
                        </button>
                        <h1>Name: {contact.name}</h1>
                      </div>
                      <div className="contact-body">
                        <div className="general-info">
                          <p>
                            <u>Email</u>: {contact.email}
                          </p>
                          <p>
                            <u>Id</u>: {contact.id}
                          </p>
                          <p>
                            <u>Phone</u>: {contact.phone}
                          </p>
                          <p>
                            <u>Username</u>: {contact.username}
                          </p>
                          <p>
                            <u>Website</u>: {contact.website}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Popup>
            )}

            <UserListItem>
              <UserListContent>
                <UserListName>{contact.name}</UserListName>
                <UserListEmail>{contact.email}</UserListEmail>
              </UserListContent>
            </UserListItem>
          </div>
        )
      })}
    </UserListContainer>
  )
}

export default UserList
