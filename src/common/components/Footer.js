import styled from "styled-components";

const Footer = () => {
    return (
        <FooterText>
            <p>อ.ดร.พิมพ์ใจ อุ่นบ้าน ร่วมกับ<br />นักศึกษาพยาบาลศาสตร์บัณฑิต ชั้นปีที่ 4 รุ่นที่ 22</p>
            <p>© Lettuce Dog, 2022 All rights reserved.</p>
        </FooterText>
    );
}

const FooterText = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        color: var(--button-color);
        font-size: 10px;
    }

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
    }
`;

export default Footer;