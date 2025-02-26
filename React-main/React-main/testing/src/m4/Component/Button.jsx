export default function Button({children}) {
    return<button className="block text-blue-600 text-lg font-semibold mb-1" htmlFor="username" type="submit">
      {children}
  </button>
}