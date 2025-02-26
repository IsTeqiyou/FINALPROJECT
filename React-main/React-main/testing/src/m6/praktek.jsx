
const users = [
  { id: 1, name: 'Alex', age: 24 },
  { id: 2, name: 'Belva', age: 28 },
  { id: 3, name: 'Chris', age: 30 },
  { id: 4, name: 'Diana', age: 22 },
  { id: 5, name: 'Evelyn', age: 26 }
];

const UserList = () => {
  // 1. Semua Nama Pengguna
  const allNames = users.map(user => (
    <li
      key={user.id}
      className="text-gray-800 text-lg bg-gray-100 rounded-lg px-4 py-2 mb-2 shadow hover:bg-gray-200 transition"
    >
      {user.name}
    </li>
  ));

  // 2. Pengguna dengan Usia di Atas 25 Tahun
  const usersAbove25 = users
    .filter(user => user.age > 25)
    .map(user => (
      <li
        key={user.id}
        className="text-gray-800 text-lg bg-blue-100 rounded-lg px-4 py-2 mb-2 shadow hover:bg-blue-200 transition"
      >
        {user.name}
      </li>
    ));

  // 3. Nama dengan Huruf "e"
  const namesWithE = users
    .filter(user => user.name.includes('e'))
    .map(user => (
      <li
        key={user.id}
        className="text-gray-800 text-lg bg-green-100 rounded-lg px-4 py-2 mb-2 shadow hover:bg-green-200 transition"
      >
        {user.name}
      </li>
    ));

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
        Daftar Pengguna
      </h1>

      {/* Semua Nama */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Semua Nama Pengguna:</h2>
        <ul className="space-y-2">{allNames}</ul>
      </section>

      {/* Pengguna dengan Usia di Atas 25 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Pengguna dengan Usia di Atas 25 Tahun:
        </h2>
        <ul className="space-y-2">{usersAbove25}</ul>
      </section>

      {/* Nama Mengandung Huruf "e" */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Pengguna dengan Nama Mengandung Huruf "e":
        </h2>
        <ul className="space-y-2">{namesWithE}</ul>
      </section>
    </div>
  );
};

export default UserList;
