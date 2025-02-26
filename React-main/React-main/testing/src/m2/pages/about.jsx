function App() {
    const user = {
      name: 'Taqy',
      age: 16,
      location: 'Pangkal pinang',
      hobbies: ['Reading', 'Gaming', 'designing'],
    };
  
    return (
      <div>
        <h1>{user.name}'s Profile</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
        <h2>Hobbies:</h2>
        <ul>
          {user.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    );
  }