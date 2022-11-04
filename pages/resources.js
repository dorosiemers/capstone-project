import Link from "next/link";
import styled from "styled-components";
import { resourcesList } from "../data/resourcesList";
import ResourcesList from "../components/resourcesList";

const Resources = () => {
  const resources = resourcesList;
  return (
    <div>
      <Headline>Hilfestellen und Beratungsangebote</Headline>
      <Container>
        {resources.map((item) => (
          <ResourcesList key={item.id} item={item} />
        ))}
      </Container>
    </div>
  );
};

export default Resources;

const Headline = styled.h1`
  text-align: center;
  padding: 10px;
  margin: 10px;
`;

const Container = styled.main`
  padding: 10px;
  margin: 10px;
`;
