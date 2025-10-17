# Food Call - AI Coding Agent Instructions

## Project Overview
Food Call is a React-based food delivery application using Redux Toolkit for state management, React Router for navigation, and Tailwind CSS for styling. Users can browse restaurants, view menus, and manage cart items.

## Architecture & Design Patterns

### Component Structure
- **Entry Point**: `src/App.js` sets up routing, Redux Provider, and UserContext at the root level
- **Layout Pattern**: `AppLayout` component wraps all routes with persistent `<Header>`, `<Outlet>`, and `<Footer>`
- **Lazy Loading**: Only `Instamart` component is lazy-loaded with `Suspense` fallback to `<Shimmer>`
- **Context Usage**: `UserContext` provides user info (`{name, email}`) via React Context, initialized in `AppLayout`

### State Management
- **Redux Store**: Located in `src/utils/store.js`, configured with Redux Toolkit
- **Cart Slice**: `src/utils/cartSlice.js` manages cart state with actions:
  - `addItem(item)` - pushes item to items array
  - `clearCart()` - resets items to empty array
  - `removeItem()` - exists but has implementation bug (calls non-existent `removeItem` method on array)
- **Accessing Cart**: Use `useSelector((store) => store.cart.items)` to read cart state
- **Dispatching Actions**: Import actions from `cartSlice`, dispatch with `useDispatch()`

### Data Fetching Patterns
- **API Integration**: Fetches from Swiggy's public API endpoints (see `src/utils/constants.js`)
- **Custom Hooks**: `useRestaurantMenu(resId)` - fetches and returns restaurant menu data
- **Direct Fetch**: `Body.js` directly fetches restaurant list in `useEffect` (no custom hook)
- **API Structure**: Response data deeply nested (e.g., `json?.data?.cards[2]?.data?.data?.cards`), use optional chaining

### Routing Architecture
- **Router Type**: Uses `createBrowserRouter` from React Router v6
- **Nested Routes**: All routes are children of root `/` with `AppLayout`
- **Dynamic Routes**: `/restaurant/:resId` extracts `resId` via `useParams()`
- **Navigation**: Use `<Link to="/path">` from `react-router-dom`, never `<a href>`

## Styling Conventions

### Tailwind Approach
- **Inline Classes**: All styling done via Tailwind utility classes directly in JSX
- **No CSS Files**: Project has `index.css` but components don't use separate CSS modules
- **Style Variables**: Defined as string constants within components (e.g., `const logoStyles = "w-[70px] rounded-full mx-2"`)
- **Responsive Design**: Mobile-first with `md:` breakpoints (see `Header.js` mobile menu pattern)
- **Color Scheme**: Primary blue (`bg-blue-100`, `bg-blue-300`) and green (`bg-green-50`, `bg-green-200`) theme

### Dynamic Styling Pattern
```javascript
// Conditional styling based on data (see RestaurantMenu.js)
let ratingStyles = "w-[40px] px-2 text-white";
if (resInfo?.avgRatingString <= 2) {
  ratingStyles += " bg-red-500";
} else if (resInfo?.avgRatingString <= 4) {
  ratingStyles += " bg-orange-500";
} else {
  ratingStyles += " bg-green-500";
}
```

## Testing Patterns

### Test Setup Requirements
- **Wrap Components**: All tests must wrap components in both `<Provider store={store}>` and `<StaticRouter>` (from `react-router-dom/server`)
- **Mock Fetch**: Global fetch must be mocked with `jest.fn()` for API-dependent tests
- **Mock Data**: Use data from `src/mocks/restaurantData.js` for consistent test fixtures
- **Async Handling**: Wrap renders in `act()` and use `waitFor()` from `@testing-library/react`

### Test File Conventions
- Location: `src/components/__test__/ComponentName.test.js`
- Use `data-testid` attributes for querying test elements
- Import `@testing-library/jest-dom` for DOM matchers

## Development Workflow

### Commands
```bash
npm start           # Starts Parcel dev server on index.html (no port specified)
npm test            # Runs Jest with coverage enabled
npm install --legacy-peer-deps  # Required for installing dependencies
```

### Build Tool - Parcel
- **Entry Point**: `index.html` in project root (not in `src/`)
- **No Configuration**: Parcel is zero-config, automatically handles React, JSX, and Tailwind
- **HMR**: Hot module replacement enabled by default

### Code Organization
- **Utils**: Reusable hooks, constants, Redux store/slices in `src/utils/`
- **Components**: All UI components flat in `src/components/` (no subdirectories by feature)
- **Tests**: Colocated in `src/components/__test__/` directory
- **Mocks**: Test fixtures in `src/mocks/`

## Common Patterns & Gotchas

### Image URLs
- Restaurant images: `RES_IMG_URL + cloudinaryImageId`
- Logo: Direct URL from `LOGO_URL` constant
- All image constants in `src/utils/constants.js`

### Props Destructuring
- Prefer destructuring in component body: `const { menu } = props;` (see `MenuItem.js`)
- Not in function signature

### Event Handlers
- Arrow functions in onClick: `onClick={() => handleAction(item)}`
- Pass parameters through arrow function wrapper

### Data Access Pattern
- Heavy use of optional chaining: `restaurantMenu[0]?.card?.card?.info`
- Conditional rendering with `component?.length === 0 ? <Shimmer /> : <Content />`

## Key Files Reference
- **API URLs**: `src/utils/constants.js`
- **Redux Store**: `src/utils/store.js` (single store with cart slice)
- **Router Config**: `src/App.js` (bottom of file)
- **Test Wrapper Pattern**: `src/components/__test__/Header.test.js`
- **Custom Hook Example**: `src/utils/useRestaurantMenu.js`
