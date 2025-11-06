import { Heart } from 'lucide-react';

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-16" data-testid="loading-spinner">
      <Heart className="w-12 h-12 text-primary fill-primary animate-pulse mb-4" />
      <p className="text-muted-foreground">Loading books...</p>
    </div>
  );
}
