import { firestore } from "api/config";
import collections from "api/models/collections";
import { User } from "api/models/User";
import { FirebaseError } from "firebase/app";
import { doc, setDoc } from "firebase/firestore";

const createUser = async (id: string, user: User) => {
  try {
    const docRef = doc(firestore, collections.users, id);
    await setDoc(docRef, { ...user, id: docRef.id });
    console.log(docRef.id);
  } catch (err) {
    const error = err as FirebaseError;
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorCode, errorMessage);
  }
};

export default { createUser };
