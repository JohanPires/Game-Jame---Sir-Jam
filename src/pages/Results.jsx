import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import { jsPDF } from 'jspdf';

export default function ResultsPage() {
    const [recommendedProducts, setRecommendedProducts] = useState([]);
    
    useEffect(() => {
        fetch('/db.json')
            .then(response => response.json())
            .then(data => {
                if (data.resultat && data.resultat.materiaux_requis) {
                    setRecommendedProducts(data.resultat.materiaux_requis);
                }
            })
            .catch(error => console.error('Erreur du chargement', error));
    }, []);

    const downloadPDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(16);
        doc.text("Liste des produits recommandés", 20, 20);

        recommendedProducts.forEach((product, index) => {
            doc.setFontSize(12);
            doc.text(`${index + 1}. ${product.type} - Quantité: ${product.quantite}`, 20, 30 + index * 10);
            doc.text(`${product.details || 'Aucune description disponible'}`, 20, 35 + index * 10);
        });

        doc.save("liste_produits.pdf");
    };

    return (
        <>
            <Header />
            <div className="container mx-auto px-4 py-10 mt-20">
                <h1 className="text-3xl font-bold mb-6 text-center">Voici la liste des produits qu’on vous propose après avoir répondu au questionnaire :</h1>
                {recommendedProducts.length > 0 ? (
                    <>
                        <div className="space-y-6">
                            {recommendedProducts.map((product, index) => (
                                <div key={index} className="flex items-center space-x-4">
                                    <img src={product.image} alt={product.type} className="w-24 h-24 object-cover rounded-lg" />
                                    <div>
                                        <h2 className="text-xl font-semibold">{product.type}</h2>
                                        <p className="text-gray-600">Quantité: {product.quantite}</p>
                                        <p className="text-gray-500">{product.details || 'Aucune description'}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button onClick={downloadPDF} className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">Télécharger la liste</button>
                    </>
                ) : (
                    <p className="text-center text-gray-500">Aucun produit recommandé.</p>
                )}
            </div>
            <Footer />
        </>
    );
}
