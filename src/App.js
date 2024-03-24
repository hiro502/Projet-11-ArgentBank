import {HashRouter, Routes, Route } from "react-router-dom";
import Index from './pages/Index';
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import NotFound from "./pages/NotFound";





function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/'         element={<Index />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/user'    element={<User />} />
        <Route path='*'    element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
