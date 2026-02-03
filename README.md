# Beany Coffee Shop

A modern, responsive Next.js website for Beany Coffee Shop - "Beyond Beans, Beyond Coffee. A place where friends make the perfect blend."

## Features

- 🎨 Built with Next.js 14 and TypeScript
- 🎭 Styled with Tailwind CSS and shadcn/ui components
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Fast and optimized performance
- 🎯 SEO-friendly structure
- ♿ Accessible components

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Footer.tsx      # Footer component
│   ├── Hero.tsx        # Hero section
│   ├── Features.tsx    # Features section
│   ├── MenuPreview.tsx # Menu preview
│   └── Testimonials.tsx # Testimonials section
├── lib/                # Utility functions
│   └── utils.ts        # Utility helpers
└── public/             # Static assets
    └── images/         # Image files (add your photos here)
```

## Adding Images

Place your coffee shop images in the `public/images/` folder. The website references these images:

- `hero-coffee.jpg` - Hero section background
- `espresso.jpg` - Espresso menu item
- `cappuccino.jpg` - Cappuccino menu item
- `latte.jpg` - Latte menu item
- `cold-brew.jpg` - Cold brew menu item

You can add any additional images you need for your coffee shop.

## Customization

### Colors

Edit the color scheme in `app/globals.css` under the `:root` section.

### Content

- Update text content in component files
- Modify menu items in `components/MenuPreview.tsx`
- Update testimonials in `components/Testimonials.tsx`
- Change navigation links in `components/Navbar.tsx`

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide React](https://lucide.dev/) - Icons

## License

Private project for Beany Coffee Shop.
