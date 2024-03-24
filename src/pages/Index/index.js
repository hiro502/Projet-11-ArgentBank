import Navbar from "../../components/Navbar";
import FeatureItem from "../../components/FeatureItem";
import Footer from "../../components/Footer";

import iconChat from "../../img/icon-chat.png";
import iconMoney from "../../img/icon-money.png";
import iconSecurity from "../../img/icon-security.png";

import "./style.css";

const Index = () => {

const titleChat = "You are our #1 priority";
const titleMoney = "More savings means higher rates";
const titleSecurity = "Security you can trust" ;

const textChat = "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.";
const textMoney = "The more you save with us, the higher your interest rate will be!";
const textSecurity = "We use top of the line encryption to make sure your data and money is always safe.";
    
    return(
        <>
        <Navbar />
      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <FeatureItem 
           imageUrl={iconChat}
           title={titleChat}
           text={textChat}
           />
          <FeatureItem 
           imageUrl={iconMoney}
           title={titleMoney}
           text={textMoney}
           />
           <FeatureItem 
           imageUrl={iconSecurity}
           title={titleSecurity}
           text={textSecurity}
           />
        </section>
      </main>
      <Footer 
      text="Copyright 2020 Argent Bank"
      />

    </>
    
    
        );



}


export default Index;