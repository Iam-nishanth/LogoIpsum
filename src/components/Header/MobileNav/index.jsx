import { Close, Container, Icon, MobileMenu, NLink, NavButton, SocialMenu, Wrapper } from '../../../styles/MobileNav'

// eslint-disable-next-line react/prop-types
const MobileNav = ({ isOpen, toggle }) =>
  <Container isOpen={isOpen} onClick={toggle}>
    <Icon onClick={toggle}>
      <Close />
    </Icon>
    <Wrapper>
      <MobileMenu>
        <NLink onClick={toggle}>HOME</NLink>
        <NLink onClick={toggle}>SERVICES</NLink>
        <NLink onClick={toggle}>ABOUT</NLink>
        <NLink onClick={toggle}>CONTACT</NLink>
      </MobileMenu>
      <SocialMenu>
        <NavButton>GET QUOTE</NavButton>
      </SocialMenu>
    </Wrapper>
  </Container>


export default MobileNav