export default function Input({ children }) {
  return (
    <input
      type="password"
      id="confirm-password"
      placeholder="Confirm your password"
      className="border border-gray-300 rounded-md p-3 w-full text-gray-500 placeholder-gray-400 focus:outline-none focus:border-blue-500"
/>
  );
}
