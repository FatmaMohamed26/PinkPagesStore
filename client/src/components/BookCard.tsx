import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  cover: string;
  description: string;
  category: string;
}

interface BookCardProps {
  book: Book;
  onAddToCart: (book: Book) => void;
  onViewDetails: (book: Book) => void;
}

export default function BookCard({ book, onAddToCart, onViewDetails }: BookCardProps) {
  return (
    <Card 
      className="group cursor-pointer hover-elevate active-elevate-2 transition-all duration-300 overflow-visible"
      onClick={() => onViewDetails(book)}
      data-testid={`card-book-${book.id}`}
    >
      <CardContent className="p-4">
        <div className="aspect-[3/4] rounded-lg overflow-hidden mb-4 bg-muted">
          <img
            src={book.cover}
            alt={book.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            data-testid={`img-book-cover-${book.id}`}
          />
        </div>
        
        <h3 className="font-semibold text-foreground line-clamp-2 mb-1" data-testid={`text-book-title-${book.id}`}>
          {book.title}
        </h3>
        
        <p className="text-sm text-muted-foreground italic mb-2" data-testid={`text-book-author-${book.id}`}>
          by {book.author}
        </p>
        
        <p className="text-lg font-semibold text-primary" data-testid={`text-book-price-${book.id}`}>
          ${book.price.toFixed(2)}
        </p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full gap-2"
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(book);
          }}
          data-testid={`button-add-to-cart-${book.id}`}
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
