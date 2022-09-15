import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Header from "../../../common/components/Header";
import Footer from "../../../common/components/Footer";
import { Button } from "../../../common/components/Button";
import { BorderedButton } from "../../../common/components/BorderedButton";

import CookieIcon from '@mui/icons-material/Cookie';
import OpacityIcon from '@mui/icons-material/Opacity';

import entity from "../../../entity/entity";
import result from "../../../common/results/result.json";

const Result = () => {
    const [attrib, setAttrib] = useState({
        color: '',
        group: '',
        index: 0,
    })

    const navigate = useNavigate();

    useEffect(() => {
        validPingPongColor();
    },[])

    // Group: White & Pate Green
    function groupWhiteAndPaleGreen() {
        // Normal
        if (entity['sysBp'] < 120 && entity['diaBp'] < 80 && entity['fbs'] < 100){
            setAttrib({
                color: "#FFFFFF",
                colorName: "สีขาว",
                group: "กลุ่มปกติ",
                index: 0
            });
            return;
        }
        // Pale green
        if ( 120 <= entity['sysBp'] && entity['sysBp'] <= 139
            || 80 <= entity['diaBp'] && entity['diaBp'] <= 89
            || 100 <= entity['fbs'] && entity['fbs'] <= 125){
            setAttrib({
                color: "#AADA76",
                colorName: "สีเขียวอ่อน",
                group: "กลุ่มเสี่ยง",
                index: 1
            });
            return;
        }
    }

    // Group: Black
    function groupBlack() {
        setAttrib({
            color: "#000000",
            colorName: "สีดำ",
            group: "กลุ่มมีภาวะแทรกซ้อน",
            index: result.length-1
        });
        return;
    }

    // Group: Colors
    function groupColors() {
        // Red
        if (180 <= entity['sysBp'] || 110 <= entity['diaBp'] || 163 <= entity['fbs']){
            setAttrib({
                color: "#FE2E04",
                colorName: "สีแดง",
                group: "กลุ่มป่วยระดับ 3 (วิกฤต)",
                index: 5
            });
            return;
        }

        // Orange
        if (160 <= entity['sysBp'] && entity['sysBp'] <= 179
            || 100 <= entity['diaBp'] && entity['diaBp'] <= 109
            || 155 <= entity['fbs'] && entity['fbs'] <= 162){
            setAttrib({
                color: "#FD7610",
                colorName: "สีส้ม",
                group: "กลุ่มป่วยระดับ 2 (อันตราย)",
                index: 4
            });
            return;
        }

        // Yellow
        if (140 <= entity['sysBp'] && entity['sysBp'] <= 159
            || 90 <= entity['diaBp'] && entity['diaBp'] <= 99
            || 125 <= entity['fbs'] && entity['fbs'] <= 154){
            setAttrib({
                color: "#FFE00F",
                colorName: "สีเหลือง",
                group: "กลุ่มป่วยระดับ 1 (เฝ้าระวัง)",
                index: 3
            });
            return;
        }
        
        // Dark green
        if (entity['sysBp'] < 139 && entity['diaBp'] < 89 && entity['fbs'] < 125){
            setAttrib({
                color: "#349933",
                colorName: "สีเขียวเข้ม",
                group: "กลุ่มป่วยระดับ 0 (ควบคุมได้ดี)",
                index: 2
            });
            return;
        }
    }

    function validPingPongColor() {
        // DM/HT come with HT/DM
        if (entity['disease'].length >= 2
            && (entity['disease'].includes("ความดันโลหิตสูง") && entity['disease'].includes("เบาหวาน"))){
            
            // console.log('DM/HT come with HT/DM');
            return groupColors();
        }

        // HT or DM with others
        if (entity['disease'].length >= 2
            && (entity['disease'].includes("ความดันโลหิตสูง")
                || entity['disease'].includes("เบาหวาน"))){
                
            // console.log('HT or DM with others');
            return groupBlack();
        }

        // No disease or Any disease except HT and DM
        if (entity['disease'].length >= 1
            && (entity['disease'] != "ความดันโลหิตสูง"
                && entity['disease'] != "เบาหวาน")) {

            // console.log('No disease or Any disease except HT and DM');
            return groupWhiteAndPaleGreen();
        }

        // Only DM or HT
        if (entity['disease'].length == 1
            && (entity['disease'] == "ความดันโลหิตสูง"
                || entity['disease'] == "เบาหวาน")) {

            // console.log('Only DM or HT');
            return groupColors();
        }
    }

    function clearEntityToHome(e) {
        e.preventDefault();

        entity['gender'] = '';
        entity['age'] = 0;
        entity['disease'] = null;
        entity['weight'] = 0;
        entity['height'] = 0;
        entity['sysBp'] = 0;
        entity['diaBp'] = 0;
        entity['fbs'] = 0;

        // console.log(entity);

        window.scrollTo(0,0);
        navigate("/", { replace: true });
    }

    function clearEntityToInput(e) {
        e.preventDefault();

        entity['gender'] = '';
        entity['age'] = 0;
        entity['disease'] = null;
        entity['weight'] = 0;
        entity['height'] = 0;
        entity['sysBp'] = 0;
        entity['diaBp'] = 0;
        entity['fbs'] = 0;

        // console.log(entity);

        window.scrollTo(0,0);
        navigate("/input", { replace: true });
    }

    return (
        <Container>
            <Header />
            <h3 className="h3">ผลการตรวจสอบ</h3>
            <Content>
                <Detail>
                    <Circle color={attrib.color}/>
                    <ColorName color={attrib.color}>{attrib.colorName}</ColorName>
                    <h4>{attrib.group}</h4>
                    <div className="grid-display">
                        <div className="box bp">
                            <OpacityIcon className="w-size"/>
                            <>
                                <h4>{entity['sysBp']}/{entity['diaBp']}</h4>
                                <p>ค่าความดันโลหิต</p>
                            </>
                        </div>
                        <div className="box fbs">
                            <CookieIcon className="w-size"/>
                            <>
                                <h4>{entity['fbs']}</h4>
                                <p>ค่าน้ำตาลในเลือด</p>
                            </>
                        </div>
                    </div>
                </Detail>
                <Instruction>
                    <span>คำแนะนำ</span>
                    {result[attrib.index]['instruct'].map(elem => {
                        return(<p>{elem}</p>);
                    })}
                </Instruction>
            <Button onClick={e => clearEntityToInput(e)}>ประเมินอีกครั้ง</Button>
            <BorderedButton onClick={e => clearEntityToHome(e)}>กลับหน้าหลัก</BorderedButton>
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
    
    .h3 {
        color: var(--button-color);
        font-weight: 500;
    }
`;

const Circle = styled.div`
    display: flex;
    width: 120px;
    height: 120px;
    background-color: ${props => props.color};
    border: 1px solid ${props => props.color == "#FFFFFF" ? "#000000": props.color};
    border-radius: 50%;
`;

const Content = styled.div`
    margin: 24px 0px;
`;

const Detail = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h4 {
        font-weight: 400;
        margin: 0px 10px 10px 10px;
    }

    .grid-display {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
    }

    .box {
        margin: 10px;
        border-radius: 20px;
        padding: 10px;
        width: 120px;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        h4 {
            font-weight: 500;
            font-size: 1.5em;
            margin: 0;
        }

        p {
            font-weight: 300;
            margin: 0;
        }

        .w-size{
            font-size: 50px;
        }
    }

    .bp {
        border: 1px solid var(--blood);
        color: var(--blood);
    }

    .fbs {
        border: 1px solid var(--cookie);
        color: var(--cookie);
    }
`;

const ColorName = styled.h3`
    font-weight: 500;
    margin: 10px;
    color: ${props => props.color == "#FFFFFF" ? "#000000" : props.color};
`

const Instruction = styled.div`
    margin: 14px 0px; 
    
    span {
      color: var(--white);
      background-color: var(--button-color);
      padding: 0px 4px;
    }

    p {
      font-weight: 300;
      margin: 10px 0px;
    }
`;

export default Result;