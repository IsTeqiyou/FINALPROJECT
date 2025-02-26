

const ShowAlert = ({ message }) => {
  
  const handleClick = () => {
    alert(message);
  };

  return (
    <button onClick={handleClick}>
      Show Message
    </button>
  );
};

export default ShowAlert;
