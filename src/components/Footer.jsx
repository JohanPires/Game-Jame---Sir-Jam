import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
    return (
        <footer className=" text-gray-700 py-4 mt-10">
            <div className="container mx-auto flex justify-between items-center px-4">
                <span className="text-2xl font-bold">Prysmor</span>
                <div className="flex items-center space-x-4">
                    <span>0606060606 | 30 Rue de Michelin 63100</span>
                    <a href="#" className="text-gray-700 hover:text-blue-500">
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </a>
                    <a href="#" className="text-gray-700 hover:text-blue-500">
                        <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </a>
                    <a href="#" className="text-gray-700 hover:text-blue-500">
                        <FontAwesomeIcon icon={faFacebook} size="lg" />
                    </a>
                </div>
            </div>
        </footer>
    );
}