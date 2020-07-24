/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// wraps the state component (StateProvider) around everything in the app, allowing all components to access state

import React from "react"
import { StateProvider } from "./src/components/store"
// const GlobalContextProvider = require('./src/context/GlobalContextProvider').default;


export const wrapRootElement = ({ element }) => (
  <StateProvider>{element}</StateProvider>
)