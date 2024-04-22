'use client'
import { setDoc, doc, getDoc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase';

type Operation = 'add' | 'read' | 'delete';

interface Data {
  [key: string]: any;
}

export default async function firebaseTools(operation: Operation, collection: string = '', docName: string = '', data: Data | null = null): Promise<void> {
  switch (operation) {
    case 'add':
      await addDocument(collection, docName, data);
      break;
    case 'read':
      await readDocument(collection, docName);
      break;
    case 'delete':
      await deleteDocument(collection, docName);
      break;
    default:
      console.error("Invalid operation.");
      break;
  }
}

async function addDocument(collectionName: string, docName: string, data: Data | null): Promise<void> {
  if (!collectionName || !docName || !data) {
    console.error("Collection name, document name, and data must be provided.");
    return;
  }

  const docRef = doc(db, collectionName, docName);
  await setDoc(docRef, data);
  console.log("Document added:", docRef.id);
}

async function readDocument(collectionName: string, docName: string): Promise<any> {
  if (!collectionName || !docName) {
    console.error("Collection name and document name must be provided.");
    return null;
  }

  const docRef = doc(db, collectionName, docName);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    console.log("Document data:", data);
    return data;
  } else {
    console.error("No such document!");
    return null;
  }
}

async function deleteDocument(collectionName: string, docName: string): Promise<void> {
  if (!collectionName || !docName) {
    console.error("Collection name and document name must be provided.");
    return;
  }

  const docRef = doc(db, collectionName, docName);
  await deleteDoc(docRef);
  console.log("Document deleted:", docName);
}
