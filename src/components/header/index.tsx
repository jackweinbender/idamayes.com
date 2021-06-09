import React, { FC, useState } from "react"
import { URL } from "url"
import styled from "styled-components"
import { lighten } from "polished"
import { Link } from "gatsby"
import IMFImg from "../../images/ida-mayes-logo-black.png"
import { NavLink, navLinks } from "./links"
import { colors, mediaQueries } from "../../styles"

const MenuLink = styled(Link)`
  display: grid;
  padding: 0.75em;
  color: ${colors.gray};
  text-decoration: none;
  text-transform: uppercase;
  font-family: var(--heading-font);
  font-size: 1.6rem;
  letter-spacing: 2.5px;

  @media ${mediaQueries.desktop} {
    font-size: 1.2rem;
    padding-block: 0;
    margin-block: 1rem;
  }
`
const Close = styled.button`
  position: absolute;
  cursor: pointer;
  right: 1rem;
  top: 1.5rem;
  border: none;
  background: none;
  font-family: var(--heading-font);
  font-size: 2.5rem;
  color: ${colors.gray};

  @media ${mediaQueries.desktop} {
    display: none;
  }
`

const Nav = styled.nav<{ isOpen: boolean }>`
  background-color: ${colors.taupe};
  @media ${mediaQueries.mobile} {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    transform: translateX(-100%);
    opacity: 0;
    transition: transform 0.75s cubic-bezier(0.57, 0.4, 0, 0.99),
      opacity 0.25s ease-in;
    padding-block-start: 2em;
    ${({ isOpen }) =>
      isOpen
        ? `
    transform: translateX(0);
    opacity: 1;
    `
        : null}
  }
  @media ${mediaQueries.desktop} {
    position: static;
    display: flex;
    align-items: center;
    justify-content: end;
    font-size: 1.2em;
    &:hover a {
      opacity: 0.5;
      transition: opacity 0.25s ease-in;
    }
    &:hover a:hover {
      opacity: 1;
    }
  }
`

const LinkList = styled.div`
  margin-inline: 2rem;
  display: grid;
  align-content: start;
  transition: opacity 0.25s ease-in;

  @media ${mediaQueries.desktop} {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    margin: 0;
  }
`

const Wrapper = styled.header`
  padding-inline: 1em;
  padding-block: 0.5em;
  background-color: var(--taupe);
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  @media ${mediaQueries.desktop} {
    height: 18rem;
    padding-inline: 4rem;
  }
`

const Logo = styled.img`
  height: 65px;
  width: auto;
  @media ${mediaQueries.desktop} {
    height: 13rem;
  }
`

const Hamburger = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  justify-self: end;
  align-self: center;
  width: 50px;
  height: 50px;
  padding: 12px;
  svg {
    width: 100%;
    height: 100%;
  }
  rect {
    fill: ${colors.gray};
    stroke: ${colors.gray};
  }
  @media ${mediaQueries.desktop} {
    display: none;
  }
`

interface Props {
  links: NavLink[]
}

export const Header: FC<Props> = ({ links }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Wrapper>
      <Logo src={IMFImg} />
      <Hamburger onClick={() => setIsOpen(true)}>
        <svg viewBox="0 0 50 50">
          <rect width="60" height="2"></rect>
          <rect y="18" width="60" height="2"></rect>
          <rect y="36" width="60" height="2"></rect>
        </svg>
      </Hamburger>
      <Nav isOpen={isOpen}>
        <Close onClick={() => setIsOpen(false)}>✕</Close>
        <LinkList>
          {links.map(({ title, href }) => {
            return (
              <MenuLink
                to={href}
                onClick={() => setIsOpen(false)}
                key={title.toLowerCase()}
                data-tesid={`nav-${title.toLowerCase()}`}
              >
                {title}
              </MenuLink>
            )
          })}
        </LinkList>
      </Nav>
    </Wrapper>
  )
}
