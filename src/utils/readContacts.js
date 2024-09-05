import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import path from 'node:path';

export const readContacts = async () => {
  try {
    const filePath = path.join(process.cwd(), PATH_DB);
    const data = await fs.readFile(filePath, 'utf-8');
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.error('Error reading contacts:', error);
    throw new Error('Failed to read contacts');
  }
};
