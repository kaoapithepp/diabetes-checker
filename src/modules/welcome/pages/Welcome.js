import { Link } from "react-router-dom";
import { Container, Header, Content, Button } from "./Welcome.styled";

const Welcome = () => {
  const linkStyle = {
    textDecoration: "none",
  };

  return (
    <Container>
      <Header>
        <h2>Diabetes and blood pressure Checker</h2>
        <h3>คัดกรองโรคเบาหวานและความดันโลหิต ด้วยปิงปอง7สี</h3>
      </Header>
      
      <Content>
        <p>
          จุดประสงค์ <br />
          1.คัดกรองโรคเบาหวานและความดันโลหิตสูงของประชาชนที่มี อายุ  15 ปีขึ้นไป <br />
          2.นำผลคัดกรอง/ข้อมูล จัดกลุ่มและระดับความรุนแรงของโรคด้วย "ปิงปองสีจราจรชีวิต 7 สี"การใช้ "สี" บอกระดับอาการป่วยและการปฏิบัติตัวให้ถูกหลัก3อ2ส 
        </p>

        <img src="/image/TaeAugust11.jpg" alt="Welcome" className="img" />
        <Link to='/input' style={linkStyle}><Button>เริ่มทำแบบทดสอบ</Button></Link>
      </Content>
    </Container>
  );
}

export default Welcome;