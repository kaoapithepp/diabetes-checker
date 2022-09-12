import styled from "styled-components";

import Header from "../../../common/components/Header"
import Footer from "../../../common/components/Footer"
import FormInput from "../../../common/components/FormInput";

const PersonalInfo = () => {
  return (
    <Container>
      <Header />
      <Content>
        <form>

        <FormInput
        type="text"
        label="ชื่อ-นามสกุล"
        placeholder="ชื่อ-นามสกุล" />
        <div className="grid-display">
          <FormInput
          type="text"
          label="เพศ"
          placeholder="เพศ" />
          <FormInput
          type="number"
          label="อายุ"
          placeholder="อายุ" />
        </div>
        </form>
      </Content>
      <Footer />
    </Container>
  );
}

const Container =  styled.div`
    vertical-align: middle;
    margin-left: auto;
    margin-right: auto;
    width: 60vh;
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 80vw;
    }
`;

const Content = styled.div`
    margin: 24px 0px;

    .grid-display {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 40px;
    }
`;

export default PersonalInfo;