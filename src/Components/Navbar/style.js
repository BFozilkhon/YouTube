import styled from "styled-components";
import { ReactComponent as search } from "../../assets/icons/search.svg";

export const Container = styled.div`
  width: 100%;
  /* position: sticky; */
  top: 0;
  z-index: 1;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  justify-content: ${({ btn }) => btn && "center"};
  background: #212121;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const InputFlexing = styled.div`
  width: 45%;
  height: 45px;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  margin: auto;
`;

export const Input = styled.input`
  width: 85%;
  background: #000000;
  border: 1px solid rgba(255, 255, 255, 0.2);
  height: 100%;
  outline: none;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.2);
  padding-left: 20px;
`;

export const Search = styled(search)`
  margin: auto;
`;

export const Button = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-sizing: border-box;
  border-radius: 30px;
  padding: 10px 40px;
  margin: 0px 30px;
  cursor: pointer;
  transition: all 0.2s;
`;
