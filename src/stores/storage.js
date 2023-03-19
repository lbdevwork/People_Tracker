import { ref, computed , inject} from 'vue'
import { usePeopleStore } from './people';
import { defineStore } from 'pinia'
import CryptoJS from 'crypto-js';
import fs from 'fs'

export const useStorageStore = defineStore('storage', () => {
  
  const cryptojs= inject('cryptojs')
  const peopleStore = usePeopleStore()
  const users = computed(() => peopleStore.people.value)
  const SECRET_KEY = 'my-secret-key';
  const filenameUsers = '@/assets/users.json';

  
  function encryptUsers() {
   /* try{
        const dataString = JSON.stringify(users.value);
        const ciphertext = CryptoJS.AES.encrypt(dataString, SECRET_KEY).toString();
        fs.writeFile(this.fileNameUsers, JSON.stringify({ data: ciphertext }), err => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
            }
        });
        console.log("Encryption Successfull")
        return "Encryption Successfull";

    }catch(err){
        console.log(err)
    }
    */
  }
  
  function decryptUsers() {
   /* try{
        const fileData = fs.readFile(this.fileNameUsers)
        const bytes = CryptoJS.AES.decrypt(fileData, SECRET_KEY);
        const plaintext = bytes.toString(CryptoJS.enc.Utf8);
        const users = JSON.parse(plaintext);
        return users;
    }catch(err){
        console.log(err)
    }*/
  }



  return { encryptUsers, decryptUsers }
})
