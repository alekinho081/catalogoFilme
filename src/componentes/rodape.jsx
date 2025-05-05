import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 3rem 2rem 2rem;
  margin-top: 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const FooterColumn = styled.div`
  h3 {
    color: #f47521;
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const FooterLink = styled.a`
  color: #cccccc;
  text-decoration: none;
  display: block;
  margin-bottom: 0.8rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #f47521;
    padding-left: 5px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  
  a {
    color: #ffffff;
    font-size: 1.5rem;
    transition: all 0.3s ease;
    
    &:hover {
      color: #f47521;
      transform: translateY(-3px);
    }
  }
`;

const Copyright = styled.div`
  max-width: 1200px;
  margin: 3rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid #333333;
  text-align: center;
  color: #888888;
  font-size: 0.9rem;
`;

export const Rodape = () => {
    return (
        <FooterContainer>
          <FooterContent>
            <FooterColumn>
              <h3>Navegação</h3>
              <FooterLink href="/">Início</FooterLink>
              <FooterLink href="/filmes">Filmes</FooterLink>
            </FooterColumn>
            
            <FooterColumn>
              <h3>Informações</h3>
              <FooterLink href="#">Sobre Nós</FooterLink>
              <FooterLink href="#">Contato</FooterLink>
              <FooterLink href="#">Termos de Serviço</FooterLink>
              <FooterLink href="#">Política de Privacidade</FooterLink>
              <FooterLink href="#">FAQ</FooterLink>
            </FooterColumn>
            
          
            
            <FooterColumn>
              <h3>Redes Sociais - Alex</h3>
              <SocialIcons>
                <a href="https://x.com/alekinho081" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="https://instagram.com/alekinho081" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                
              </SocialIcons>
            </FooterColumn>

            <FooterColumn>
              <h3>Redes Sociais - Gabriel</h3>
              <SocialIcons>
                <a href="https://www.instagram.com/lino.s7/" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              </SocialIcons>
            </FooterColumn>

          </FooterContent>
          
          <Copyright>
            © {new Date().getFullYear()} Catálogo de Filmes. Todos os direitos reservados.
          </Copyright>
        </FooterContainer>
    )
}

export default Rodape;