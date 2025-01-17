import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log("Список контактів порожній!");
    }
    const removeLast = contacts.slice(0, -1);
    await writeContacts(removeLast);
  } catch (error) {
    console.log(error);
  }
};

removeLastContact();
