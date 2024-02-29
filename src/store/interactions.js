import { ethers } from 'ethers';
import FASTLANE_ABI from '../abis/Fastlane.json'

export const loadProvider = (dispatch) => {
	const connection = new ethers.providers.Web3Provider(window.ethereum)
	dispatch({ type: 'PROVIDER_LOADED', connection })

	return connection
}

export const loadNetwork = async (provider, dispatch) => {
	const {chainId} = await provider.getNetwork()
	dispatch({ type: 'NETWORK_LOADED', chainId })

	return chainId
}

export const loadAccount = async (provider, dispatch) => {
	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    const account = ethers.utils.getAddress(accounts[0])

    dispatch({ type: 'ACCOUNT_LOADED', account })

    return account
}

export const loadFastlane = async (provider, address, dispatch) => {
const fastlane = new ethers.Contract(address, FASTLANE_ABI, provider)
		dispatch({ type: 'FASTLANE_LOADING', fastlane })

		const segmentOwners = (await fastlane.getSegmentOwners()).toString()
		dispatch({ type: 'SEGMENT_OWNERS_LOADED', segmentOwners})

		const userBalance = (await fastlane.balanceOf("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")).toString()
		dispatch({ type: 'USER_BALANCE_LOADED', userBalance})

		dispatch ({ type: 'FASTLANE_LOADED', fastlane })
		return fastlane

	return fastlane
}
