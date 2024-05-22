import { useState } from 'react';
import { NavBar } from './components/NavBar.tsx'
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import  Product  from './components/Product/Product.tsx';
import Client from './components/Client/Client.tsx';
import  Order  from './components/Order/Order.tsx';

export enum ActiveWindow {
  Clients,
  Products,
  Orders
}

function App() {
  const [activeWindow,setActiveWindow] = useState(ActiveWindow.Clients);

  return (
    <main>
      <SignedIn>
        <NavBar  SetActiveWindow={setActiveWindow} ActiveWindows={activeWindow}/>
        {
          activeWindow === ActiveWindow.Clients && <Client/>
        }
        {
          activeWindow === ActiveWindow.Products && <Product/>
        }
        {
          activeWindow === ActiveWindow.Orders && <Order/>
        }
      </SignedIn>
      <SignedOut>
      <article className='flex align-middle items-center justify-center h-svh w-svw bg-gray-50'>
          <div className=' text-lg mx-20'>
            <h1 className=' font-extrabold text-8xl my-5'> Welcome to <br /> Fast Food </h1>
            <h2 className=' text-3xl'> Buy Dinners, Share Moments</h2>
            <button className='w-52 h-10 bg-orange-500 my-5 text-white font-extrabold rounded-md'>
               <SignInButton  />
            </button>
          </div>
          <img src="https://utfs.io/f/7dfa226a-5198-4cec-965b-a57a2bc5e1ae-1nq2cb.jpeg" className='w-72 h-72 object-cover rounded-md' alt="" />
        </article>
      </SignedOut>
    </main>
  )
}

export default App
