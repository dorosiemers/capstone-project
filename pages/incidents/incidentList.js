import styled from "styled-components";

const incidentList = () => {
  return (
    <Container>
      <Headline>Deine Erlebnisse</Headline>
      <List>
        <ListItem>Vorfall1</ListItem>
        <ListItem>Vorfall2</ListItem>
        <ListItem>Vorfall3</ListItem>
        <ListItem>Vorfall4</ListItem>
        <ListItem>Vorfall5</ListItem>
      </List>
    </Container>
  );
};

export default incidentList;

const Container = styled.div`
  text-align: center;
  padding: 10px;
  margin: 10px;
`;

const Headline = styled.h1`
  text-align: center;
  padding: 10px;
  margin: 10px;
`;

const List = styled.ul`
  text-align: center;
  padding: 10px;
  margin: 10px;
`;

const ListItem = styled.li`
  text-align: start;
  border: solid 1px #ddd;
  padding: 10px;
  margin: 10px;
  list-style: none;
`;
