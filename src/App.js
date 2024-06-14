import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Contact from './pages/Contact';
  
  
  
  
  
  
const App = () => {
    return (
      <>
          <ToastContainer />
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={<Home />} />
                  {/* <Route path='/Contact-us' element={<Contact />} />  */}
                </Routes>
              </BrowserRouter>
          
      </>
    );
  }
  
  export default App;
  

