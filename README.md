# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

```
neop
├─ app
│  ├─ app.vue
│  ├─ assets
│  │  └─ styles
│  │     ├─ home
│  │     │  ├─ heroSection.css
│  │     │  ├─ imports.css
│  │     │  └─ ourShop.css
│  │     ├─ layout
│  │     │  ├─ imports.css
│  │     │  └─ navbar.css
│  │     ├─ main.css
│  │     ├─ normalize.css
│  │     ├─ tailwind.css
│  │     └─ variables.css
│  ├─ components
│  │  ├─ Cards
│  │  │  ├─ OurProductCard.vue
│  │  │  └─ OurShopsCard.vue
│  │  ├─ Home
│  │  │  ├─ Brands.vue
│  │  │  ├─ HeroSection
│  │  │  │  ├─ ImagesSwiper.vue
│  │  │  │  └─ index.vue
│  │  │  ├─ OurProducts
│  │  │  │  ├─ Header.vue
│  │  │  │  ├─ index.vue
│  │  │  │  └─ Tabs.vue
│  │  │  └─ OurShop
│  │  │     └─ Index.vue
│  │  ├─ Icons
│  │  │  ├─ Ar.vue
│  │  │  ├─ ArrowDown.vue
│  │  │  ├─ ArrowNext.vue
│  │  │  ├─ ArrowPrev.vue
│  │  │  ├─ Cart.vue
│  │  │  ├─ CoffeBit.vue
│  │  │  ├─ CoffieBitOpacity.vue
│  │  │  ├─ En.vue
│  │  │  ├─ Facebook.vue
│  │  │  ├─ Insta.vue
│  │  │  ├─ LinkedIn.vue
│  │  │  └─ Star.vue
│  │  ├─ Layout
│  │  │  ├─ ChangeLanguage.vue
│  │  │  ├─ Footer
│  │  │  │  ├─ CafeLocation.vue
│  │  │  │  ├─ Contact.vue
│  │  │  │  ├─ Index.vue
│  │  │  │  ├─ MenuLinks.vue
│  │  │  │  └─ SocialLinks.vue
│  │  │  └─ Navbar.vue
│  │  └─ Products
│  │     └─ Details
│  │        ├─ ImageGallery.vue
│  │        ├─ Info.vue
│  │        └─ Reviews.vue
│  ├─ data
│  │  ├─ brands.json
│  │  ├─ heroSection.json
│  │  ├─ ourShopCards.json
│  │  ├─ product.json
│  │  └─ products.json
│  ├─ layouts
│  │  └─ default.vue
│  └─ pages
│     ├─ index.vue
│     └─ product
│        └─ [id].vue
├─ i18n
│  └─ locales
│     ├─ ar.json
│     └─ en.json
├─ nuxt.config.ts
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ gifs
│  │  └─ dda15be9ebcd2eadf8201d558c4bf5c59c4fc7b4.gif
│  ├─ images
│  │  ├─ bc1a7d0b38e15540379068957cb03dd05dfe1ff4.png
│  │  ├─ bg-body.png
│  │  ├─ Coffee Beans.png
│  │  ├─ coffePacks.png
│  │  ├─ Group 1000010753.png
│  │  ├─ Group 1000010783.png
│  │  ├─ Group.png
│  │  ├─ hero.png
│  │  ├─ image 11.png
│  │  ├─ logo.png
│  │  └─ ourShopbg.webp
│  └─ robots.txt
├─ README.md
└─ tsconfig.json

```