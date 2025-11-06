import { Heart, BookOpen, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
            <Heart className="w-8 h-8 text-primary fill-primary animate-pulse" />
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground mb-4" data-testid="hero-title">
            Welcome to Pink Pages Bookstore
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8" data-testid="hero-subtitle">
            Discover your next favorite book in our curated collection of stories that inspire, empower, and enchant.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="gap-2" data-testid="button-browse">
              <BookOpen className="w-5 h-5" />
              Browse Books
            </Button>
            <Button size="lg" variant="outline" data-testid="button-bestsellers">
              View Bestsellers
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-primary fill-primary" />
              <span>1000+ Books</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-primary" />
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>New Arrivals Weekly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
