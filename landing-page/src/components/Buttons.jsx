const Buttons = ({ text }) => {
  return (
    <button className="bg-primary text-xl py-2 px-4 rounded hover:bg-sky-700 transition duration-700 ease-in hover:duration-150">
      {text}
    </button>
  );
};
export default Buttons;
