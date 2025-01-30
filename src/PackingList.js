const PackingList = ({ items }) => {
  return (
    <section className="flex flex-col justify-between items-center py-8 bg-yellow-950 w-full h-[60vh]">
      {/* items */}
      <div className="grid grid-cols-4 justify-center items-center gap-x-48 gap-y-8 text-white">
        {items.map((item, id) => (
          <label
            key={id}
            className="flex flex-row gap-x-4 justify-start items-center cursor-pointer"
          >
            <input
              type="checkbox"
              className="cursor-pointer size-4 flex items-center justify-center"
            />
            <span>{item}</span>
          </label>
        ))}
      </div>

      {/* filter */}
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
    </section>
  );
};
export default PackingList;
