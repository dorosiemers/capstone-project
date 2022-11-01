import Link from "next/link";
import styled from "styled-components";
import { resourcesList } from "../data/resourcesList";
import ResourcesList from "../components/resourcesList";

const Resources = () => {
  const resources = resourcesList;
  console.log(resources);
  return (
    <div>
      <Headline>Hilfestellen und Beratungsangebote</Headline>
      <main>
        {resources.map((item) => (
          <ResourcesList key={item.id} item={item} />
        ))}
      </main>
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
  align-items: center;
  text-align: center;
  border: solid 1px #ddd;
  padding: 10px;
  margin: 10px;
`;
