import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Cart = () => {
  const cartItems = [
    { id: 1, name: "Modern Sectional Sofa", price: 1299, quantity: 1 },
    { id: 2, name: "Velvet Dining Chairs", price: 449, quantity: 2 },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-foreground mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-16">
              <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
              <p className="text-xl text-muted-foreground mb-4">Your cart is empty</p>
              <Link to="/shop">
                <Button>Continue Shopping</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      <div className="w-32 h-32 shrink-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg"></div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                          <Button variant="ghost" size="icon" className="text-destructive">
                            <Trash2 className="h-5 w-5" />
                          </Button>
                        </div>
                        
                        <p className="text-muted-foreground mb-4">In Stock</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-border rounded-lg">
                            <Button variant="ghost" size="icon">
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-12 text-center font-medium">{item.quantity}</span>
                            <Button variant="ghost" size="icon">
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          
                          <div className="text-right">
                            <p className="text-2xl font-bold text-primary">${item.price * item.quantity}</p>
                            {item.quantity > 1 && (
                              <p className="text-sm text-muted-foreground">${item.price} each</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal</span>
                      <span className="font-medium">${subtotal}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Shipping</span>
                      <span className="font-medium">
                        {shipping === 0 ? "FREE" : `$${shipping}`}
                      </span>
                    </div>
                    {shipping === 0 && (
                      <p className="text-sm text-secondary">🎉 Free shipping applied!</p>
                    )}
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">${total}</span>
                    </div>
                  </div>

                  <Button className="w-full mb-4" size="lg">
                    Proceed to Checkout
                  </Button>
                  
                  <Link to="/shop">
                    <Button variant="outline" className="w-full">
                      Continue Shopping
                    </Button>
                  </Link>

                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      💳 Secure checkout with SSL encryption
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
