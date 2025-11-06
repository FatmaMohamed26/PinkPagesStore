# Pink Pages Bookstore - Design Guidelines

## Design Approach
**Reference-Based**: Drawing inspiration from feminine e-commerce sites like Glossier and modern bookstores like Book of the Month, with a distinctly pink, book-lover aesthetic.

## Core Design Principles
1. **Feminine & Approachable**: Soft, inviting design that appeals to young women and book enthusiasts
2. **Clean & Modern**: Contemporary e-commerce layout with clear visual hierarchy
3. **Playful Details**: Subtle decorative elements (hearts, book icons) without overwhelming the content

---

## Typography
**Primary Font**: Poppins (via Google Fonts CDN)
- Headers (h1): 2.5rem, Semi-Bold (600)
- Headers (h2): 2rem, Medium (500)
- Headers (h3): 1.5rem, Medium (500)
- Body Text: 1rem, Regular (400)
- Buttons/CTAs: 1rem, Medium (500)

**Hierarchy**:
- Logo: Large, playful font treatment with decorative element (heart or book icon)
- Section headings: Clear spacing, centered or left-aligned based on content
- Book titles: Prominent but not overpowering price/author info

---

## Layout System
**Spacing Units**: Tailwind units of 2, 4, 6, 8, 12, 16 (p-4, m-8, gap-6, etc.)

**Container Strategy**:
- Max-width: max-w-7xl for main content
- Padding: px-4 (mobile), px-8 (tablet), px-12 (desktop)
- Section spacing: py-12 (mobile), py-16 (desktop)

**Grid System**:
- Books Grid: 1 column (mobile), 2 columns (tablet), 3-4 columns (desktop)
- Grid gap: gap-6 to gap-8
- Card padding: p-4 to p-6

---

## Component Library

### Navigation Header
- Sticky/fixed header with logo on left
- Navigation links centered or right-aligned (Home, Books, About, Contact)
- Search bar integrated in header (expandable on mobile)
- Cart icon with badge showing item count in top-right
- White background with subtle bottom shadow

### Hero Section (Homepage)
- Medium height section (60-70vh) with soft pink gradient background or light pink solid
- Centered headline: "Welcome to Pink Pages Bookstore" with decorative hearts
- Subheading about the store's mission
- CTA button: "Browse Books" or "Start Shopping"
- Optional: Decorative book illustration or subtle pattern

### Book Cards
- White background with soft shadow (shadow-md)
- Rounded corners (rounded-xl)
- Book cover image at top (aspect-ratio-[2/3], fills card width)
- Content padding: p-4
- Title: Bold, 1.1rem
- Author: Italic, gray text, 0.9rem
- Price: Bold, pink accent color, 1.1rem
- "Add to Cart" button: Full-width, rounded-lg, pink background
- Hover: Lift effect (transform translateY), increased shadow, subtle scale

### Modal (Book Details)
- Overlay: Semi-transparent dark background
- Modal card: White, centered, max-w-2xl, rounded-2xl
- Two-column layout (desktop): Image left, details right
- Single column (mobile): Stacked
- Includes: Large cover, full description, author bio, price, quantity selector, "Add to Cart" button
- Close button: Top-right corner, rounded circle

### Cart Sidebar/Dropdown
- Slides in from right when cart icon clicked
- White background, shadow-xl
- Lists cart items with small thumbnails
- Shows subtotal
- "View Cart" and "Checkout" buttons at bottom

### Search Bar
- Rounded-full input field with search icon
- Light pink border, pink focus state
- Filters books in real-time as user types

### Footer
- Light pink background
- 2-3 columns (desktop): About, Quick Links, Social Media
- Single column stacked (mobile)
- Copyright text centered at bottom
- Minimal padding: py-8

---

## Interactions & Animations

### Hover Effects
- Cards: Subtle lift (translateY(-4px)) + shadow increase
- Buttons: Slight darkening of background
- Links: Underline or color shift to darker pink

### Loading Animation
- Centered spinner or pulsing hearts icon
- Light pink color (#FFB6C1 or similar)
- Appears on initial page load and when filtering books

### Micro-interactions
- Heart icon animation when adding to cart (optional pulse or bounce)
- Cart badge animates when count increases
- Smooth transitions (transition-all duration-300)

---

## Responsive Breakpoints
- Mobile: < 640px (sm)
- Tablet: 640px - 1024px (md to lg)
- Desktop: > 1024px (lg+)

**Mobile Adjustments**:
- Hamburger menu for navigation
- Single-column book grid
- Stacked modal content
- Smaller font sizes (scale down by 10-15%)

---

## Accessibility
- Color contrast meets WCAG AA standards (ensure pink text on white has sufficient contrast)
- Focus states visible on all interactive elements (pink outline)
- Alt text for all book cover images
- Keyboard navigation for modal and cart
- ARIA labels for icon buttons

---

## Images

### Book Covers
- Placeholder book covers needed (10-15 sample books)
- Aspect ratio: 2:3 (standard book proportion)
- Use placeholder service or free book cover images
- Ensure variety in cover colors/styles

### Hero Section (Optional)
- Subtle decorative illustration: Stack of books, reading girl silhouette, or floral book pattern
- If used: SVG or optimized PNG, light pink tones, positioned as background element or side accent
- Alternative: Solid gradient background (light pink to white)

### Icons
- Use Heroicons or Font Awesome (CDN)
- Book icon, heart icon, search icon, cart icon, close (X) icon, user icon
- All icons in pink accent color or gray that turns pink on hover

---

## Special Features

### Loading State
- Displays while books are "loading" (simulate with setTimeout)
- Centered spinner with pink color
- Fades out smoothly when content ready

### Empty States
- Empty cart: Icon + "Your cart is empty" message + "Browse Books" button
- No search results: "No books found" with suggestion to try different keywords

### Decorative Elements
- Small heart icons near section headings
- Subtle book-related patterns in background (very light, not distracting)
- Rounded corners throughout for softness
- Soft shadows (never harsh black shadows)

---

This design creates an inviting, modern bookstore experience with a distinctly feminine and playful aesthetic while maintaining professional e-commerce functionality.