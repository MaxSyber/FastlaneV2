export const provider = (state = {}, action) => {
	switch (action.type) {
		case 'PROVIDER_LOADED':
		return {
			...state, 
			connection: action.connection
		}

		case 'NETWORK_LOADED':
		return {
			...state, 
			chainId: action.chainId
		}

		case 'ACCOUNT_LOADED':
		return {
			...state, 
			account: action.account
		}
	default:
		return state
	}
}
const DEFAULT_FASTLANE_STATE = {
	loaded:false, 
	contract: {},
	segmentOwners:[],
	userBalance: [],
	events: [] 
}

export const fastlane = (state = DEFAULT_FASTLANE_STATE, action) => {

	switch (action.type) {

		case 'FASTLANE_LOADING':
	      	return {
	        ...state,
	        loading: true,
      		}

		case 'FASTLANE_LOADED':
			return {
				...state,
				loading: false,
				contract: action.fastlane
			}

		case 'SEGMENT_OWNERS_LOADED':
			return {
				...state,
				loading: false,
				segmentOwners: action.segmentOwners
			}
		case 'USER_BALANCE_LOADED':
			return {
				...state,
				loading: false,
				userBalance: action.userBalance
			}
		default:
			return state
	}
}
