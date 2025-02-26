export default function Label({children}) {
    return<label className="block text-blue-600 text-lg font-semibold mb-1" htmlFor="username">
      {children}
  </label>
}