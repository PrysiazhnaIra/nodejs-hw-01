import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import path from 'node:path';

export const writeContacts = async (updatedContacts) => {
  try {
    const jsonData = JSON.stringify(updatedContacts, null, 2);
    const filePath = path.join(process.cwd(), PATH_DB);

    await fs.writeFile(filePath, jsonData, 'utf-8');
    console.log('Contacts successfully written to file!');
  } catch (error) {
    console.error('Error writing contacts:', error);
    throw new Error('Failed to write contacts');
  }
};
