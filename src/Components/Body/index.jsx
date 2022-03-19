import React, { useContext, useEffect } from "react";
import { ChooseCreateContext } from "../../context/choose";
import { MovieCreateContext } from "../../context/search";
import { data } from "../../mock/body";
import { Card, Container, Img, Title } from "./style";

export const Body = () => {
  const [lists, setLists] = useContext(MovieCreateContext);
  const [header, setHeader] = useContext(ChooseCreateContext);

  // useEffect(() => {
  //   const newData = data.filter((value) => value.category == header);
  //   setLists(newData);
  // });

  return (
    <Container>
      {lists
        .filter((value) => value.category == header)
        .map((value) => {
          return (
            <Card key={value.id}>
              <Img src={value.url} />
              <Title>{value.name}</Title>
            </Card>
          );
        })}
    </Container>
  );
};

export default Body;
