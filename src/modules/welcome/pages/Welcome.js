import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Button } from "../../../common/components/Button";
import Header from "../../../common/components/Header";
import Footer from "../../../common/components/Footer";

const Welcome = () => {
  const navigate = useNavigate();

  function handleStartButtonClick(e) {
    e.preventDefault();

    window.scrollTo(0,0);
    navigate("/input", { replace: false });
  }

  return (
    <Container>
      <Header />
      <h3>คัดกรองโรคเบาหวานและความดันโลหิตด้วยปิงปอง 7 สี</h3>
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
      <Footer />
    </Container>
  );
}

const Container =  styled.div`
    display: flex;
    flex-direction: column;
    left: 50%;
    position: absolute;
    transform: translate(-50%, 0%);
    width: 70vh;
    padding: 10px;
    @media screen and (max-width: 768px) {
        width: 80vw;
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

export default Welcome;