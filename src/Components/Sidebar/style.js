import styled from "styled-components";
import { ReactComponent as menu } from "../../assets/icons/menu.svg";
import { ReactComponent as logo } from "../../assets/icons/logo.svg";

export const Container = styled.div`
  background-color: #212121;
  height: 100vh;
  flex: 2;
  padding-left: 27px;
  position: sticky;
  left: 0;
  top: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
`;

export const Menu = styled(menu)`
  width: 30px;
  height: 30px;
`;
export const Logo = styled(logo)`
  width: 130px;
  height: 80px;
  margin-left: 40px;
`;

export const Icons = styled.img`
  width: 30px;
  height: 30px;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  color: #ffffff;
  margin-left: 40px;
`;

export const Box = styled.div`
  width: 1920px;
  height: 100vh;
  background-color: black;
  filter: opacity(0.9);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
`;
