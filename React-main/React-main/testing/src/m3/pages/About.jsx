function UserProfile({ username, age, location }) {
    return (
      <div>
        <h2>User Profile</h2>
        <p>Username: {username}</p>
        <p>Age: {age}</p>
        <p>Location: {location}</p>
      </div>
    );
  }