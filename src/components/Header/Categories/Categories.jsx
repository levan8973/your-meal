import { useState } from "react";
import CategoriesData from "./Categories.Data";
const Categories = () => {
  const [categoriesState, setCategoriesState] = useState(0);

  return (
    <div>
      <ul>
        {CategoriesData.map((value, i) => {
          console.log(value.imgSVG);
          return (
            <li key={i}>
              {value.imgSVG}
              <span>{value.text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
