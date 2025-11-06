import { X, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import type { Book } from './BookCard';

interface BookModalProps {
  book: Book | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (book: Book) => void;
}

export default function BookModal({ book, isOpen, onClose, onAddToCart }: BookModalProps) {
  if (!book) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto" data-testid="modal-book-details">
        <DialogHeader>
          <DialogTitle className="sr-only">Book Details</DialogTitle>
          <Button
            size="icon"
            variant="ghost"
            className="absolute right-4 top-4"
            onClick={onClose}
            data-testid="button-close-modal"
          >
            <X className="w-5 h-5" />
          </Button>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="aspect-[3/4] rounded-lg overflow-hidden bg-muted">
            <img
              src={book.cover}
              alt={book.title}
              className="w-full h-full object-cover"
              data-testid="img-modal-book-cover"
            />
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-start gap-2 mb-2">
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground flex-1" data-testid="text-modal-title">
                {book.title}
              </h2>
              <Button size="icon" variant="ghost" className="flex-shrink-0" data-testid="button-favorite">
                <Heart className="w-5 h-5" />
              </Button>
            </div>
            
            <p className="text-lg text-muted-foreground italic mb-4" data-testid="text-modal-author">
              by {book.author}
            </p>
            
            <div className="mb-4">
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium" data-testid="text-modal-category">
                {book.category}
              </span>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold text-foreground mb-2">Description</h3>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-modal-description">
                {book.description}
              </p>
            </div>
            
            <div className="mt-auto">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">Price</span>
                <span className="text-3xl font-semibold text-primary" data-testid="text-modal-price">
                  ${book.price.toFixed(2)}
                </span>
              </div>
              
              <Button
                size="lg"
                className="w-full gap-2"
                onClick={() => {
                  onAddToCart(book);
                  onClose();
                }}
                data-testid="button-modal-add-to-cart"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
