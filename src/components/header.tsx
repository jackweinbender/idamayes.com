import React, { ReactElement } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const IMFImg = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ida-mayes-logo-black.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

const Wrapper = styled.header`
  padding-inline: 2rem 4rem;
  background-color: rgb(248, 244, 241);

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > a {
    flex: 1 1 20%;
  }
`
const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 80%;
  align-items: center;
  justify-content: end;
  gap: 0.25rem 1.5rem;
  &:hover a {
    color: gray;
  }

  a {
    transition: color 0.25s;
    color: rgb(11, 10, 10);
    font-family: sans-serif;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 12px;

    &:hover {
      color: black;
    }
  }
`
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`
const Logo = styled(IMFImg)``
const MenuLink = styled(Link)``

interface Props {}

function Header({}: Props): ReactElement {
  return (
    <Wrapper>
      <Link to="/" data-tesid="nav-home">
        <Logo src="#" />
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
