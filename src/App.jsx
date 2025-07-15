import Home from "./Components/Home";
import About from "./Components/About";
import FAQ from "./Components/FAQ";
import Contact_us from "./Components/Contact_us";
import Login from "./Components/Login";
import Register from './Components/Register'
import Start from './Components/Start'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import BusyLoader from "./Components/BusyLoader";



const createRoute = createBrowserRouter([
  
  {path: '', element: < Home />},
  { path: "/about", element: <About />},
  {path: "/contact_us",element: <Contact_us />},
   {path: "/faq", element: <FAQ />},
  {path: '/login', element: <Login/>},
  {path:'/register', element: <Register/>},
  {path:'/start', element: <Start/>}
  // {
    
  //   element: <LayOut/>,
  //   path: "/",
  //   children:[
  //   {path: '', element: <Home />},

  // { path: "/about", element: <About />,
  // },
  // {path: "/contact_us",element: <Contact_us />,
  // },
  // {path: "/faq", element: <FAQ />},
  //   ] 
  // },
  
]);
export default function App() {
// toggle theme


  const [busyLoader, setBusyLoader] = useState(true);
  useEffect(() => {
    // set time out
    const time_out = setTimeout(() => {
      setBusyLoader(false);
    }, 2000); // load for 3 second
    return () => clearTimeout(time_out);
  }, []);
  if (busyLoader) {
    return <BusyLoader />;
  }

  return <RouterProvider router={createRoute} />;
}

// return (

//  <RouterProvider router={router}/>
// <main className="overflow-hidden font-inter    ">
//   <Header/>
//   <section className=" min-h-screen bg-hero-bg  w-width-1440 h-height-729 top-top-90 items-center flex  ">

//   </section>
//   {/* hero footer */}
//   <div className="bg-primary flex flex-col justify-between items-center w-width-1440 h-[70px]    overflow-hidden">
//   <AutoPlayRider/>
//   </div>

//     {/* CTA content goes here */}
//     <section className="  flex justify-center items-center w-width-1440 h-636 top-908 left--1px bg-white">
//      <CTA/>
//     </section>
//     <section className="">
//       <Testimonial/>

//     </section>
//     <section className="px-4 sm:px-6 bg-center  justify-center flex items-center bg-footer-hero-bg relative w-full h-screen bg-cover">
//       <GetStart/>
//     </section>
//     <section className="bg-sea-blue md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1  py-12 px-6 flex flex-col items-center text-center">
//       <About/>
//     </section>
//     <section className="w-full max-w-[872px] mx-auto flex flex-col px-4 sm:px-6 md:px-8 lg:px-10 py-6">
//       <FAQ/>
//     </section>

//     <section className="min-h-screen md:max-w-full sm:max-w-full flex mt-0   items-center justify-center px-4 py-10 bg-white">
//       <Contact_us  />
//      </section>
//     <Footer/>
// </main>

//   )
// }

// // export default App
