'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth';
import { auth } from '@/config/firebase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const registerUser = async (email, password) => {
        await createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password);
    };

    const logoutUser = async () => {
        await signOut(auth);
    };

    return (
        <AuthContext.Provider value={{ user, loading, registerUser, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuthContext must be used within an AuthProvider');
    }
    return context;
};
