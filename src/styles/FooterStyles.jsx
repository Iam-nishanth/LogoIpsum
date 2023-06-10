import styled from "styled-components"

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 350px;

    *{
        color: #2c2927;

    }
    @media (max-width: 1200px){
        padding: 0 50px;
    }
    
`
export const FooterWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    padding-top: 50px;
    @media (max-width: 750px){
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 30px;
        }
`
export const LogoSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    @media (max-width: 750px){
        align-items: center;
    }
`
export const LinkSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: end;
    @media (max-width: 750px){
        align-items: center;
    }
`
export const Logo = styled.div`

`
export const Address = styled.div`
    font-weight: 800;
    font-size: 16px;
@media (max-width: 750px){
        align-items: center;
        text-align: center;
    }
`
export const Links = styled.div`
    display: flex;
    gap: 40px;
    @media (max-width: 360px){
        align-items: center;
        flex-direction: column;
        gap: 20px;
    }
    
`
export const Icons = styled.div`
    display: flex;
    gap: 20px;
    svg{
        font-size: 25px;
    }
    

`
export const Anchor = styled.a``
export const Para = styled.p``
export const Image = styled.img``
export const Copyright = styled.div`
    display: flex;
    justify-self: flex-end;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    width: 100%;
    min-height: 70px;
    @media (max-width: 750px){
        text-align: center;
    }
`