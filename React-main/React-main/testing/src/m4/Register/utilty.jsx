function InputForm({ label, type, placeholder = "" }) {
    return (
      <div>
        <label htmlFor={label}>{label}:</label>
        <input type={type} id={label} name={label} placeholder={placeholder} />
      </div>
    );
  }
  function LoginButton({ type }) {
    return <button type={type}>Login</button>;
  }
  export { InputForm, LoginButton };