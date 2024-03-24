import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import "./style.css"


export default function NotFound () {
    return(
       <> 
          <Navbar />
          <main className="main bg-dark">
            <div className="notfound">
                <h1>404</h1>
                <p>This page doesn't exist.</p>
            </div>
            
          </main>
          <Footer 
          text="Copyright 2020 Argent Bank"
          />
       </>
    );
}
