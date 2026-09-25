# ShopStore E-commerce Frontend

A complete React + Vite e-commerce frontend prepared for later FastAPI integration.

## Run

```bash
npm install
npm run dev
```

Open the URL shown by Vite, usually http://localhost:5173.

## Included

- Home page
- Product listing
- Search
- Category filter
- Price/rating sorting
- Product details
- Functional cart with quantities
- Checkout UI
- Login/Register demo state
- Orders page placeholder
- Profile page
- Responsive design
- Axios service ready for FastAPI

## FastAPI integration

The API client is in:

`src/services/api.js`

Set your backend URL in `.env`:

```env
VITE_API_URL=http://127.0.0.1:8000
```

Then replace local product data with API calls such as:

```js
const response = await api.get("/products");
```

This frontend currently uses local dummy product data so it works without a backend.