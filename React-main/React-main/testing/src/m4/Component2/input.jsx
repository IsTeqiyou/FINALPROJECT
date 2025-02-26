export default function Input({type,password,placeholder}) {
    return (
        <input
        type={type}
        id={password}
        placeholder="Enter your name"
        className="border border-gray-300 rounded-md p-3 w-full text-gray-500 placeholder-gray-400 focus:outline-none focus:border-blue-500"
      />
    )
}
