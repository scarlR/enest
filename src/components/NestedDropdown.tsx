import React, { useState, useRef, useEffect } from 'react';

interface Category {
  id: number;
  name: string;
  subcategories: string[];
}

const categories: Category[] = [
  { 
    id: 1, 
    name: 'Agriculture', 
    subcategories: ['Crop Production', 'Soil Science', 'Agricultural Economics', 'Agronomy'] 
  },
  { 
    id: 2, 
    name: 'Food Engineering', 
    subcategories: ['Food Processing', 'Food Safety', 'Packaging Technology', 'Quality Control'] 
  },
  { 
    id: 3, 
    name: 'Dairy Science', 
    subcategories: ['Milk Production', 'Dairy Products', 'Dairy Microbiology', 'Dairy Farm Management'] 
  },
  { 
    id: 4, 
    name: 'Horticulture', 
    subcategories: ['Fruit Production', 'Vegetable Crops', 'Ornamental Plants', 'Landscape Design'] 
  },
  { 
    id: 5, 
    name: 'Floriculture', 
    subcategories: ['Cut Flowers', 'Greenhouse Management', 'Floral Design', 'Plant Breeding'] 
  },
  { 
    id: 6, 
    name: 'Permaculture', 
    subcategories: ['Sustainable Design', 'Agroforestry', 'Water Management', 'Soil Regeneration'] 
  },
];

const NestedDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false); // Close the dropdown if clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Cleanup on unmount
    };
  }, []);

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
  };

  const handleSubcategoryClick = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
    setIsOpen(false); // Close the dropdown after selecting a subcategory
  };

  return (
    <div className="relative w-64" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span className="text-primary">{selectedSubcategory || (selectedCategory && selectedCategory.name) || 'Category'}</span>
      </button>
      {isOpen && (
        <div className="absolute z-10 w-64 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          <ul className="py-1">
            {categories.map((category) => (
              <li
                key={category.id}
                className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                  selectedCategory && selectedCategory.id === category.id ? 'bg-purple-100 text-primary' : 'text-primary'
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category.name}
                <span className="float-right">&rsaquo;</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {selectedCategory && isOpen && (
        <div className="absolute z-20 w-64 mt-1 bg-white border border-gray-300 rounded-md shadow-lg" style={{ left: '100%', top: '0' }}>
          <ul className="py-1">
            {selectedCategory.subcategories.map((subcategory, index) => (
              <li
                key={index}
                className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                  selectedSubcategory === subcategory ? 'bg-purple-100 text-primary' : 'text-primary'
                }`}
                onClick={() => handleSubcategoryClick(subcategory)}
              >
                {subcategory}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NestedDropdown;