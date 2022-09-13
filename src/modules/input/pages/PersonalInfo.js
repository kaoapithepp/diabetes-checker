import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';

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
  // const [disease, setDisease] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [sysBp, setSysBp] = useState();
  const [diaBp, setDiaBp] = useState();
  const [fbs, setFbs] = useState();
  const [isDisabled, setIsDisabled] = useState(true);

  const [diseaseElem, setDiseaseElem] = useState(['']);

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

  // let disease_render = diseaseElem.map((elem, key) => {
  //   return (diseaseElem.length == 1 ?
  //     <>
  //       <Dropdown
  //         key={key}
  //         callbackVal={setDisease}
  //         data={DISEASES}
  //         placeholder="(เลือกโรคประจำตัว)"
  //       />
  //     </> 
  //      : 
  //     <div className="pop-layout">
  //       <Dropdown
  //         key={key}
  //         callbackVal={setDisease}
  //         data={DISEASES}
  //         placeholder="(เลือกโรคประจำตัว)"
  //       />
  //       <IndeterminateCheckBoxIcon
  //         className="pop-icon"
  //         onClick={removeDiseaseHandle}
  //       />
  //     </div>
  //   );
  // });

  let disease_render = diseaseElem.map((elem, key) => {
    return (
        <Dropdown
          key={key}
          callbackVal={e => setAddDisease(e, key)}
          data={DISEASES}
          placeholder="(เลือกโรคประจำตัว)"
        />
    );
  });

  function setAddDisease(e, key) {
    let tempArr = [...diseaseElem];
    tempArr[key] = e;

    setDiseaseElem(tempArr);
  }

  function handleSubmitClick(e){
    e.preventDefault();

    entity['name'] = name;
    entity['gender'] = gender;
    entity['age'] = age;
    entity['disease'] = diseaseElem;
    entity['weight'] = weight;
    entity['height'] = height;
    entity['sysBp'] = sysBp;
    entity['diaBp'] = diaBp;
    entity['fbs'] = fbs;

    // console.log(entity);

    window.scrollTo(0,0);
    navigate("/result", { replace: true });
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

  function addDiseaseHandle() {
    setDiseaseElem(diseaseElem => [...diseaseElem, ""]);
  }

  function removeDiseaseHandle() {
    setDiseaseElem((products) => products.filter((_, index) => index !== 0));
  }

  // console.log(diseaseElem);
  
  return (
    <Container>
      <Header />
      {/* <img src="/image/TaeAugust07.jpg" alt="Health Check" className="img" /> */}
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
          <div className="congenital">
            <p className="label">โรคประจำตัว (ถ้ามี)</p>
            {disease_render}
            <p className="add-disease" onClick={addDiseaseHandle}>+ เพิ่มโรคประจำตัว</p>
          </div>
          {/* Blood Pressure */}
          <div className="grid-display">
            <NumberInput
              callbackVal={setSysBp}
              label="ความดันตัวบน (sys)"
              placeholder="ค่าตัวบน (mmHg)"
            />
            <NumberInput
              callbackVal={setDiaBp}
              label="ความดันตัวล่าง (dia)"
              placeholder="ค่าตัวล่าง (mmHg)"
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

    .img {
        width: 100%;
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

    .congenital {
      .label {
        margin: 4px 0px;
        font-size: 16px;

        @media screen and (max-width: 768px) {
            font-size: 12px;
        }
      }
      .add-disease {
        text-align: right;
        color: var(--button-color);
        font-size: 12px;
        cursor: pointer;
      }

      .pop-layout {
        display: grid;
        grid-template-columns: 1fr auto;
        justify-content: space-between;
        align-items: center;
      }

      .pop-icon {
        margin-left: 4px;
        color: var(--error);
        cursor: pointer;
      }
    }

    .margin-space {
      margin: 14px 0px;
    }
`;

export default PersonalInfo;