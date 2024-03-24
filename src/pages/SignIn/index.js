import Navbar from "../../components/Navbar";
import SignInForm from "../../components/SignInForm";
import Footer from "../../components/Footer";

const SignIn = () => {
    return (
        <>
            <Navbar />
            <main className="main bg-dark">
                <SignInForm />
            </main>
            <Footer 
                text="Copyright 2020 Argent Bank"
            />
        </>
    );
}

export default SignIn;
