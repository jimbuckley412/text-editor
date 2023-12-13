import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => console.error('putDb not implemented');
    console.log('putDb not implemented');
    const putDB = await openDB('jate', 1);
    const txPut = putDB.transaction('jate', 'readwrite');
    const storePut = txPut.objectStore('jate');
    const requestPut = storePut.put(content);
    const resultPut = await requestPut;
    console.log('Data added to the store', resultPut);
    return resultPut;

    // TODO: Add logic for a method that gets all the content from the database
    export const getDb = async () => console.error('getDb not implemented');
    console.log('getDb not implemented');
    const getDB = await openDB('jate', 1);
    const tx = getDB.transaction('jate', 'readwrite');
    const store = tx.objectStore('jate');
    const request = store.getAll();
    const result = await request;
    console.log('Data retrieved from the store', result);
    return result;
    
initdb();
