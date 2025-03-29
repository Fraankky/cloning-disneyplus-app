import {
  createUserWithEmailAndPassword,
  updateProfile,
  getAuth,
  User,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";

interface Params {
  onError?: (error: string) => void;
  onSuccess?: (user: User) => void;
}

const useAuth = (params: Params = {}) => {
  const { onError, onSuccess } = params;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const createUser = async (email: string, name: string, password: string) => {
    const auth = getAuth();
    try {
      setError("");
      setLoading(true);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );


      if (auth.currentUser) {
        // Wait for the profile update to complete
        await updateProfile(auth.currentUser, { displayName: name });


        await auth.currentUser.reload();
      }
      setLoading(false);

      if (typeof onSuccess === "function") {
        onSuccess(userCredential.user);
      }
      
    } catch (error: any) {
      setError(error.message);
      setLoading(false);

      if (typeof onError === "function") {
        onError(error.message);
      }
    }
  };

  // Implementasi login dan logout
  const login = async (email: string, password: string) => {
    const auth = getAuth();
    try {
      setLoading(true);
      setError("");
      const response = await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      if (typeof onSuccess === "function") {
        onSuccess(response.user);
      }
    } catch (error: any) {
      setError(error.message);
      setLoading(false);

      if (typeof onError === "function") {
        onError(error.message);
      }
    }
  };
  const logout = async () => {
    setLoading(true);
    setError("");
    const auth = getAuth();
    try {
      await signOut(auth);
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
      if (typeof onError === "function") {
        onError(error.message);
      }
    }
  };
  return {
    createUser,
    login,
    logout,
    loading,
    error,
  };
};

export default useAuth;