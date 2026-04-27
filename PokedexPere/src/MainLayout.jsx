import { Link, Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div>
      <header className="header">
        <h1>Pokédex</h1>

        <nav>
          <Link to="/">Inici</Link>
        </nav>
      </header>

      <main className="container">
        <Outlet />
      </main>
    </div>
  );
}
Home.jsx

export default function Home() {
  return (
    <section>
      <h2>Benvingut a la Pokédex</h2>
      <p>Consulta informació dels Pokémon utilitzant la PokéAPI.</p>
    </section>
  );
}
