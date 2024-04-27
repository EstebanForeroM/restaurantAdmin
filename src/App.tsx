import { useState } from 'react';
import { NavBar } from './components/NavBar.tsx'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
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
    <>
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
        <SignInButton />
      </SignedOut>
    </>
  )
}

export default App