import { useEffect, useState } from "react";

import '../../styles/repositories.scss';

import { RepositoryItem } from "../RepositoryItem";

const repository = {
  name: "unform",
  description: "Forms in React",
  link: "https://github.com/unform/unform"
};

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/martinsgabriel1956/repos').then(res => res.json()).then(data => console.log(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Repository List</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
