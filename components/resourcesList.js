import React from "react";
import { resourcesList } from "../data/resourcesList";
import Link from "next/link";

export default function ResourcesList(item) {
  return (
    <>
      <h3>{item.name}</h3>
      {/* <Link href={item.link}>Homepage</Link>
      <Link href={item.tel}>Telefonnummer</Link> */}
    </>
  );
}
