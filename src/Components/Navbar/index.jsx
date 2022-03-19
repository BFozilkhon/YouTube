import React, { useContext } from "react";
import { MovieCreateContext } from "../../context/search";
import { ChooseCreateContext } from "../../context/choose";
import {
  Button,
  Container,
  Input,
  InputFlexing,
  Search,
  Wrapper,
} from "./style";
import { data } from "../../mock/body.js";
import { btnData } from "../../mock/btn";

export const Navbar = () => {
  const [lists, setLists] = useContext(MovieCreateContext);
  const [header, setHeader] = useContext(ChooseCreateContext);

  const InputSearch = (e) => {
    const newData = data.filter((value) =>
      value.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setLists(newData);
  };

  console.log(header);

  return (
    <Container>
      <Wrapper>
        <InputFlexing>
          <Input onChange={InputSearch} type="text" placeholder="search" />
          <Search />
        </InputFlexing>
      </Wrapper>
      <Wrapper btn>
        {btnData.map((value) => {
          return (
            <Button
              key={value.id}
              onClick={() => setHeader(value.item)}
              style={{ background: header == value.item && "white" }}
            >
              {value.item}
            </Button>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
