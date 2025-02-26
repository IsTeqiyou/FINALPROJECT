export default function Event() {
    const handleClick = () => {
        console.log('Div clicked!');
    };

    const handleButtonClick = () => {
        console.log('Button clicked!');
    };

    return (
        <div onclick={handleClick} className="bg-gray-100 p-5">
            <button onclick={handleButtonClick} className="bg-blue-500 p-3">
                Click Me
            </button>
            </div>
    );
}