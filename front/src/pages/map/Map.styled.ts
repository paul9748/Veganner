import styled from "styled-components";
import { Link } from "react-router-dom";

// 전체
export const Title = styled.section`
  margin: auto;
  font-size: 25px;
  text-align: center;
  font-family: Noto Sans KR;
`;
export const Layout = styled.section`
  display: flex;
  margin: 80px auto;
  width: 1400px;
  height: 100vh;
  border-radius: 5px;
  font-family: Noto Sans KR;
`;

//
export const resMenu = styled.div`
  position: flex;
  border-radius: 3px 5px 8px 10px;
  background: white;
  margin-bottom: 100px;
`;

export const searchContainer = styled.div`
  background: #ffffff;
  margin-bottom: 100px;
  border-radius: 20px;
`;

export const searchForm = styled.form`
  border-bottom: 2px solid #f1f1f1;
  width: 400px;
`;

export const search = styled.input`
  display: block;
  border: 2px solid lightgray;
  border-radius: 9999px;
  // box-sizing: border-box;
  font-size: 16px;
  height: 48px;
  margin: 28px 10px 10px 28px;
  padding: 0 20px 0 20px;
  width: 100%;
`;

// 카테고리 버튼
export const selectContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 500px;
  padding: 0 10px 10px 0;
`;
export const selectBox = styled.div`
  width: 80px;
  height: 30px;
  border-radius: 9999px;
  border: 2px solid #004d43;
  background: #ffffff calc(100% - 7px) center no-repeat;
  background-size: 10px;
  margin: 5px 10px 5px 0;
`;

export const select_button = styled.button`
  // display: block;
  align-items: center;
  text-align: center;
  color: #004d43;
  font-weight: bold;
  width: inherit;
  height: inherit;
  border: 0 none;
  outline: 0 none;
  background: transparent;
`;
export const optionList = styled.ul`
  position: stickey;
  // display: block;
  top: 28px;

  width: 70px;
  border-radius: 5px;
  border: 2px lightgray solid;
  margin: 5px 3px 5px 2px;
  background: #ffffff;
  // overflow: hidden;
  transition: 0.3s ease-in;
`;
export const optionitem = styled.li`
  border-bottom: 2px solid lightgray;
  padding: 5px 15px 5px;
  transition: 0.1s;

  text-align: center;
  font-size: 10px;
  background: #ffffff;

  :hover {
    background: #cdea67;
  }
`;

export const resContainer = styled.div`
  position: block;
  width: 500px;
  height: 100%;

  background: #ffffff;
  border-radius: 20px;
`;
// Resitem
// 식당 리스트 1개
export const restaurant = styled.div`
  display: block;
  border-bottom: 2px solid #f1f1f1;
  padding: 28px 45px;
`;

export const stylelink = styled(Link)`
  text-decoration-line: none;
`;

export const h2 = styled.h2`
  display: block;
  font-weight: 700;
  margin-bottom: 8px;
  position: relative;
  text-decoration-line: none;
  color: rgb(58, 58, 58);
  font-size: 20px;
`;

export const p = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: rgb(58, 58, 58);
  line-height: 1.5;
`;

export const boxdiv = styled.div`
  display: block;
  margin: 8px 0 0 0;
  height: 25px;
`;

export const box = styled.div`
  display: flex;
  float: left;
  text-align: center;
  word-break:break-all
  height: 30px;
  border-radius: 9999px;
  border: 2px solid #cdea67;
  background: #cdea67;
  background-size: 10px;
  padding: 5px 7px;
  margin: 5px 10px 5px 0;
  color: light gray;
  font-size: 15px;
  // box-sizing: border-box;
`;

export const pagination = styled.div`
  display: block;
`;

// MainMap
export const MainMap = styled.div`
  position: flex;
  height: 100%;
  width: 100%;
  border-radius: 20px;
`;

// Paging
export const paging = styled.div`
  display: flex;
`;