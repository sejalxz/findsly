import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from './Search';

export const Navbar = ({darkTheme, setDarkTheme}) => {
  return (
    <div className="p-5 flex flex-wrap justify-center sm:justify-between border-b border-gray-200 dark:border-gray-700 ">
        <div className="flex justify-between items-center space-x-5 w-screen">
            <Link to="/">
                <p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900">
                    Findsly 🔍
                </p>
            </Link>
            <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white broder rounded-full px-2 py-1 hover:shadow-lg">
                {darkTheme ? "Light 💡": "Dark 🌙"}
            </button>
        </div>
        <Search />
    </div>
  )
}
