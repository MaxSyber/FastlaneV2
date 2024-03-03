import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import config from '../config.json'
import Landpage from '../assets/Landpage.png'
//<Testing />


import { loadProvider, loadNetwork, loadAccount, loadFastlane, loadObstacles } from '../store/interactions.js';
import Navbar from './Navbar.js'
import Testing from './Testing.js'

function App() {
  const dispatch = useDispatch()
  const loadBlockchainData = async () => {
  
  const provider = loadProvider(dispatch)
  const chainId = await loadNetwork(provider, dispatch)

  const fastlane = await loadFastlane(provider, config[chainId].fastlane.address, dispatch)

  const obstacles = await loadObstacles(provider, config[chainId].obstacles.address, dispatch)


  //reloads appliaction on network change
  window.ethereum.on('chainChanged', () =>{
        window.location.reload()
     })
  //  account will update onchange of private keys
  window.ethereum.on('accountsChanged', () => {
    loadAccount(provider, dispatch)
  }, [])
  
}

  useEffect(() => {
    loadBlockchainData()
  })
  
  return (
    
    <>
      <img src= {Landpage} className='background' alt='fastlane'/>
      <Navbar />
      <Testing />
    </>
  );
}

export default App;
