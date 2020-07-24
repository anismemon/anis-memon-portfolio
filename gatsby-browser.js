/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// wraps the state component (StateProvider) around everything in the app, allowing all components to access state

import React from "react"
import { StateProvider } from "./src/components/store"

export const wrapRootElement = ({ element }) => (
  <StateProvider>{element}</StateProvider>
)
