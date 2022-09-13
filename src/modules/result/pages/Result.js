import { Link } from "react-router-dom";
import { Container, Header, Circle, Content, Button, Detail, Instruction, Caption } from "./Result.styled";

const Result = () => {
    const linkStyle = {
        textDecoration: "none",
      };
    return (
        <Container>
            <Header>
                <h2>Diabetes and blood pressure Checker</h2>
                <h3>ผลการตรวจสอบ</h3>
            </Header>
            <Content>
                <center><Circle /></center>
                <center><h3>กลุ่มปกติ (สีขาว)</h3></center>
            </Content>

            <Detail>
                        <p><span className="blue">ค่าน้ำตาลในเลือด</span> (FBS) 100-125 mg/dl <br />
                        <span className="blue">ค่าความดันโลหิต </span>(BP) 120/80 - 139/89 mmHg</p>
            </Detail>

            <Instruction>
                <p>
                    <span className="h4">คำแนะนำ</span><br />
                    1.แนะนำให้ปฏิบัติตัวตามหลัก 3อ 2ส
                    อ.อาหาร : รับประทานอาหารให้ครบ 5 หมู่ หลีกเลี่ยงการรับประทานอาหารที่มีรสหวาน  มัน เค็ม มากเกินไป
                    ออกกำลังกาย : เคลื่อนไหวร่างกายและออกกำลังกายเป็นประจำอย่างน้อยสัปดาห์ละ 3 ครั้ง ครั้งละ 30 นาที 
                    อารมณ์ :มีการจัดการกับอารมณ์ ฝึกสมาธิและผ่อนคลายความเครียด เช่น ฟังเพลง ทำงานอดิเรก พบปะเพื่อน
                    ส.ไม่สูบบุหรี่ :ให้ลด ละ เลิกบุหรี่เพราะเป็นอันตรายต่อตนเองและผู้คนรอบข้าง
                    ส.ไม่ดื่มสุราและเครื่องดื่มที่มีแอลกอฮอล์
                    2.ตรวจวัดความดันโลหิตและระดับน้ำตาลในเลือดซ้ำทุก1ปี
                </p>
            </Instruction>
            <Link to='/' style={linkStyle}><Button>กลับหน้าหลัก</Button></Link>

            <Caption>© 2022 All rights reserved.</Caption>
        </Container>
    );
}

export default Result;