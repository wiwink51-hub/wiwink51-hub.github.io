import sofaModern from "@/assets/products/sofa-modern.jpg";
import chairVelvet from "@/assets/products/chair-velvet.jpg";
import tableCoffee from "@/assets/products/table-coffee.jpg";
import chairDining from "@/assets/products/chair-dining.jpg";
import furnitureBookshelf from "@/assets/products/furniture-bookshelf.jpg";
import furnitureNightstand from "@/assets/products/furniture-nightstand.jpg";
import furnitureCredenza from "@/assets/products/furniture-credenza.jpg";
import furnitureConsole from "@/assets/products/furniture-console.jpg";
import bedPlatform from "@/assets/products/bed-platform.jpg";

import lampFloor from "@/assets/products/lamp-floor.jpg";
import lampPendant from "@/assets/products/lamp-pendant.jpg";
import lampTable from "@/assets/products/lamp-table.jpg";
import lightingChandelier from "@/assets/products/lighting-chandelier.jpg";
import lightingDesk from "@/assets/products/lighting-desk.jpg";
import lightingSconce from "@/assets/products/lighting-sconce.jpg";

import decorVases from "@/assets/products/decor-vases.jpg";
import decorWallArt from "@/assets/products/decor-wall-art.jpg";
import decorPillows from "@/assets/products/decor-pillows.jpg";
import decorMirror from "@/assets/products/decor-mirror.jpg";
import decorCanvas from "@/assets/products/decor-canvas.jpg";
import decorBlanket from "@/assets/products/decor-blanket.jpg";

import rugJute from "@/assets/products/rug-jute.jpg";
import rugPersian from "@/assets/products/rug-persian.jpg";

import beddingLuxury from "@/assets/products/bedding-luxury.jpg";
import beddingQuilt from "@/assets/products/bedding-quilt.jpg";
import beddingLinen from "@/assets/products/bedding-linen.jpg";

import kitchenStools from "@/assets/products/kitchen-stools.jpg";
import kitchenDiningTable from "@/assets/products/kitchen-dining-table.jpg";
import kitchenOrganizer from "@/assets/products/kitchen-organizer.jpg";
import kitchenDinnerware from "@/assets/products/kitchen-dinnerware.jpg";

import outdoorPatioSet from "@/assets/products/outdoor-patio-set.jpg";
import outdoorLounge from "@/assets/products/outdoor-lounge.jpg";
import outdoorBench from "@/assets/products/outdoor-bench.jpg";
import outdoorFirepit from "@/assets/products/outdoor-firepit.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  category: string;
  image: string;
  description?: string;
}

export const products: Product[] = [
  // Furniture (9 items)
  {
    id: 1,
    name: "Modern Sectional Sofa",
    price: 1299,
    rating: 4.8,
    reviews: 342,
    category: "Furniture",
    image: sofaModern,
    description: "Luxurious sectional sofa with premium fabric upholstery and solid wood frame"
  },
  {
    id: 2,
    name: "Velvet Accent Chair",
    price: 549,
    rating: 4.9,
    reviews: 218,
    category: "Furniture",
    image: chairVelvet,
    description: "Elegant velvet armchair with gold metal legs"
  },
  {
    id: 3,
    name: "Industrial Coffee Table",
    price: 399,
    rating: 4.7,
    reviews: 156,
    category: "Furniture",
    image: tableCoffee,
    description: "Modern industrial coffee table with natural wood top and metal frame"
  },
  {
    id: 4,
    name: "Scandinavian Dining Chairs",
    price: 449,
    rating: 4.8,
    reviews: 189,
    category: "Furniture",
    image: chairDining,
    description: "Set of 4 minimalist dining chairs in white oak"
  },
  {
    id: 5,
    name: "Minimalist Bookshelf",
    price: 379,
    rating: 4.6,
    reviews: 145,
    category: "Furniture",
    image: furnitureBookshelf,
    description: "5-shelf bookshelf in white oak with clean lines"
  },

  // Lighting (6 items)
  {
    id: 6,
    name: "Arc Floor Lamp",
    price: 329,
    rating: 4.7,
    reviews: 203,
    category: "Lighting",
    image: lampFloor,
    description: "Modern arc floor lamp with marble base and brass finish"
  },
  {
    id: 7,
    name: "Geometric Pendant Light",
    price: 249,
    rating: 4.8,
    reviews: 167,
    category: "Lighting",
    image: lampPendant,
    description: "Elegant pendant light with brass frame and frosted glass"
  },
  {
    id: 8,
    name: "Ceramic Table Lamp",
    price: 149,
    rating: 4.9,
    reviews: 234,
    category: "Lighting",
    image: lampTable,
    description: "Minimalist table lamp with ceramic base and linen shade"
  },
  {
    id: 9,
    name: "Globe Chandelier",
    price: 599,
    rating: 4.8,
    reviews: 156,
    category: "Lighting",
    image: lightingChandelier,
    description: "Contemporary chandelier with multiple glass globes"
  },
  {
    id: 10,
    name: "LED Desk Lamp",
    price: 129,
    rating: 4.7,
    reviews: 289,
    category: "Lighting",
    image: lightingDesk,
    description: "Modern adjustable desk lamp in matte black"
  },

  // Decor (6 items)
  {
    id: 11,
    name: "Ceramic Vase Set",
    price: 89,
    rating: 4.9,
    reviews: 312,
    category: "Decor",
    image: decorVases,
    description: "Set of 3 modern ceramic vases in terracotta and cream"
  },
  {
    id: 12,
    name: "Botanical Wall Art Set",
    price: 199,
    rating: 4.8,
    reviews: 245,
    category: "Decor",
    image: decorWallArt,
    description: "Framed botanical prints set with gold frames"
  },
  {
    id: 13,
    name: "Velvet Throw Pillows",
    price: 79,
    rating: 4.7,
    reviews: 198,
    category: "Decor",
    image: decorPillows,
    description: "Set of 4 luxury velvet pillows in coordinating colors"
  },
  {
    id: 14,
    name: "Gold Round Mirror",
    price: 249,
    rating: 4.9,
    reviews: 187,
    category: "Decor",
    image: decorMirror,
    description: "Modern wall mirror with round gold metal frame"
  },
  {
    id: 15,
    name: "Abstract Canvas Art",
    price: 299,
    rating: 4.8,
    reviews: 134,
    category: "Decor",
    image: decorCanvas,
    description: "Contemporary abstract art in terracotta and beige tones"
  },

  // Rugs (2 items)
  {
    id: 16,
    name: "Jute Area Rug",
    price: 299,
    rating: 4.7,
    reviews: 223,
    category: "Rugs",
    image: rugJute,
    description: "Hand-woven jute rug with geometric pattern"
  },
  {
    id: 17,
    name: "Persian Style Rug",
    price: 599,
    rating: 4.9,
    reviews: 178,
    category: "Rugs",
    image: rugPersian,
    description: "Traditional Persian rug with intricate patterns"
  },

  // Bedding (3 items)
  {
    id: 18,
    name: "Luxury Cotton Bedding",
    price: 249,
    rating: 4.9,
    reviews: 456,
    category: "Bedding",
    image: beddingLuxury,
    description: "Hotel quality white cotton bedding set"
  },
  {
    id: 19,
    name: "Quilted Bedspread",
    price: 179,
    rating: 4.7,
    reviews: 267,
    category: "Bedding",
    image: beddingQuilt,
    description: "Cozy quilted bedspread in sage green"
  },
  {
    id: 20,
    name: "Linen Duvet Cover",
    price: 299,
    rating: 4.8,
    reviews: 334,
    category: "Bedding",
    image: beddingLinen,
    description: "Premium linen duvet cover in natural oatmeal"
  },

  // Kitchen (4 items)
  {
    id: 21,
    name: "Industrial Bar Stools",
    price: 329,
    rating: 4.8,
    reviews: 189,
    category: "Kitchen",
    image: kitchenStools,
    description: "Set of 3 modern bar stools with wooden seats"
  },
  {
    id: 22,
    name: "Oak Dining Table",
    price: 899,
    rating: 4.9,
    reviews: 156,
    category: "Kitchen",
    image: kitchenDiningTable,
    description: "Contemporary dining table in natural oak wood"
  },
  {
    id: 23,
    name: "Bamboo Kitchen Organizer",
    price: 149,
    rating: 4.7,
    reviews: 298,
    category: "Kitchen",
    image: kitchenOrganizer,
    description: "Complete kitchen cabinet organizer set"
  },
  {
    id: 24,
    name: "Ceramic Dinnerware Set",
    price: 199,
    rating: 4.8,
    reviews: 412,
    category: "Kitchen",
    image: kitchenDinnerware,
    description: "16-piece dinnerware set in modern colors"
  },

  // Outdoor (4 items)
  {
    id: 25,
    name: "Wicker Patio Set",
    price: 1299,
    rating: 4.8,
    reviews: 234,
    category: "Outdoor",
    image: outdoorPatioSet,
    description: "Complete outdoor patio furniture set with cushions"
  },
  {
    id: 26,
    name: "Teak Lounge Chair",
    price: 549,
    rating: 4.9,
    reviews: 167,
    category: "Outdoor",
    image: outdoorLounge,
    description: "Teak wood outdoor lounge chair with white cushions"
  },
  {
    id: 27,
    name: "Garden Bench",
    price: 379,
    rating: 4.7,
    reviews: 145,
    category: "Outdoor",
    image: outdoorBench,
    description: "Classic teak wood garden bench"
  },
  {
    id: 28,
    name: "Fire Pit Table",
    price: 799,
    rating: 4.8,
    reviews: 198,
    category: "Outdoor",
    image: outdoorFirepit,
    description: "Modern steel fire pit table for outdoor gatherings"
  },

  // Additional items for variety
  {
    id: 29,
    name: "Modern Nightstand",
    price: 299,
    rating: 4.8,
    reviews: 223,
    category: "Furniture",
    image: furnitureNightstand,
    description: "Walnut nightstand with gold handles"
  },
  {
    id: 30,
    name: "Mid-Century Credenza",
    price: 899,
    rating: 4.9,
    reviews: 178,
    category: "Furniture",
    image: furnitureCredenza,
    description: "Retro style walnut credenza with brass legs"
  },
  {
    id: 31,
    name: "Marble Console Table",
    price: 649,
    rating: 4.8,
    reviews: 134,
    category: "Furniture",
    image: furnitureConsole,
    description: "Elegant console table with marble top"
  },
  {
    id: 32,
    name: "Platform Bed Frame",
    price: 899,
    rating: 4.8,
    reviews: 289,
    category: "Furniture",
    image: bedPlatform,
    description: "Modern platform bed with upholstered headboard"
  },
  {
    id: 33,
    name: "Brass Wall Sconce",
    price: 179,
    rating: 4.7,
    reviews: 156,
    category: "Lighting",
    image: lightingSconce,
    description: "Contemporary wall sconce with brass finish"
  },
  {
    id: 34,
    name: "Wool Throw Blanket",
    price: 129,
    rating: 4.9,
    reviews: 267,
    category: "Decor",
    image: decorBlanket,
    description: "Handwoven wool throw in neutral stripes"
  },
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
};

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};
