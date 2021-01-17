import React from "react";

function CategoryFilter({categories, selectCat, setSelectCat}) {


  const categoryElement = categories.map(cat => {
    const className = cat === selectCat ? "selected" : null;
    return (<button className={className} key={cat} onClick={() => setSelectCat(cat)}>{cat} </button>)
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryElement}
    </div>
  );
}

export default CategoryFilter;
