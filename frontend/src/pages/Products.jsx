import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { productCategories, products } from '../utils/mockData';
import { Search, Filter } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    if (categoryId !== 'all') {
      setSearchParams({ category: categoryId });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-700 to-green-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Product Catalog</h1>
          <p className="text-green-200 text-lg max-w-2xl">
            Explore our complete range of eco-friendly tableware. All products made from 100% natural sugarcane bagasse.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 space-y-6">
            <Card className="border-green-200">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-green-900 font-semibold">
                  <Filter className="w-5 h-5" />
                  <span>Categories</span>
                </div>
                
                <div className="space-y-2">
                  <Button
                    variant={selectedCategory === 'all' ? 'default' : 'ghost'}
                    className={`w-full justify-start ${
                      selectedCategory === 'all'
                        ? 'bg-green-700 hover:bg-green-800 text-white'
                        : 'hover:bg-green-50 text-gray-700'
                    }`}
                    onClick={() => handleCategoryChange('all')}
                  >
                    All Products
                  </Button>
                  
                  {productCategories.map((category) => {
                    const IconComponent = LucideIcons[category.icon];
                    return (
                      <Button
                        key={category.id}
                        variant={selectedCategory === category.id ? 'default' : 'ghost'}
                        className={`w-full justify-start ${
                          selectedCategory === category.id
                            ? 'bg-green-700 hover:bg-green-800 text-white'
                            : 'hover:bg-green-50 text-gray-700'
                        }`}
                        onClick={() => handleCategoryChange(category.id)}
                      >
                        {IconComponent && <IconComponent className="w-4 h-4 mr-2" />}
                        {category.name}
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Material Info */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6 space-y-2">
                <h3 className="font-semibold text-green-900">Material Benefits</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ 100% Biodegradable</li>
                  <li>✓ Microwave Safe</li>
                  <li>✓ Freezer Safe</li>
                  <li>✓ Oil Resistant</li>
                  <li>✓ Chemical-Free</li>
                </ul>
              </CardContent>
            </Card>
          </aside>

          {/* Products Grid */}
          <div className="flex-1 space-y-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search products..."
                className="pl-10 border-green-200 focus:ring-green-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Results Count */}
            <div className="text-sm text-gray-600">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="hover:shadow-xl transition-all duration-300 border-green-100 group">
                  <CardContent className="p-6 space-y-4">
                    {/* Product Icon */}
                    <div className="w-full h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center group-hover:from-green-200 group-hover:to-green-300 transition-all">
                      <div className="text-4xl font-bold text-green-700 opacity-50">
                        <img src=`${product.src}`>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg text-green-900">{product.name}</h3>
                      
                      <div className="text-sm text-gray-600 space-y-1">
                        {product.diameter && (
                          <div>Diameter: <span className="font-medium text-gray-900">{product.diameter}</span></div>
                        )}
                        {product.size && (
                          <div>Size: <span className="font-medium text-gray-900">{product.size}</span></div>
                        )}
                        {product.depth && (
                          <div>Depth: <span className="font-medium text-gray-900">{product.depth}</span></div>
                        )}
                        {product.volume && (
                          <div>Volume: <span className="font-medium text-gray-900">{product.volume}</span></div>
                        )}
                        {product.compartments && (
                          <div>Compartments: <span className="font-medium text-gray-900">{product.compartments}</span></div>
                        )}
                      </div>

                      <div className="pt-2">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                          {product.material}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
