import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Button } from "../../../common/components/Button";

const Welcome = () => {
  const navigate = useNavigate();

  function handleStartButtonClick(e) {
    e.preventDefault();
    navigate("/input", { replace: false });
  }

  return (
    <Container>
      <Header>
        <h2>Diabetes and blood pressure Checker</h2>
        <h3>คัดกรองโรคเบาหวานและความดันโลหิตด้วยปิงปอง 7 สี</h3>
      </Header>
      <Content>
        <span>จุดประสงค์</span>
        <p>
          1)  คัดกรองโรคเบาหวานและความดันโลหิตสูงของประชาชนที่มีอายุ  15 ปีขึ้นไป <br />
        </p>
        <p>
          2)  นำผลคัดกรอง/ข้อมูล จัดกลุ่มและระดับความรุนแรงของโรคด้วย "ปิงปองสีจราจรชีวิต 7 สี" การใช้สีบอกระดับอาการป่วยและการปฏิบัติตัวให้ถูกหลัก 3อ2ส
        </p>
        <img src="/image/TaeAugust11.jpg" alt="Welcome" className="img" />
        <Button onClick={handleStartButtonClick}>เริ่มทำแบบทดสอบ</Button>
      </Content>
      <Footer>
        © Lettuce Dog, 2022 All rights reserved.
      </Footer>
    </Container>
  );
}

const Container =  styled.div`
    vertical-align: middle;
    margin-left: auto;
    margin-right: auto;
    width: 60vh;
    @media screen and (max-width: 768px) {
        width: 80%  
    }
`;

const Header = styled.div`
    h2 {
        color: var(--primary-color);
        font-weight: 500;
        margin-bottom: 12px;
        font-size: 32px;
    }
    h3 {
        color: var(--button-color);
        font-weight: 500;
    }
`;

const Content = styled.div`
    margin-top: 24px;
    margin-bottom: 24px;
    
    span {
      color: var(--white);
      background-color: var(--button-color);
      padding: 0px 4px;
    }

    p {
      font-weight: 300;
    }

    .img {
        width: 100%;
    }
`;

const Footer = styled.div`
  color: var(--button-color);
  font-size: 12px;
  text-align: center;
`

export default Welcome;