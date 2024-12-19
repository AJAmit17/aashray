import { ClerkLoaded, SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
    return (
        <>
            <ClerkLoaded>
                <SignUp />
            </ClerkLoaded>
        </>
    );
}