import styled from "styled-components";

const Resources = () => {
  return (
    <div>
      <Headline>Hilfestellen und Beratungsangebote</Headline>
      <List>
        <ListItem>Fachberatung1</ListItem>
        <ListItem>Fachberatung2</ListItem>
        <ListItem>Fachberatung3</ListItem>
        <ListItem>Fachberatung4</ListItem>
        <ListItem>Fachberatung5</ListItem>
      </List>
    </div>
  );
};

export default Resources;

const Container = styled.div`
  text-align: center;
  border: solid 1px #ddd;
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
