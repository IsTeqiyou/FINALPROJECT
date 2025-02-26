export default function Event() {
    const handleClick = () => {
        console.log('Button clicked!');
      };
    
      return (
        <button
        className="bg-blue-500 w-20 h-20 ml-20 mt-20 rounded-s-xl"
        onclick={handleClick}
      >
        Click me
      </button>
      );
}


    