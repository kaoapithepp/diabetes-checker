import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import Header from "../../../common/components/Header"
import Footer from "../../../common/components/Footer"
import FormInput from "../../../common/components/FormInput";
import NumberInput from "../../../common/components/NumberInput";
import Dropdown from "../../../common/components/Dropdown";
import { Button } from "../../../common/components/Button";

import entity from "../../../entity/entity";

const PersonalInfo = () => {

  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [disease, setDisease] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [sysBp, setSysBp] = useState();
  const [diaBp, setDiaBp] = useState();
  const [fbs, setFbs] = useState();
  const [isDisabled, setIsDisabled] = useState(true);

  const navigate = useNavigate();

  const DISEASES = [
    "ความดันโลหิตสูง (HT)",
    "เบาหวาน (DM)",
    "ไตวายเรื้อรัง (CKD)",
    "ไขมันในเส้นเลือด (DLP)",
    "โรคหลอดเลือดในสมอง (Stroke)",
    "โรคหัวใจ (Heart disease)",
    "เก๊าท์ (Gout)"
  ];

  function handleSubmitClick(e){
    e.preventDefault();

    entity['name'] = name;
    entity['gender'] = gender;
    entity['age'] = age;
    entity['disease'] = disease;
    entity['weight'] = weight;
    entity['height'] = height;
    entity['sysBp'] = sysBp;
    entity['diaBp'] = diaBp;
    entity['fbs'] = fbs;

    console.log(entity);

    navigate("/result", { replace: false });
  }

  function handleInputChangeValid(){
    if ( name &&
        gender &&
        age &&
        weight &&
        height &&
        sysBp &&
        diaBp &&
        fbs){
          setIsDisabled(false);
    }
  }
  
  return (
    <Container>
      <Header />
      <h3>กรอกข้อมูลสุขภาพตามความจริงให้ครบถ้วน</h3>
      <Content>
        <form onChange={e => handleInputChangeValid()}>
          {/* Name */}
          <FormInput
            callbackVal={setName}
            label="ชื่อ-นามสกุล"
            placeholder="ชื่อ-นามสกุล"
          />
          {/* Gender & Age */}
          <div className="grid-display">
            <Dropdown
              callbackVal={setGender}
              data={["ชาย", "หญิง"]}
              label="เพศ"
              placeholder="(เลือกเพศกำเนิด)"
            />
            <NumberInput
              callbackVal={setAge}
              label="อายุ"
              placeholder="อายุ"
            />
          </div>
          {/* Weight & Height */}
          <div className="grid-display">
            <NumberInput
              callbackVal={setWeight}
              label="น้ำหนัก"
              placeholder="น้ำหนัก"
            />
            <NumberInput
              callbackVal={setHeight}
              label="ส่วนสูง"
              placeholder="ส่วนสูง"
            />
          </div>
          {/* Congenital Disease */}
          <Dropdown
              callbackVal={setDisease}
              data={DISEASES}
              label="โรคประจำตัว (ถ้ามี)"
              placeholder="(เลือกโรคประจำตัว)"
            />
          {/* Blood Pressure */}
          <div className="grid-display">
            <NumberInput
              callbackVal={setSysBp}
              label="ความดันตัวบน (sys)"
              placeholder="ค่าความดันตัวบน (mmHg)"
            />
            <NumberInput
              callbackVal={setDiaBp}
              label="ความดันตัวล่าง (dia)"
              placeholder="ค่าความดันตัวล่าง (mmHg)"
            />
          </div>
          <NumberInput
            callbackVal={setFbs}
            label="น้ำตาลในเลือด "
            placeholder="ค่าน้ำตาลในเลือด (mg/dL)"
          />
        </form>
        <Button disabled={isDisabled} className="margin-space" onClick={handleSubmitClick}>ประเมินผล</Button>
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

    h3 {
        color: var(--button-color);
        font-weight: 500;
        margin: 0;
    }
    
    @media screen and (max-width: 768px) {
        width: 80vw;
    }
`;

const Content = styled.div`
    margin: 24px 0px;

    .grid-display {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
    }

    .margin-space {
      margin: 14px 0px;
    }
`;

export default PersonalInfo;