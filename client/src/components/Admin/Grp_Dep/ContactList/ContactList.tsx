import React from 'react'
import ContactListTitle from './ContactListTitle'
import ContactListBody from './ContactListBody'

function ContactList() {
  return (
    <div className='bg-gray-100 w-[20%]'>
        <ContactListTitle />
        <ContactListBody />
    </div>
  )
}

export default ContactList