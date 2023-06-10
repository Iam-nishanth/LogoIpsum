import { FaTwitter, FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa'
import { Address, Anchor, Container, Copyright, FooterWrapper, Icons, Image, LinkSection, Links, Logo, LogoSection, Para } from "../../styles/FooterStyles"

const Footer = () => {
    return (
        <Container>
            <FooterWrapper>
                <LogoSection>
                    <Logo><Image src="https://websitedemos.net/agency-ai/wp-content/uploads/sites/836/2021/05/logo-black.svg" /></Logo>
                    <Address>
                        <Para>1234 N Spring St, Los Angeles, CA 90012</Para>
                        <Anchor>mail@example.com</Anchor>
                    </Address>
                </LogoSection>
                <LinkSection>
                    <Links>
                        <Anchor>Home</Anchor>
                        <Anchor>Services</Anchor>
                        <Anchor>About</Anchor>
                        <Anchor>Contact</Anchor>
                    </Links>
                    <Icons>
                        <FaTwitter />
                        <FaYoutube />
                        <FaFacebook />
                        <FaInstagram />
                    </Icons>
                </LinkSection>
            </FooterWrapper>
            <Copyright>
                <p>Copyright © 2023 Digital Agency | Powered by Digital Agency</p>
            </Copyright>
        </Container>
    )
}


export default Footer