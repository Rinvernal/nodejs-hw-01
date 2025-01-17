
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
const generateContacts = async (number) => {
  try {
    const read = await readContacts();
    const createNew = Array.from({length: number}, ()=>createFakeContact());
    const updated = [...read, ...createNew];
    await writeContacts(updated);
    console.log(`Додано ${number} нових контактів.`);
  } catch (error) {
    console.log(error);
  }
};

generateContacts(5);
