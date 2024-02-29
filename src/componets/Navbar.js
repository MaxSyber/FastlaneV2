import { useSelector, useDispatch } from 'react-redux'
import { loadAccount } from '../store/interactions'
//mport config from '../config.json'


const Navbar = () => {
	const provider = useSelector(state => state.provider.connection)
	const chainId = useSelector(state => state.provider.chainId)
	const account = useSelector(state => state.provider.account)
	const dispatch = useDispatch()


	const networks = {
                "13881": { // Matic Testnet
                    chainId: "0x13881",
                    chainName: "Mumbai",
                    nativeCurrency: {
                        name: "MATIC",
                        symbol: "MATIC",
                        decimals: 18
                    },
                    rpcUrls: ["https://rpc-mumbai.maticvigil.com"],
                    blockExplorerUrls: ["https://mumbai.polygonscan.com"]
                },
                "704": { // Linea Testnet
                    chainId: "0xe704",
                    chainName: "Linea Testnet",
                    nativeCurrency: {
                        name: "ETH",
                        symbol: "ETH",
                        decimals: 18
                    },
                    rpcUrls: ["https://linea-goerli.blockpi.network/v1/rpc/public"],
                    blockExplorerUrls: ["https://goerli.lineascan.build"]
                },
                "5aff": { // oasis Testnet
                    chainId: "0x5aff",
                    chainName: "Oasis Sapphire Testnet",
                    nativeCurrency: {
                        name: "TEST",
                        symbol: "TEST",
                        decimals: 18
                    },
                    rpcUrls: ["https://testnet.sapphire.oasis.dev"],
                    blockExplorerUrls: ["https://testnet.explorer.sapphire.oasis.dev"]
                },
                "66eee": { // arbitrium Testnet
                    chainId: "0x66eee",
                    chainName: "Arbitrum Sepolia",
                    nativeCurrency: {
                        name: "ETH",
                        symbol: "ETH",
                        decimals: 18
                    },
                    rpcUrls: ["https://arbitrum-sepolia.blockpi.network/v1/rpc/public"],
                    blockExplorerUrls: ["https://sepolia-explorer.arbitrum.io"]
                }
    }

	const connectHandler = async () => {
			await loadAccount(provider, dispatch)
		} 

		const networkHandler = async (chainId) => {
		    try {
		        await window.ethereum.request({
		            method: 'wallet_switchEthereumChain',
		            params: [{ chainId: `0x${chainId}` }]
		        });
		    } catch (error) {
		        if (error.code === 4902) {
		            const network = networks[chainId];
		            if (network) {
		                    await window.ethereum.request({
		                        method: 'wallet_addEthereumChain',
		                        params: [network]
		                    });
		                    await networkHandler(chainId);
		                
		            } else {
		                console.error('Network information not found.');
		            }
		        } else {
		    }
    }
};

	return(
		<div className=''>
			<div className=''>
				<h1 className='title'> FASTLANE </h1>
			</div>
			<div className='network'>  Choose Network:
            
          	</div>
		{chainId && (
			<div>
				<button onClick={() => networkHandler(13881)}> Matic </button>
        		<button value ="704" onClick={() => networkHandler(704)}> Linea </button>
        		<button value ="5aff" onClick={() => networkHandler('5aff')}> Oasis </button>
        		<button value ="66eee" onClick={() => networkHandler('66eee')}> Arbitrium </button>
        	</div>
        	)}
		 		<div>
		 			{account ? (
		 				<button className='account'>
		 					{account.slice(0,5) +'...' + account.slice(38,42)}
		 				</button>
		 			) : (
		 				<button className='connect' onClick={connectHandler}>Connect</button>
		 			)}
		 		</div>	 		
		</div>
	)
}
export default Navbar;
