# Foodzizzles Homes Web Application

Foodzizzles Homes is an e-commerce web application for managing inventory, publishing digital cookbooks, organizing product categories, and publishing recipes.

## Getting Started

1. Install project dependencies:

   ```bash
   npm install
   ```

2. Copy the environment template and fill in local values:

   ```bash
   cp .env.example .env
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173/](http://localhost:5173/) in your browser.

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies. |
| `cp .env.example .env` | Create a local env file from the template. |
| `npm run dev` | Start the Vite dev server at [http://localhost:5173/](http://localhost:5173/). |
| `npm run build` | Typecheck the project and write a production build to `dist/`. |
| `npm run preview` | Serve the production build locally. Run `npm run build` first. |
| `npm run lint` | Run ESLint on the TypeScript and TSX files. |

## TODO

These items are not started.

### Storefront

- [ ] Finish the cart so a shopper can change quantity, remove an item, and leave an item unselected without deleting it
- [ ] Connect a payment provider such as Stripe
- [ ] Add product comparison capability 

### Catalog

- [ ] Create and publish cookbooks and e-books
- [ ] Manage products, categories and recipes
- [ ] Extract text from scanned cookbook pages

### Admin

- [ ] Build a dashboard where admins can manage products, recipes, users, cookbooks, and e-books
- [ ] Add a dashboard overview of catalog and order activity
- [ ] Payment and subscription manager

### Platform

- [ ] Add the backend in an Nx monorepo
- [ ] Add sign-in and role-based access
- [ ] Add account reconciliation and reporting
- [ ] Add a support chatbot

### System
- [ ] Product recommender 
- [ ] Customer journey and experience
- [ ] Product mapper and product intelligence to improve product experience by collecting and analyzing user behavioural data, customer feedback (product review) and performance metrics

## Mock data

Sample records live in `src/mock/` so the current screens can be exercised before the items above are built.

| File | Used for |
| --- | --- |
| `recipe.json` | Recipe list, cuisine filter, and pagination. Eight recipes across several cuisines, so the list spans two pages. |
| `additionalDetails.json` | Step list on a recipe page. One record per recipe. |
| `books.json` | Best-selling books on the home page. Hover a book and use the cart icon to add it. |
| `courses.json` | Course cards on the home page. |
| `quotes.json` | Chef quotes on the home page. |
| `sidebar.json` | Cooking tips in the home sidebar. |
| `footer.json` | Footer copy, course links, and social links. |
| `products.json` | Shop products for later catalog work. Not rendered yet. |
| `cookbooks.json` | Cookbook and e-book records for later publishing work. Not rendered yet. |
| `cart.json` | Sample cart lines, including one unselected line, for later cart work. The live cart starts empty. |

## License

This project is licensed under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: