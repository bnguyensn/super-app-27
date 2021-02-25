import * as React from 'react'

const AuthStateContext = React.createContext()
const AuthDispatchContext = React.createContext()

const AuthActions = {
  UPDATE_TOKEN: '@@AUTH/UPDATE_TOKEN'
}

export function updateTokenAction(token) {
  return {
    type: AuthActions.UPDATE_TOKEN,
    payload: token
  }
}

function authReducer(state, action) {
  switch (action.type) {
    case AuthActions.UPDATE_TOKEN: {
      return { token: action.payload }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = React.useReducer(authReducer, { token: '' })

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}

export function useAuthState() {
  const context = React.useContext(AuthStateContext)

  if (context === undefined) {
    throw new Error('useAuthState must be used within an AuthProvider')
  }

  return context
}

export function useAuthDispatch() {
  const context = React.useContext(AuthDispatchContext)

  if (context === undefined) {
    throw new Error('useAuthDispatch must be used within an AuthProvider')
  }

  return context
}