import { useState, useMemo, createContext } from "react";
import Api from "./api";

const UserContext = createContext({});

function UserContextProvider({ children }) {
    const [user, setUser] = useState({});

    async function signInUser(email, password) {
        const result = await Api.signin(email, password);
        if (result.success) {
            setUser(result.result);
        }
        return result;
    }

    async function signOutUser() {
        await Api.signout();
        setUser({});
    }

    const values = useMemo(() => {
        return {
            user,
            signInUser,
            signOutUser
        }

    }, [user]);

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider };