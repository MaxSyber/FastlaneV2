import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import config from '../config.json'

import { loadProvider, loadNetwork, loadAccount, loadFastlane, loadObstacles } from '../store/interactions';
import Navbar from './Navbar'
import Testing from './Testing'

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
    <div className="App">
      <header className="App-header">
          
      </header>
      <Navbar />

      <Testing />
    </div>
  );
}

export default App;
