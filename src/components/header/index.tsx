import React, { FC, useState } from "react"
import { URL } from "url"
import styled from "styled-components"
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
  letter-spacing: 2.5px;
`
const Close = styled.button`
  position: absolute;
  cursor: pointer;
  right: 1em;
  top: 1em;
  border: none;
  background: none;
  font-family: var(--heading-font);
  font-size: 1.25em;
  color: ${colors.gray};

  @media ${mediaQueries.desktop} {
    display: none;
  }
`

const Nav = styled.nav<{ isOpen: boolean }>`
  background-color: rgb(250, 250, 250);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  opacity: 0;
  transition: transform 0.5s cubic-bezier(0.7, -0.2, 0.33, 1.24),
    opacity 0.35s ease-in-out;
  padding-block-start: 2em;
  ${({ isOpen }) =>
    isOpen
      ? `
    transform: translateX(0);
    opacity: 1;'
    `
      : null}
`

const LinkList = styled.div`
  padding-inline: 2rem;
  display: grid;
  align-content: start;
  transition: opacity 0.5s ease-in-out;
`

const Wrapper = styled.header`
  padding-inline: 1em;
  padding-block: 0.5em;
  background-color: var(--taupe);
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Logo = styled.img`
  height: 65px;
  width: auto;
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
