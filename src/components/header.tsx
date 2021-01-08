import React, { ReactElement } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import IMFImg from "../images/ida-mayes-logo-black.png"

const Wrapper = styled.header`
  padding-inline: 2rem;
  background-color: var(--taupe);

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > a {
    flex: 1 1 20%;
    min-width: 150px;
    max-height: 200px;
    display: flex;
    align-items: center;
  }
`
const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  flex: 1 2 auto;
  align-items: center;
  justify-content: end;
  gap: 0.25rem 1.5rem;
  margin-inline: 2rem;
  &:hover a {
    color: var(--dark-text-hover);
  }

  a {
    transition: color 0.25s;
    transition-timing-function: ease-in-out;
    color: var(--dark-text);
    font-family: var(--heading-font);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.9rem;

    &:hover {
      color: var(--dark-text);
    }
  }
`
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block: 0.25rem;
  gap: 1.5rem;
`
const Logo = styled.img``
const MenuLink = styled(Link)``

interface Props {}

function Header({}: Props): ReactElement {
  return (
    <Wrapper>
      <Link to="/" data-tesid="nav-home">
        <Logo src={IMFImg} />
      </Link>
      <Nav>
        <Row>
          <MenuLink to="/" data-tesid="nav-home">
            home
          </MenuLink>
          <MenuLink to="/about-ida-mayes" data-tesid="nav-about">
            About
          </MenuLink>
          <MenuLink to="/portfolio" data-testid="nav-portfolio">
            Design
          </MenuLink>
          <MenuLink to="/when-where" data-testid="nav-when-where">
            Pricing
          </MenuLink>
        </Row>
        <Row>
          <MenuLink to="/blog" data-testid="nav-blog">
            Blog
          </MenuLink>
          <MenuLink to="/rentals" data-testid="nav-rentals">
            Rentals
          </MenuLink>
          <MenuLink to="/rsvp" data-testid="nav-rsvp">
            Contact
          </MenuLink>
        </Row>
      </Nav>
    </Wrapper>
  )
}

export { Header }
