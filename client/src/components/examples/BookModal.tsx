import { useState } from 'react';
import BookModal from '../BookModal';
import { Button } from '@/components/ui/button';
import romanticCover from '@assets/generated_images/romantic_fiction_book_cover_063db399.png';

export default function BookModalExample() {
  const [isOpen, setIsOpen] = useState(false);
  
  const sampleBook = {
    id: '1',
    title: 'Love in Bloom',
    author: 'Emma Rose',
    price: 19.99,
    cover: romanticCover,
    description: 'A heartwarming tale of love, loss, and second chances. Follow Sarah as she returns to her hometown and discovers that sometimes the greatest love stories are the ones we never expected. With beautiful prose and unforgettable characters, this romance will stay with you long after the last page.',
    category: 'Romance'
  };

  return (
    <div className="p-8">
      <Button onClick={() => setIsOpen(true)}>Open Book Details</Button>
      <BookModal
        book={sampleBook}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onAddToCart={(book) => console.log('Added to cart:', book)}
      />
    </div>
  );
}
