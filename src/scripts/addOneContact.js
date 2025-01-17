import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
  try {
    const writeOne = createFakeContact();
    const read = await readContacts();
    const update = [...read, writeOne];
    await writeContacts(update);
  } catch (error) {
    console.log(error);
  }
};

addOneContact();
