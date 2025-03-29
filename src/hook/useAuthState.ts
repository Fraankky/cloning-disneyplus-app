import { useEffect, useState } from "react"
import { getAuth, onAuthStateChanged, User } from "firebase/auth"

const useAuthState = () => {
    const [user, setUser] = useState<User | null>(null)


    useEffect(() => {   
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        
    }, [])

    return user;
}

export default useAuthState;