import { useEffect, useState } from "react";

import '../../styles/repositories.scss';

import { RepositoryItem } from "../RepositoryItem";

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/martinsgabriel1956/repos').then(res => res.json()).then(data => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Repository List</h1>
      <ul>
        {repositories.map(repository => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    </section>
  );
}
