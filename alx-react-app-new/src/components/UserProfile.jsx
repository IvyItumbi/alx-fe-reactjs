export default function UserProfile({ name, age, bio }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '16px auto',
      maxWidth: '420px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      backgroundColor: '#fafafa'
    }}>
      <h2 style={{ color: '#1976d2', marginTop: 0 }}>{name}</h2>
      <p style={{ margin: '8px 0' }}>
        Age: <span style={{ fontWeight: 'bold', color: '#d32f2f' }}>{age}</span>
      </p>
      <p style={{ color: '#424242', lineHeight: 1.5 }}>
        Bio: {bio}
      </p>
    </div>
  )
}