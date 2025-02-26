// soal 3 //

// function App() {
// const title = "Coba JSX{}";
// const pargarph = "Lorem ipsum dolor sit amet.";
// const tema = {
//   pargarph: {
//     backgroundColor: "blue",
//     color: "white",
//   },
// }; 



//   return (
//     <>
//       <img src="cobaReact.png" alt="cobaReact" />
//       <h1 style={{ color: "red "}}>{<title>Coba React</title>}</h1>
//       <p style={tema.pargarph}>{pargarph}</p>
//     </>
//   );
// }

// soal 4 //

function App() {
  const user = {
    name: 'Taqy',
    age: 16,
    location: 'pangkal pinang',
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

// soal 2 //

// export function App() {
//   return (
//     <div>
//       <div className="intro">
//         <h1>Welcome to my website!</h1>
//       </div>
//       <p style={{ color: "blue" }} className="summary">
//         You can find my thoughts here.
//         <br /><br />
//         <b>And <i>pictures</i></b> of scientists!
//       </p>
//     </div>
//   );
// }

// soal //

// function App() {
//   return (
//     <div>
//       <h1>Hello, World!</h1>
//       <p>Ini adalah contoh JSX sederhana di React.</p>
//     </div>
//   );
// }




// export default App;
