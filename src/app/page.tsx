export default function Page() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      margin: 0,
      background: '#000',
      color: '#fff',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>MyDrumz</h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
        Consultora creativa multidisciplinaria
      </p>
      <ul style={{ listStyle: 'disc inside', fontSize: '1.2rem', lineHeight: 1.6 }}>
        <li>Marketing Digital</li>
        <li>Desarrollo Web</li>
        <li>Diseño Visual</li>
        <li>Producción Musical</li>
      </ul>
    </main>
  );
}
