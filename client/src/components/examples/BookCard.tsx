import BookCard from '../BookCard';
import romanticCover from '@assets/generated_images/romantic_fiction_book_cover_063db399.png';

export default function BookCardExample() {
  const sampleBook = {
    id: '1',
    title: 'Love in Bloom',
    author: 'Emma Rose',
    price: 19.99,
    cover: romanticCover,
    description: 'A heartwarming romance novel',
    category: 'Romance'
  };

  return (
    <div className="p-8 max-w-xs">
      <BookCard
        book={sampleBook}
        onAddToCart={(book) => console.log('Added to cart:', book)}
        onViewDetails={(book) => console.log('View details:', book)}
      />
    </div>
  );
}
