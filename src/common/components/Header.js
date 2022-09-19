import styled from "styled-components";

const Header = () => {
    return (
        <HeaderText>
            <h2>BCNC fights with NCD's</h2>
        </HeaderText>
    );
}

const HeaderText = styled.div`
    h2 {
        color: var(--primary-color);
        font-weight: 500;
        margin-bottom: 12px;
        font-size: 32px;
    }
    
`;

export default Header;