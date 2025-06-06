import Link from "next/link";

export default function Undertale() {
  return (
    <div>
      <Link href="/">
        <h3>Voltar</h3>
      </Link>
      <h1>Página Sobre minhas opiniões em relações a filmes e video games!</h1>
      <Link href="/undertale">Undertale</Link>
    </div>
  );
}
