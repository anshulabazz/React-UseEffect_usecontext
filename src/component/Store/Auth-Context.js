import React from 'react';
const AuthContext = React.createContext({
    isloggedIn: false,
    onlogout: () => { }
})
export default AuthContext
