// This file is for all CRUD operations for profile info to
// send to database

import { NextResponse } from 'next/server';
import { auth, db } from '../../../firebase/clientApp';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';


// signup
export async function POST(request: Request) {
    const { email, password } = await request.json();

    // try to create user in firebase authentication. will return error if unsuccessful
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Optional: Store additional user info in Firestore
        // await setDoc(doc(db, 'users', user.uid), {
        //     username,
        //     email,
        // });

        return NextResponse.json({ success: true, userId: user.uid });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ success: false, message: error.message });
        } else {
            return NextResponse.json({ success: false, message: 'An unknown error occurred' });
        }
    }
}

// login
export async function GET(request: Request) {
    const { email, password } = await request.json();

    // try to log into user in firebase. will return error if unsuccessful
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // fetches additional data from user (email, name, etc. for the profile page)
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        return NextResponse.json({ success: true, userId: user.uid });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ success: false, message: error.message });
        } else {
            return NextResponse.json({ success: false, message: "An unknown error occured." });
        }
    }

}

