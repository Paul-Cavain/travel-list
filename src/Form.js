const Form = () => {
  return (
    <form className="flex flex-row justify-center items-center gap-5 bg-yellow-700 py-4 w-full">
      <h3 className="text-lg">What do you need for your 🥰 trip</h3>

      <select className="w-20 h-10 text-xs rounded-md focus:outline-none hover:bg-yellow-700 hover:text-white hover:border-2 hover:border-white transition ease-out duration-500">
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        required
        placeholder="item..."
        className="h-10 w-28 px-1 rounded-md focus:outline-none hover:bg-yellow-700 hover:text-white hover:border-2 hover:border-white transition ease-out duration-500"
      />
      <button
        type="button"
        className="h-10 w-20 uppercase text-white bg-blue-500 rounded-md transition ease-out duration-500 text-center hover:border-2 hover:border-blue-500 hover:bg-white hover:text-blue-500"
      >
        Add
      </button>
    </form>
  );
};
export default Form;
