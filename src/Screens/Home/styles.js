import styled from "styled-components";

export const HomeWrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100vh;

  .form-container {
    padding-inline: 35px;

    .text-container {
      margin-bottom: 10px;

      .sub-text {
        margin-top: -18px;
      }
    }
  }

  .input-box {
    height: 30px;
    width: 500px;
    margin-right: 10px;
    padding: 10px;
  }

  .drp-box {
    height: 52px;
    padding: 10px;
  }

  .data-container {
    margin-top: 20px;
    height: 700px;
    width: 75vw;
    overflow: hidden auto;
    padding-inline: 35px;
    padding-block: 35px;

    .card {
      width: 350px;
      padding: 10px;
      box-shadow: 5px 5px 25px -8px #888888;
      border-radius: 10px;
      margin-right: 10px;
    }
  }
`;
