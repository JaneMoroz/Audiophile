import React from 'react'
import { Link } from 'react-router-dom'

// Styled components
import { Container } from '../../styles/LayoutStyles'
import { IconButton } from '../../styles/ButtonStyles'
import { Navigation, NavigationLinks } from '../../styles/NavbarStyles'

// Icons
import Logo from '../../assets/logo'
import { CartIcon, HamburgerIcon } from '../../assets/icons/icons'

const Navbar = () => {
  return (
    <header>
      <Container>
        <Navigation>
          <IconButton type="button" aria-label="navigation">
            <HamburgerIcon aria-hidden="true" />
          </IconButton>
          <Link to="/" aria-label="audiophile home page">
            <Logo />
          </Link>
          <NavigationLinks>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Headphones</Link>
            </li>
            <li>
              <Link to="/">Speakers</Link>
            </li>
            <li>
              <Link to="/">Earphones</Link>
            </li>
          </NavigationLinks>
          <IconButton type="button" aria-label="cart">
            <CartIcon aria-hidden="true" />
          </IconButton>
        </Navigation>
      </Container>
    </header>
  )
}

export default Navbar
