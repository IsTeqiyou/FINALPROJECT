

function App() {
    return (
        <div>
            <Greeting name="Alice" massage="Welcome to the react!" />
        </div>
    );
}

function Apt() {
    const userInfo = {
      username: "johndoe",
      age: 25,
      location: "New York"
    };
  
    return (
      <div>
        <h1>Welcome to the App</h1>
        <UserProfile {...userInfo} />
      </div>
    );
  }

export default App;