import React from 'react';
import { MdMoreHoriz } from 'react-icons/md';

const Header = () => {
  return (
    <header className="bg-black text-white p-2 flex items-center justify-between">
      <div className="flex items-center">
        <MdMoreHoriz className="text-white mr-2" size={30} />
       
      </div>
      {/* Barra de navegação aqui */}
    </header>
  );
};

export default Header;