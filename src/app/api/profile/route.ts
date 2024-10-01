import { NextResponse } from 'next/server';
import { auth, db } from '../../../../firebase/clientApp';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

// Function to validate email format
const isValidEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    return emailPattern.test(email);
};

// Handle requests
export async function POST(request: Request) {
    // Read the request body once
    const { action, email, password, firstName = "John", lastName = "Appleseed", phoneNumber = "111-111-1111", confirmPassword } = await request.json();

    // Preliminary validation
    if (!isValidEmail(email)) {
        return NextResponse.json({ success: false, message: 'The email address is invalid. Please provide a valid email.' });
    }

    if (action === 'signup') {
        if (password.length < 6) {
            // this was just for fun, can make this actually more useful in the future ( < 6 is lame password handling)
            return NextResponse.json({ success: false, message: 'The password is too weak. Please choose a stronger password.' });
        }

        // Check if confirmPassword matches
        if (password !== confirmPassword) {
            return NextResponse.json({ success: false, message: 'Passwords do not match. Please try again.' });
        }

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
            if (error instanceof Error && 'code' in error) {
                let errorMessage = 'An error occurred during signup.';
    
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        errorMessage = 'The email address is already in use by another account.';
                        break;
                    case 'auth/weak-password':
                        errorMessage = 'The password is too weak. Please choose a stronger password.';
                        break;
                    case 'auth/invalid-email':
                        errorMessage = 'The email address is invalid. Please provide a valid email.';
                        break;
                    // Handle other cases as needed
                    default:
                        errorMessage = error.message; // Default to Firebase's error message
                }
    
                return NextResponse.json({ success: false, message: errorMessage });
            } else {
                return NextResponse.json({ success: false, message: 'An unknown error occurred during signup.' });
            }
        }
    } else if (action === 'login') {
        // Only check password length during signup
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
            if (error instanceof Error && 'code' in error) {
                let errorMessage = 'An error occurred during login.';
    
                switch (error.code) {
                    case 'auth/user-not-found':
                        errorMessage = 'No user found with this email address.';
                        break;
                    case 'auth/wrong-password':
                        errorMessage = 'The password is incorrect. Please try again.';
                        break;
                    case 'auth/invalid-email':
                        errorMessage = 'The email address is invalid. Please provide a valid email.';
                        break;
                    case 'auth/invalid-credential':
                        errorMessage = 'Invalid credentials provided. Please check your email and password.';
                        break;
                    // Handle other cases as needed
                    default:
                        errorMessage = error.message; // Default to Firebase's error message
                }
    
                return NextResponse.json({ success: false, message: errorMessage });
            } else {
                return NextResponse.json({ success: false, message: 'An unknown error occurred during login.' });
            }
        }

    } else {
        return NextResponse.json({ success: false, message: 'Invalid action specified.' });
    }
}
