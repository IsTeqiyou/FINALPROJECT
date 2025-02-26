

const EventPropagationExample = () => {
  const handleDivClick = () => {
    console.log("Div clicked!");
  };

  const handleButtonClick = (e) => {
    e.stopPropagation(); 
    console.log("Button clicked!");
  };

  return (
    <div
      onClick={handleDivClick}
      className="min-h-screen flex items-center justify-center bg-gray-200"
    >
      <div className="bg-gray-300 p-6 rounded-lg shadow-md text-center">
        <p className="mb-4 text-gray-700">press the button.</p>
        <button
          onClick={handleButtonClick}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Click Me
        </button>
      </div>
    </div>
  );
};

export default EventPropagationExample;
