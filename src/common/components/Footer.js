import styled from "styled-components";

const Footer = () => {
    return (
        <FooterText>
            © Lettuce Dog, 2022 All rights reserved.
        </FooterText>
    );
}

const FooterText = styled.div`
  color: var(--button-color);
  font-size: 10px;
  text-align: center;
`

export default Footer;