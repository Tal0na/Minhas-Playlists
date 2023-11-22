import React from "react";
import { MdMoreHoriz } from "react-icons/md";

const Header = () => {
  return (
    <header>
      <div className="flex ml-2 ">
        <MdMoreHoriz className="text-white mr-2" size={30} />
      </div>
    </header>
  );
};

export default Header;
