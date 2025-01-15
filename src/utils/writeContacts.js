import { PATH_DB } from '../constants/contacts.js';
import fs from "node:fs/promises";
import { createFakeContact } from './createFakeContact.js';
  export const writeContacts = async (updatedContacts) => {
    try {
      const data = JSON.stringify(createFakeContact(), null, 2);
      await fs.writeFile(PATH_DB, data, "utf8");
      console.log("all right");
    } catch (error) {
      console.log("Error:", error);
    }
  };
  writeContacts();