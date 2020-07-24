import React, { useContext } from "react"
import { Link } from "gatsby"
import { store } from "./store"

const Header = () => {

  // variables from state

  const globalStore = useContext(store)
  const lang = globalStore.state.lang
  console.log(lang)

  // local variables + translations

  let title = "Welcome"

  if (lang === 'FR') {
    title = "Bienvenue"
  } else if (lang === 'IT') {
    title = 'Benvenuti'
  }

  return (
    <header
      style={{
        background: `#20232a`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          textAlign: `center`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Anis Memon
          </Link>
        </h1>
      </div>
    </header>
  )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }
//
// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
