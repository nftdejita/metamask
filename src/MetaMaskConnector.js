import React,{ useState } from 'react'
import Web3 from 'web3'

function MetaMaskConnector() {
  const [account, setAccount] = useState(null);
  
  async function connectMetaMask() {
    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum)
        await window.ethereum.request({ method:'eth_requestAccounts'})
        const accounts = await web3.eth.getAccounts()
        setAccount(accounts[0])
      } catch(error){
        console.error('Error connecting to MetaMask',error)
      } 
    } else {
      console.error('MetaMask not found. Please install')
    }
  }
  
  return (
    <div>
      {account ? (
        <p>Connected to MetaMask, account: {account}</p>
      ) : (
        <button onClick={connectMetaMask}>Connect to Metamask</button>
      )}
    </div>
  )
}

export default MetaMaskConnector