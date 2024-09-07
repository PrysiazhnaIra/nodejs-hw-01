import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const newContact = createFakeContact();
    contacts.push(newContact);
    await writeContacts(contacts);
    console.log('New contact added successfully!');
  } catch (error) {
    console.error('Error adding contact', error);
  }
};

addOneContact();
