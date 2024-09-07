import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    const newContacts = Array.from({ length: number }, createFakeContact);
    contacts.push(...newContacts);
    await writeContacts(contacts);
  } catch (error) {
    console.error(error);
  }
};

generateContacts(5);
