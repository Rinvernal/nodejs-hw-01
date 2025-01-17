import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
  try {
    const read = await readContacts();
    return read;
  } catch (error) {
    console.log(error);
  }
};

console.log(await getAllContacts());
