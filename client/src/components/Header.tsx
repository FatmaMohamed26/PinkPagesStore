import { useState } from 'react';
import { Heart, Search, ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onSearch: (query: string) => void;
  searchQuery: string;
}

export default function Header({ cartItemsCount, onCartClick, onSearch, searchQuery }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-primary fill-primary" data-testid="logo-icon" />
            <h1 className="text-xl sm:text-2xl font-semibold text-foreground" data-testid="site-title">
              Pink Pages
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost" data-testid="link-home">Home</Button>
            <Button variant="ghost" data-testid="link-books">Books</Button>
            <Button variant="ghost" data-testid="link-about">About</Button>
            <Button variant="ghost" data-testid="link-contact">Contact</Button>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 flex-1 md:flex-initial justify-end">
            <div className="relative max-w-xs w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search books..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                className="pl-9 rounded-full"
                data-testid="input-search"
              />
            </div>

            <Button
              size="icon"
              variant="ghost"
              onClick={onCartClick}
              className="relative"
              data-testid="button-cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium" data-testid="text-cart-count">
                  {cartItemsCount}
                </span>
              )}
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              <Button variant="ghost" className="justify-start" data-testid="link-home-mobile">Home</Button>
              <Button variant="ghost" className="justify-start" data-testid="link-books-mobile">Books</Button>
              <Button variant="ghost" className="justify-start" data-testid="link-about-mobile">About</Button>
              <Button variant="ghost" className="justify-start" data-testid="link-contact-mobile">Contact</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
