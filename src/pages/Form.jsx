import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Form() {
    return (
        <div>
        <Header />
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
              <Card className="w-full max-w-lg shadow-lg border border-gray-300 bg-white">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    ⚡ Formulaire Électrique
                  </h2>
        
                  {/* Question sur le paratonnerre */}
                  <div className="mb-4">
                    <label className="block font-semibold text-gray-700 mb-2">
                      Votre bâtiment a-t-il un paratonnerre ?
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="paratonnerre"
                          value="oui"
                          checked={formData.paratonnerre === "oui"}
                          onChange={handleChange}
                          className="w-5 h-5 accent-[#FFCD29]"
                        />
                        <span className="text-gray-800">Oui</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="paratonnerre"
                          value="non"
                          checked={formData.paratonnerre === "non"}
                          onChange={handleChange}
                          className="w-5 h-5 accent-[#FFCD29]"
                        />
                        <span className="text-gray-800">Non</span>
                      </label>
                    </div>
                  </div>
        
                  {/* Type de salle */}
                  <div className="mb-4">
                    <label className="block font-semibold text-gray-700 mb-2">
                      Type de salle ?
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="typeSalle"
                          value="avec_eau"
                          checked={formData.typeSalle === "avec_eau"}
                          onChange={handleChange}
                          className="w-5 h-5 accent-[#FFCD29]"
                        />
                        <span className="text-gray-800">Salle avec risque d'eau</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="typeSalle"
                          value="sans_eau"
                          checked={formData.typeSalle === "sans_eau"}
                          onChange={handleChange}
                          className="w-5 h-5 accent-[#FFCD29]"
                        />
                        <span className="text-gray-800">Salle sans eau</span>
                      </label>
                    </div>
                  </div>
        
                  {/* Nombre de points lumineux */}
                  <div className="mb-4 p-3 border border-gray-300 rounded-md bg-gray-50">
                    <label className="block font-semibold text-gray-700 mb-2">
                      Combien avez-vous de points lumineux ?
                    </label>
                    <input
                      type="number"
                      name="lampes"
                      value={formData.lampes || ""}
                      onChange={handleChange}
                      placeholder="Nombre de lampes"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FFCD29] focus:border-[#FFCD29]"
                    />
                  </div>
        
                  {/* Nombre de prises électriques */}
                  <div className="mb-4 p-3 border border-gray-300 rounded-md bg-gray-50">
                    <label className="block font-semibold text-gray-700 mb-2">
                      Combien avez-vous de prises électriques ?
                    </label>
                    <input
                      type="number"
                      name="prises"
                      value={formData.prises || ""}
                      onChange={handleChange}
                      placeholder="Nombre de prises"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FFCD29] focus:border-[#FFCD29]"
                    />
                  </div>
        
                  {/* Bouton de validation */}
                  <Button
                    onClick={handleSubmit}
                    className="w-full mt-4 p-3 text-lg font-semibold text-white bg-[#FFCD29] rounded-md shadow-md hover:bg-[#e6b824] transition-all"
                  >
                    ⚡ Valider
                  </Button>
                </CardContent>
              </Card>
            </div>
        <Footer />
        </div>
    );
}

export default Form;