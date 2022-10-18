
export const initialState = {
    status: 'checking', // 'authenticated', 'not-authenticated'
    user: {},
    errorMessage: undefined,
}

export const authenticatedState = {
    status: 'authenticated', 
    user: {
        uid: 'ABC',
        name: 'test'
    },
    errorMessage: undefined,
}

export const notAuthenticatedState = {
    status: 'not-authenticated', 
    user: {},
    errorMessage: undefined,
}

