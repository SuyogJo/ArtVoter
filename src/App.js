import logo from './logo.svg';
import './App.css';
import { Button } from "@web3uikit/core";
import { IPFSInput, ConnectButton } from "@web3uikit/web3";


const App = () => {
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
        <IPFSInput />
      </div>
    </>
  )
}

export default App;
