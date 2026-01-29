# Children's Wonderland Dashboard

A responsive Next.js dashboard built with TypeScript and Material UI.

## Setup Instructions

1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open `http://localhost:3000`.

## Architectural Choices

- **Next.js App Router**: Used for efficient routing and built-in API handling.
- **MUI Grid**: Implemented to handle the reflow from 3 columns (Desktop) to 1 column (Mobile) seamlessly.
- **Responsive Navigation**: Used a `Drawer` for desktop and `BottomNavigation` for mobile to optimize thumb-reach and screen real estate.
- **Dynamic API Routes**: Created `api/tiles/[id]` to demonstrate fetching detailed data only when requested, reducing initial load weight.

## Improvements with more time

- Add a "Search" bar to filter products.
- Implement a real database like Supabase or MongoDB.
- Add "Add to Cart" functionality.
