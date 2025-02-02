const Filter = () => {
  return (
    <>
      <form className="flex flex-row gap-8 justify-center items-baseline">
        <select className="w-40 h-10 rounded-md uppercase text-xs focus:outline-none transition ease-out duration-500 hover:bg-yellow-950 hover:text-white hover:border-2 hover:border-white">
          <option value="sort by input order">sort by input order</option>
          <option value="selected">selected</option>
          <option value="number">number</option>
        </select>
        <button
          type="button"
          className="w-20 h-10 rounded-md uppercase text-xs bg-white focus:outline-none transition ease-out duration-500 hover:bg-yellow-950 hover:text-white hover:border-2 hover:border-white"
        >
          Clear list
        </button>
      </form>
    </>
  );
};

export default Filter;
