import { useState } from 'react';
import Cart from '../Cart';
import { Button } from '@/components/ui/button';
import romanticCover from '@assets/generated_images/romantic_fiction_book_cover_063db399.png';
import mysteryCover from '@assets/generated_images/mystery_thriller_book_cover_76fb4252.png';

export default function CartExample() {
  const [isOpen, setIsOpen] = useState(false);
  
  const sampleItems = [
    {
      id: '1',
      title: 'Love in Bloom',
      author: 'Emma Rose',
      price: 19.99,
      cover: romanticCover,
      description: 'A heartwarming romance',
      category: 'Romance',
      quantity: 2
    },
    {
      id: '2',
      title: 'Mystery at Midnight',
      author: 'Sarah Mitchell',
      price: 24.99,
      cover: mysteryCover,
      description: 'A thrilling mystery',
      category: 'Mystery',
      quantity: 1
    }
  ];

  return (
    <div className="p-8">
      <Button onClick={() => setIsOpen(true)}>Open Cart</Button>
      <Cart
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={sampleItems}
        onRemoveItem={(id) => console.log('Remove item:', id)}
        onUpdateQuantity={(id, qty) => console.log('Update quantity:', id, qty)}
      />
    </div>
  );
}
