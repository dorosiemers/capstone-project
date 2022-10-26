import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div>
        <h1>Navigation</h1>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/incidents">
          <a>Input</a>
        </Link>
        <Link href="/incidents/incidentList">
          <a>List</a>
        </Link>
        <Link href="/resources">
          <a>Ressources</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
