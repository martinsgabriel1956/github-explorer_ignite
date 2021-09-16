export function RepositoryItem({repository: { name, description, link }}) {
  return (
    <li>
      <strong>{name ?? 'Default'}</strong>
      <p>{description}</p>
      <a href={link}>Access repository</a>
    </li>
  );
}
