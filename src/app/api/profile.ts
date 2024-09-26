import { NextResponse } from 'next/server';
import { auth, db } from '../../../firebase/clientApp';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

// Handle signup
export async function POST(request: Request) {
    const { email, password, firstName, lastName, phoneNumber } = await request.json();

    try {
        // Create user in Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Store additional user info in Firestore
        await setDoc(doc(db, 'users', user.uid), {
            firstName,
            lastName,
            phoneNumber,
        });

        return NextResponse.json({ success: true, userId: user.uid });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ success: false, message: 'yo wtf just happened' });
        } else {
            return NextResponse.json({ success: false, message: 'An unknown error occurred' });
        }
    }
}

// Handle login
export async function GET(request: Request) {
    const { email, password } = await request.json();

    try {
        // Log in the user with Firebase Authentication
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Fetch additional data from Firestore
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        const userData = docSnap.exists() ? docSnap.data() : {};

        return NextResponse.json({ success: true, userId: user.uid, userData });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ success: false, message: 'error.message' });
        } else {
            return NextResponse.json({ success: false, message: 'An unknown error occurred' });
        }
    }
}
