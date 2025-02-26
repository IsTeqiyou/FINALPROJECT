export default function RenderingList() {

    const users = [
        { id: 1, name: 'abdilah' },
        { id: 2, name: 'rapip' },
        { id: 3, name: 'edo' },
    ];

    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}


