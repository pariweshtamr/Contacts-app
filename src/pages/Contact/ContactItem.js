import React from 'react'
import { Link } from 'react-router-dom'
import { ContactItemContainer, ContactItemDetails } from './ContactItemStyles'

const ContactItem = (props) => {
  const { contact } = props
  console.log(props)

  return (
    <div key={contact.id}>
      <ContactItemContainer>
        <ContactItemDetails></ContactItemDetails>
        <Link to="/">
          <button>Back to Contact List</button>
        </Link>
      </ContactItemContainer>
    </div>
  )
}

export default ContactItem
