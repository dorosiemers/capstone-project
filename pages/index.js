import Head from "next/head";
import Link from "next/link";

import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Home() {
  const [state, setState] = useState({ data: "" });

  useEffect(() => {
    getData();
    async function getData() {
      const response = await fetch("/api/data-for-react");
      const data = await response.json();
      setState(data);
    }
  }, []);

  return (
    <div>
      <Head>
        <title>My App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="logo" href="/favicon.ico" />
      </Head>
      <Main>
        <div>
          <h1>Tracker für Sexismus und Diskriminierung</h1>
          <Container>
            <h2>Was ist passiert?</h2>
            <p>Hier ist Platz, um deine Erlebnisse aufzuschreiben. </p>
            <Link href="/incidents" passHref>
              <Button variant="contained">Schreib es auf</Button>
            </Link>
          </Container>
          <Container>
            <h2>Deine Erlebnisse</h2>
            <p>
              Du hast die Möglichkeit deine Einträge zu speichern und später
              erneut auf sie zuzugreifen.
            </p>
            <Link href="/incidents/incidentList" passHref>
              <Button variant="contained">Deine Einträge</Button>
            </Link>
          </Container>
          <Container>
            <h2>Hilfestellen und Beratungsangebote</h2>
            <p>
              Du bist nicht allein! Wir haben dir eine Liste mit verschiedenen
              Hilfs- und Beratungsangeboten zusammengestellt. Hier findest du
              Angebote und Kontaktmöglichkeiten.
            </p>
            <Link href="/resources" passHref>
              <Button variant="contained">Hilfsangebote</Button>
            </Link>
          </Container>
        </div>
      </Main>
    </div>
  );
}

const Main = styled.main`
  text-align: center;
`;

const Container = styled.div`
  text-align: center;
  border: solid 1px #ddd;
  padding: 10px;
  margin: 10px;
`;

const Button = styled.button`
  color: #ddd;
`;
