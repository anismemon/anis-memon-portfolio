import React, { useReducer, createContext } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'

// initialState contains the (initial) default values of the eventual globalState (= store)

const initialState = { lang: 'EN', modalOpen: false}

// store is the state context which can be accessed by all components

const store = createContext(initialState)
const { Provider } = store

// this is the component that houses the state mechanism (state (i.e. store) + functions to update state)

const StateProvider = ({ children }) => {

  console.log(initialState)
  console.log(store)

  // functions to update state

  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'changeToFrench':
        return { ...state, lang: 'FR' };
      case 'changeToItalian':
        return { ...state, lang: 'IT' };
      case 'changeToEnglish':
        return { ...state, lang: 'EN'};
      case 'openModal':
        return { ...state, modalOpen: !state.modalOpen };
      default:
        throw new Error();
    };
  }, initialState)

  console.log(state)

  return(
    <Provider value={{ state, dispatch }}>
      {children}
    </Provider>
  )
}

export { store, StateProvider }
