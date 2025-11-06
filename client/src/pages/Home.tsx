import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BookCard, { type Book } from '@/components/BookCard';
import BookModal from '@/components/BookModal';
import Cart, { type CartItem } from '@/components/Cart';
import LoadingSpinner from '@/components/LoadingSpinner';
import Footer from '@/components/Footer';

import romanticCover from '@assets/generated_images/romantic_fiction_book_cover_063db399.png';
import mysteryCover from '@assets/generated_images/mystery_thriller_book_cover_76fb4252.png';
import selfHelpCover from '@assets/generated_images/self_help_book_cover_5874ee07.png';
import fantasyCover from '@assets/generated_images/fantasy_adventure_book_cover_2569dc69.png';
import poetryCover from '@assets/generated_images/poetry_collection_book_cover_5f0b623c.png';
import cookbookCover from '@assets/generated_images/dessert_cookbook_cover_3776c3d0.png';
import yaRomanceCover from '@assets/generated_images/young_adult_romance_cover_6a381ffd.png';
import wellnessCover from '@assets/generated_images/wellness_guide_book_cover_fe52bc67.png';
import historicalCover from '@assets/generated_images/historical_fiction_book_cover_60c220c6.png';
import businessCover from '@assets/generated_images/business_book_cover_c0ff8175.png';

const mockBooks: Book[] = [
  {
    id: '1',
    title: 'Love in Bloom',
    author: 'Emma Rose',
    price: 19.99,
    cover: romanticCover,
    description: 'A heartwarming tale of love, loss, and second chances. Follow Sarah as she returns to her hometown and discovers that sometimes the greatest love stories are the ones we never expected.',
    category: 'Romance'
  },
  {
    id: '2',
    title: 'Mystery at Midnight',
    author: 'Sarah Mitchell',
    price: 24.99,
    cover: mysteryCover,
    description: 'When detective Jane Cooper investigates a series of mysterious disappearances, she uncovers secrets that will change everything she thought she knew.',
    category: 'Mystery'
  },
  {
    id: '3',
    title: 'Find Your Power',
    author: 'Maya Johnson',
    price: 16.99,
    cover: selfHelpCover,
    description: 'An empowering guide to discovering your inner strength and living your best life. Transform your mindset and achieve your dreams.',
    category: 'Self-Help'
  },
  {
    id: '4',
    title: 'The Enchanted Forest',
    author: 'Luna Starlight',
    price: 22.99,
    cover: fantasyCover,
    description: 'Journey into a magical realm where ancient secrets await and destiny calls. A young heroine must save her world from darkness.',
    category: 'Fantasy'
  },
  {
    id: '5',
    title: 'Whispers of the Heart',
    author: 'Sophia Blake',
    price: 14.99,
    cover: poetryCover,
    description: 'A beautiful collection of poetry exploring love, nature, and the human experience. Each verse touches the soul.',
    category: 'Poetry'
  },
  {
    id: '6',
    title: 'Sweet Delights',
    author: 'Chef Isabella',
    price: 29.99,
    cover: cookbookCover,
    description: 'Indulge in 100 irresistible dessert recipes that will make every occasion special. From simple treats to showstopping cakes.',
    category: 'Cookbook'
  },
  {
    id: '7',
    title: 'Summer Dreams',
    author: 'Lily Anderson',
    price: 18.99,
    cover: yaRomanceCover,
    description: 'A sweet coming-of-age romance about friendship, first love, and finding yourself during one unforgettable summer.',
    category: 'Young Adult'
  },
  {
    id: '8',
    title: 'Mindful Living',
    author: 'Dr. Grace Chen',
    price: 21.99,
    cover: wellnessCover,
    description: 'Practical strategies for reducing stress and finding peace in our busy modern world. Your guide to wellness and balance.',
    category: 'Wellness'
  },
  {
    id: '9',
    title: 'The Victorian Secret',
    author: 'Eleanor Pemberton',
    price: 23.99,
    cover: historicalCover,
    description: 'Set in 1890s London, a tale of forbidden love and family secrets that spans generations. Historical fiction at its finest.',
    category: 'Historical Fiction'
  },
  {
    id: '10',
    title: 'Boss Lady',
    author: 'Alexandra Stone',
    price: 26.99,
    cover: businessCover,
    description: 'Essential strategies for women in business. Learn to lead with confidence and build the career you deserve.',
    category: 'Business'
  }
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const filteredBooks = useMemo(() => {
    if (!searchQuery.trim()) return mockBooks;
    
    const query = searchQuery.toLowerCase();
    return mockBooks.filter(
      book =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleAddToCart = (book: Book) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === book.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...book, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (bookId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== bookId));
  };

  const handleUpdateQuantity = (bookId: string, quantity: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === bookId ? { ...item, quantity } : item
      )
    );
  };

  const handleViewDetails = (book: Book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header
        cartItemsCount={totalCartItems}
        onCartClick={() => setIsCartOpen(true)}
        onSearch={setSearchQuery}
        searchQuery={searchQuery}
      />

      <main className="flex-1">
        <Hero />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
              {searchQuery ? 'Search Results' : 'Featured Books'}
            </h2>
            <p className="text-muted-foreground" data-testid="text-books-count">
              {filteredBooks.length} {filteredBooks.length === 1 ? 'book' : 'books'}
            </p>
          </div>

          {isLoading ? (
            <LoadingSpinner />
          ) : filteredBooks.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-2" data-testid="text-no-results">
                No books found
              </p>
              <p className="text-muted-foreground">
                Try searching with different keywords
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBooks.map(book => (
                <BookCard
                  key={book.id}
                  book={book}
                  onAddToCart={handleAddToCart}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />

      <BookModal
        book={selectedBook}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={handleAddToCart}
      />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </div>
  );
}
