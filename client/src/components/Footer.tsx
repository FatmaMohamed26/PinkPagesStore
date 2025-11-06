import { Heart, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-primary/5 border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-primary fill-primary" />
              <h3 className="text-lg font-semibold text-foreground">Pink Pages</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Your destination for books that inspire, empower, and enchant. Curated with love for book lovers everywhere.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Button variant="ghost" className="justify-start p-0 h-auto text-muted-foreground hover:text-primary no-default-hover-elevate" data-testid="footer-link-home">
                Home
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto text-muted-foreground hover:text-primary no-default-hover-elevate" data-testid="footer-link-books">
                Books
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto text-muted-foreground hover:text-primary no-default-hover-elevate" data-testid="footer-link-about">
                About Us
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto text-muted-foreground hover:text-primary no-default-hover-elevate" data-testid="footer-link-contact">
                Contact
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-2">
              <Button size="icon" variant="outline" data-testid="button-facebook">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="outline" data-testid="button-instagram">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="outline" data-testid="button-twitter">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Pink Pages Bookstore. Made with <Heart className="w-4 h-4 inline text-primary fill-primary" /> for book lovers.
          </p>
        </div>
      </div>
    </footer>
  );
}
