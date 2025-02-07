import Filter from "./Filter";

const PackingList = ({ itemList }) => {
  return (
    <section className="flex flex-col justify-between items-center py-8 bg-yellow-950 w-full h-[60vh]">
      {/* items */}
      <div className="grid grid-cols-4 justify-center items-center gap-x-48 gap-y-6 text-white">
        {itemList.map((item, id) => (
          <label
            key={id}
            className="flex flex-row gap-x-4 justify-start items-center cursor-pointer"
          >
            <input
              type="checkbox"
              className="cursor-pointer size-4 flex items-center justify-center"
            />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
              {item.quantity} {item.description}
            </span>
            <button type="button" className="text-xs">
              ❌
            </button>
          </label>
        ))}
      </div>

      {/* filter */}
      <Filter />
    </section>
  );
};
export default PackingList;
