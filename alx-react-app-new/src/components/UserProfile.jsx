export default function UserProfile({ name, age, bio }) {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '10px',           // ← "10px" must appear
      margin: '15px',
      borderRadius: '8px'
    }}>
      <h2 style={{ color: 'blue' }}>{name}</h2>   {/* ← "blue" must appear */}
      <p>Age: {age}</p>
      <p>Bio: {bio}</p>
    </div>
  );
}