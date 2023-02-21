import {useEffect} from 'react';
import './App.css';

function App() {

 useEffect(()=>{
  const loadProvider = async() => {
    console.log(window.web3);
    console.log(window.ethereum);
  };
 },[]); 
  return (
    <>
    <div class="card text-centre">
      <div class="card-header">Funding</div>
      <div class="card-body">
        <h5 class="card-title">Balance: 20 ETH </h5>
        <p class="card-text">Account: 0x00000000</p>
        <button type="button" class="btn btn-success">
          Connect to Metamask
        </button>
        <button type="button" class ="btn btn-success">
          Transfer
        </button>
        
        <button type="button" class="btn btn-primary">
          Withdraw
        </button>
      </div>
      <div class="card-footer text-muted">Pankaj seervi</div>
  </div>
    </>
  );
}

export default App;
