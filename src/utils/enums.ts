export enum ModalView {}
export enum Langue {
	vietNamese = 0,
	english,
}
export const PATH_REDIRECT = {
	KYC: {
		_: 'kyc',
		SIGN_IN: '/kyc/signIn',
		SIGN_UP: '/kyc/signUp',
	},
	HOME: '/',
	SEARCH: '/search',
	YOUR_LIBRARY: '/yourLibrary',
};
export enum TypeToTry {
	single,
	album,
}
