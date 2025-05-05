import React from "react";
import styled from "styled-components";
const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #f47521 0%, #e50914 100%);
  padding: 1rem 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  
  span {
    font-weight: 300;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  position: relative;
  
  &:hover {
    opacity: 0.8;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SearchButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
`;



export const Cabecalho = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>Catálogo<span>Filmes</span></Logo>

        <Nav>
          <NavLink href="/">Início</NavLink>
          <NavLink href="/generos">Gêneros</NavLink>
        </Nav>

        <UserSection>
          <SearchButton >
            <i className="fas fa-search"></i>
          </SearchButton>
          
        </UserSection>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Cabecalho;