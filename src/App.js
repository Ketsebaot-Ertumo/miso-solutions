// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { ProSidebarProvider } from 'react-pro-sidebar';
// import About from './pages/About';
// import Contact from './pages/Contact';
  
  
  
  
  
  
const App = () => {
    return (
      <>
          <ToastContainer />
          {/* <Provider store={store}> */}
            <ProSidebarProvider>
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={<Home />} />
                  {/* <Route path='/about' element={<About />} />
                  <Route path='/Contact-us' element={<Contact />} /> */}
                </Routes>
              </BrowserRouter>
            </ProSidebarProvider>
          {/* </Provider> */}
          
      </>
    );
  }
  
  export default App;
  

