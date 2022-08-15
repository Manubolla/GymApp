import { firebaseAuth } from "api/config";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";

const signUpUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    return userCredential.user;
  } catch (err) {
    const error = err as FirebaseError;
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorCode, errorMessage);
  }
};

export default { signUpUser };
