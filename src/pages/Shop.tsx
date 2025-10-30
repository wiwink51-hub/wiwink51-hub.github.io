import { useState } from "react";
import { Link } from "react-router-dom";
import { Filter, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const Shop = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(true);

  const categories = ["Furniture", "Lighting", "Decor", "Rugs", "Bedding", "Kitchen", "Outdoor"];
  const priceRanges = ["Under $300", "$300 - $600", "$600 - $1000", "Over $1000"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Shop All Products</h1>
          <p className="text-muted-foreground">Discover our complete collection of furniture and home decor</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <aside className="lg:w-64 shrink-0">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-semibold text-lg text-foreground">Filters</h2>
                    <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)} className="lg:hidden">
                      ✕
                    </Button>
                  </div>

                  {/* Categories */}
                  <div className="mb-6">
                    <h3 className="font-medium text-foreground mb-3">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center gap-2">
                          <Checkbox id={category} />
                          <label htmlFor={category} className="text-sm text-muted-foreground cursor-pointer">
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="mb-6">
                    <h3 className="font-medium text-foreground mb-3">Price Range</h3>
                    <div className="space-y-2">
                      {priceRanges.map((range) => (
                        <div key={range} className="flex items-center gap-2">
                          <Checkbox id={range} />
                          <label htmlFor={range} className="text-sm text-muted-foreground cursor-pointer">
                            {range}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Rating */}
                  <div>
                    <h3 className="font-medium text-foreground mb-3">Rating</h3>
                    <div className="space-y-2">
                      {[4, 3, 2, 1].map((stars) => (
                        <div key={stars} className="flex items-center gap-2">
                          <Checkbox id={`${stars}-stars`} />
                          <label htmlFor={`${stars}-stars`} className="text-sm text-muted-foreground cursor-pointer">
                            {stars}+ ⭐
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-6">
              <div className="flex items-center gap-4">
                {!showFilters && (
                  <Button variant="outline" onClick={() => setShowFilters(true)}>
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                )}
                <span className="text-sm text-muted-foreground">
                  Showing {products.length} products
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <Select defaultValue="featured">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Best Rating</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex gap-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="icon"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="icon"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className={viewMode === "grid" 
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
              : "flex flex-col gap-4"
            }>
              {products.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                    {viewMode === "grid" ? (
                      <>
                        <div className="aspect-square overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                            {product.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-primary">${product.price}</span>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <span>⭐</span>
                              <span>{product.rating}</span>
                              <span>({product.reviews})</span>
                            </div>
                          </div>
                        </CardContent>
                      </>
                    ) : (
                      <div className="flex gap-4 p-4">
                        <div className="w-32 h-32 shrink-0 overflow-hidden rounded">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                            {product.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                            <span>⭐</span>
                            <span>{product.rating}</span>
                            <span>({product.reviews} reviews)</span>
                          </div>
                          <span className="text-xl font-bold text-primary">${product.price}</span>
                        </div>
                      </div>
                    )}
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
