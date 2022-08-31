import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Button } from "@web3uikit/core";
import { IPFSInput, ConnectButton } from "@web3uikit/web3";
import ArtPieces from "./components/ArtPieces.js"


const App = () => {
  
  const [Art1, setArt1] = useState(50);
  return (
    <>
      <div className='App-background'>
        <div className='App-header'>
          <div className='App-logo'>
            <img src={logo} alt="logo"/>
            ArtVoter
          </div>
          <ConnectButton theme="primary" type="button" text="Connect Wallet" />
        </div>
        <div className='title-screen'>Please vote on your favorite art</div>
        <ArtPieces>
        percent={Art1}
        setPercent={setArt1}
        art={"Art1"}
      </ArtPieces>
      </div>

      
    </>
  )
}

export default App;
