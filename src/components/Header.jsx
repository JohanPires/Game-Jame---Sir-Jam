import logo from '/src/assets/logo.webp'; 
import React from 'react';

export default function Navbar() {
    return (
    <nav className="bg-gray-200 shadow-md fixed w-full z-10 top-0 left-0">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto mr-2" />
        </div>
        <div className="flex space-x-6 text-gray-700">
            <a href="#" className="hover:text-blue-500">Accueil</a>
            <a href="#" className="hover:text-blue-500">Formulaire</a>
            <a href="#" className="hover:text-blue-500">Liste</a>
        </div>
        </div>
    </nav>
    );
}
