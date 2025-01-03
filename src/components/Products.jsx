import React, { useState } from 'react';
import { FileText } from 'lucide-react';

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [selectedRegion, setSelectedRegion] = useState('all');

  const products = [
    {
      name: "Online Middleware",
      description: "A centralized integration platform integrates the multiple applications bank wide.",
      availability: "24 hrs x 7 days",
      regions: ["UAE", "Qatar", "Bahrain", "Egypt", "India", "Kuwait", "Pakistan", "Oman"],
      architectureLink: "/middleware-arch.png",
      imageSrc: "/edms.jpg",
      category: "Core"
    },
    {
      name: "Mashreq API Gateway",
      description: "API lifecycle management platform.",
      availability: "24 hrs x 7 days",
      regions: ["UAE", "Qatar", "Bahrain", "Egypt", "India", "Kuwait", "Pakistan", "Oman"],
      architectureLink: "/api-gateway-arch.png",
      imageSrc: "/Integration.jpeg",
      category: "Integration"
    },
    {
      name: "Microservices",
      description: "Platform which builds the reusable components for handling definite business use case.",
      availability: "24 hrs x 7 days",
      regions: ["UAE", "Qatar"],
      architectureLink: "/microservices-arch.png",
      imageSrc: "/automation.jpg",
      category: "Platform"
    }
  ];

  const regions = [...new Set(products.flatMap(product => product.regions))].sort();

  const handleArchitectureClick = (e, imgSrc) => {
    e.stopPropagation();
    setCurrentImage(imgSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setZoomLevel(1);
  };

  const handleZoom = (type) => {
    setZoomLevel(prev => type === 'in' ? Math.min(prev + 0.1, 2) : Math.max(prev - 0.1, 0.5));
  };

  const filteredProducts = selectedRegion === 'all'
    ? products 
    : products.filter(product => product.regions.includes(selectedRegion));

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-300 via-red-300 to-blue-400 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end mb-12">
          <select
            className="px-4 py-2 rounded-lg border-2 border-red-600 bg-white text-black focus:outline-none focus:border-gray-800"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
          >
            <option value="all">All Regions</option>
            {regions.map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-l from-orange-300 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110"
            >
              <div className="relative">
                <img
                  src={product.imageSrc}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-4 right-4 px-3 py-1 bg-black text-white rounded-full text-sm">
                  {product.category}
                </span>
              </div>

              <div className="p-6 bg-gradient-to-l from-orange-300 to-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                
                <button
                  onClick={(e) => handleArchitectureClick(e, product.architectureLink)}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-3"
                >
                  <FileText className="w-4 h-4 mr-1" />
                  Architecture
                </button>

                <p className="text-gray-600 text-sm">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white p-6 rounded-xl max-w-4xl w-full mx-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
            >
              ×
            </button>
            <div className="mt-8 overflow-auto">
              <img
                src={currentImage}
                alt="Architecture Diagram"
                style={{ transform: `scale(${zoomLevel})`, transition: 'transform 0.2s ease' }}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;