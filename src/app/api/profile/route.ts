import { NextResponse } from 'next/server';
import { auth, db } from '../../../../firebase/clientApp';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

// Function to validate email format
const isValidEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    return emailPattern.test(email);
};

// Handle signup
export async function POST(request: Request) {
    const { email, password, firstName = "John", lastName = "Appleseed", phoneNumber = "111-111-1111" } = await request.json();

    // Preliminary validation
    if (!isValidEmail(email)) {
        return NextResponse.json({ success: false, message: 'The email address is invalid. Please provide a valid email.' });
    }
    
    if (password.length < 6) { // Adjust the length check based on your criteria
        return NextResponse.json({ success: false, message: 'The password is too weak. Please choose a stronger password.' });
    }

    let createdUser = null;

    try {
        // Create user in Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        createdUser = userCredential.user; // Store user reference for later use

        // Store additional user info in Firestore
        await setDoc(doc(db, 'users', createdUser.uid), {
            firstName,
            lastName,
            phoneNumber,
        });

        return NextResponse.json({ success: true, userId: createdUser.uid });
    } catch (error) {
        if (createdUser) {
            await auth.currentUser?.delete(); // Remove the user account if it was created
        }

        if (error instanceof Error && 'code' in error) {
            return NextResponse.json({ success: false, message: error.message });
        } else {
            return NextResponse.json({ success: false, message: 'An unknown error occurred during signup.' });
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
            return NextResponse.json({ success: false, message: error.message });
        } else {
            return NextResponse.json({ success: false, message: 'An unknown error occurred when handling login' });
        }
    }
}
