import Link from "next/link";
import styled from "styled-components";

const NotFound = () => {
  return (
    <div>
      <h1>Oh nein!</h1>
      <h2>Diese Seite kann nicht gefunden werden.</h2>
      <p>
        Hier geht es zurück zur{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;

const Container = styled.div`
  text-align: center;
  border: solid 1px #ddd;
  padding: 10px;
  margin: 10px;
  cursor: default;
`;
