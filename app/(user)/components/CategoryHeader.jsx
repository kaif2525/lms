import React from "react";

function CategoryHeader() {
  const category = [
    "All",
    "Software Development",
    "Web Development",
    "Mobile Development",
    "Game Development",
    "Data Science",
    "Machine Learning",
  ];
  return (
    <div className="scrollbar border h-14 border-[#21232b] border-t-0 md:flex hidden lg:flex overflow-y-scroll flex-row justify-between items-center">
      {category.map((item) => (
        <div className="px-4" key={item}>
          <button className="hover:text-blue-500 text-xs text-[#787b7e]">
            {item}
          </button>
        </div>
      ))}
    </div>
  );
}

export default CategoryHeader;
