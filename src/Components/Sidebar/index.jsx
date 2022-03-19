import React, { useState } from "react";
import { list } from "../../mock/sidebar";
import { Box, Container, Icons, Logo, Menu, Title, Wrapper } from "./style";
import Zoom from "react-reveal/Zoom";

export const Sidebar = () => {
  const [active, setActive] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Menu onClick={() => setActive(!active)} />
        <Logo />
      </Wrapper>
      {list.map((value) => {
        return (
          <Wrapper key={value.id}>
            <Icons src={value.icon} alt="rasm" />
            <Title>{value.title}</Title>
          </Wrapper>
        );
      })}
      {active && (
        <Zoom left>
          <Box onClick={() => setActive(!active)}></Box>
        </Zoom>
      )}
    </Container>
  );
};

export default Sidebar;
