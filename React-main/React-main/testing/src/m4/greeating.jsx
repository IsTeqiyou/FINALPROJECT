
function Greeting(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>{props.message}</p>
    </div>
  );
}

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

export default UserProfile;
