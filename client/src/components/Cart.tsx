import { X, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import type { Book } from './BookCard';

export interface CartItem extends Book {
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (bookId: string) => void;
  onUpdateQuantity: (bookId: string, quantity: number) => void;
}

export default function Cart({ isOpen, onClose, items, onRemoveItem, onUpdateQuantity }: CartProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg" data-testid="cart-sidebar">
        <SheetHeader className="mb-6">
          <SheetTitle className="flex items-center gap-2 text-xl">
            <ShoppingBag className="w-5 h-5 text-primary" />
            Shopping Cart
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center" data-testid="empty-cart">
            <ShoppingBag className="w-16 h-16 text-muted-foreground mb-4" />
            <p className="text-lg font-medium text-foreground mb-2">Your cart is empty</p>
            <p className="text-muted-foreground mb-6">Add some books to get started!</p>
            <Button onClick={onClose} data-testid="button-browse-books">
              Browse Books
            </Button>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto -mx-6 px-6">
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 bg-card rounded-lg border border-card-border"
                    data-testid={`cart-item-${item.id}`}
                  >
                    <img
                      src={item.cover}
                      alt={item.title}
                      className="w-16 h-24 object-cover rounded"
                      data-testid={`img-cart-item-${item.id}`}
                    />
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground line-clamp-1 mb-1" data-testid={`text-cart-item-title-${item.id}`}>
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">{item.author}</p>
                      <p className="text-primary font-semibold" data-testid={`text-cart-item-price-${item.id}`}>
                        ${item.price.toFixed(2)}
                      </p>
                      
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          data-testid={`button-decrease-${item.id}`}
                        >
                          -
                        </Button>
                        <span className="w-8 text-center font-medium" data-testid={`text-quantity-${item.id}`}>
                          {item.quantity}
                        </span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          data-testid={`button-increase-${item.id}`}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                    
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => onRemoveItem(item.id)}
                      className="flex-shrink-0"
                      data-testid={`button-remove-${item.id}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-4 mt-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-medium text-foreground">Subtotal</span>
                <span className="text-2xl font-semibold text-primary" data-testid="text-cart-subtotal">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              
              <Button size="lg" className="w-full" data-testid="button-checkout">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
