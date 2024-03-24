import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Account from "../../components/Account";
import UserHeader from "../../components/UserHeader";

const User = () => {
    return (
        <>
            <Navbar />
            <main className="main bg-dark">
                <UserHeader />
                <h2 className="sr-only">Accounts</h2>
                <Account
                    type='Argent Bank Checking' 
                    number='x8349'
                    amount='2,082.79'
                 />
                <Account
                    type='Argent Bank Savings' 
                    number='x6712'
                    amount='10,928,42'
                 />
                 <Account
                    type='Argent Bank Credit Card' 
                    number='x8349'
                    amount='184,30'
                 />
            </main>
            <Footer text="Copyright 2020 Argent Bank"/>
        </>
    );
}

export default User;
