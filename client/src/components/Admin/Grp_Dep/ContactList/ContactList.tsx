import React from 'react'
import ContactListTitle from './ContactListTitle'
import ContactListBody from './ContactListBody'

function ContactList(props: { setExpand: Function }) {
  return (
    <div className='bg-gray-100 w-[20%]'>
        <ContactListTitle expand={props.setExpand} />
        <ContactListBody />
    </div>
  )
}

export default ContactList