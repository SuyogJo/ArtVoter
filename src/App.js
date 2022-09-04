import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Button } from "@web3uikit/core";
import { IPFSInput, ConnectButton } from "@web3uikit/web3";
import ArtPieces from "./components/ArtPieces.js"


const App = () => {
  
  const [Art1, setArt1] = useState(50);
  const [Art2, setArt2] = useState(50);
  const [Art3, setArt3] = useState(50);
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
          <div className='list'> 
            <ArtPieces percent={Art1} setPercent={setArt1} art={"Art 1"}/>
            <ArtPieces percent={Art2} setPercent={setArt2} art={"Art 2"}/>
            <ArtPieces percent={Art3} setPercent={setArt3} art={"Art 3"}/>
          </div> 
      </div>


    </>
  )
}

export default App;
