import {InputForm, LoginButton} from "./utils.jsx";
export default function FormRegister() {
  return (
    <form>
      <InputForm
        label="Username"
        type="type"
        placeholder="Enter your username"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="Enter your password"
      />
      <LoginButton type="submit" />
    </form>
  );
}