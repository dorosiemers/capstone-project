import Link from "next/link";

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
