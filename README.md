
const networkHandler = async (chainId) => {
    try {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: `0x${chainId}` }]
        });
Advise from UX guy:
   segment counter ex 5/8
   see where I died before (palworld death beam)

check out wagmi  
create simple road segment NFT (token Id, owner)
create favicon

https://github.com/MaxSyber/Fastlane.git  github link



mint trackID, owner
addsSegmentOwner()


@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap');

<button onClick={() => networkHandler(13881)} className='network-icons'> Matic </button>
                <button value ="704" onClick={() => networkHandler(704)} className='network-icons'> Linea </button>
                <button value ="5aff" onClick={() => networkHandler('5aff')} className='network-icons'> Oasis </button>
                <button value ="66eee" onClick={() => networkHandler('66eee')} className='network-icons'> Arbitrium </button>

                background: radial-gradient(50% 50% at 50% 50%, #09D93D 0%, rgba(76, 175, 80, 0.95) 100%);