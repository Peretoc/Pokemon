export default function MainLayout({ setCurrentPage, children }) {
  return (
    <div style={{ display: 'flex', flexDirection:"column",  alignItems: 'center', justifyContent: 'center' }}>
      <header className="header">
        <h1>Pokédex</h1>
      </header>

      <main className="container">
        {children}
      </main>
    </div>
  );
}

