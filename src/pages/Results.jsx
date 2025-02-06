import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import { jsPDF } from 'jspdf';

export default function ResultsPage() {
    const location = useLocation();
    const formData = location.state || {};
    const [produits, setProduits] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/product")
            .then(response => response.json())
            .then(data => {
                setProduits(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des produits:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p className="text-center mt-10 text-gray-700">Chargement des produits...</p>;
    }

    const typeChoisi = formData.paratonnerre === "oui" ? "A" : "B";

    const produitsFiltres = produits.filter(produit => {
        const key = Object.keys(produit)[0]; 
        return produit[key].type === typeChoisi;
    });


    const disjoncteur = produitsFiltres.find(produit => {
        const key = Object.keys(produit)[0];
        return key.includes("disjoncteur");
    });

    const prises = produitsFiltres.filter(produit => Object.keys(produit)[0].includes("Prise"));
    const ampoules = produitsFiltres.filter(produit => Object.keys(produit)[0].includes("Ampoule"));

    const produitsRecommandes = [
        ...(disjoncteur ? [disjoncteur] : []), 
        ...prises,
        ...ampoules
    ];


    const downloadPDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(16);
        doc.text("Données du questionnaire", 20, 20);

        doc.setFontSize(12);
        doc.text(`Paratonnerre: ${formData.paratonnerre || 'Non spécifié'}`, 20, 30);
        doc.text(`Type de salle: ${formData.typeSalle || 'Non spécifié'}`, 20, 40);
        doc.text(`Nombre de lampes: ${formData.lampes || 0}`, 20, 50);
        doc.text(`Nombre de prises: ${formData.prises || 0}`, 20, 60);

        doc.text("Produits recommandés:", 20, 80);
        produitsRecommandes.forEach((produit, index) => {
            const key = Object.keys(produit)[0];
            doc.text(`- ${key} (Type: ${produit[key].type})`, 20, 90 + index * 10);
        });

        doc.save("formulaire_reponses.pdf");
    };

    return (
        <>
            <Header />
            <div className="container mx-auto px-4 py-10 mt-20">
                <h1 className="text-3xl font-bold mb-6 text-center">Résultats du questionnaire</h1>
                <div className="mb-6 p-4 bg-gray-100 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Vos réponses :</h2>
                    <p><strong>Paratonnerre :</strong> {formData.paratonnerre || 'Non spécifié'}</p>
                    <p><strong>Type de salle :</strong> {formData.typeSalle || 'Non spécifié'}</p>
                    <p><strong>Nombre de lampes :</strong> {formData.lampes || 0}</p>
                    <p><strong>Nombre de prises :</strong> {formData.prises || 0}</p>
                </div>

                <div className="mb-6 p-4 bg-gray-100 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Produits recommandés :</h2>
                    <ul className="list-disc pl-5">
                        {produitsRecommandes.length > 0 ? (
                            produitsRecommandes.map((produit, index) => {
                                const key = Object.keys(produit)[0];
                                return <li key={index} className="text-gray-800">{key} (Type: {produit[key].type})</li>;
                            })
                        ) : (
                            <p>Aucun produit trouvé.</p>
                        )}
                    </ul>
                </div>

                <button onClick={downloadPDF} className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
                    Télécharger la liste
                </button>
            </div>
            <Footer />
        </>
    );
}
