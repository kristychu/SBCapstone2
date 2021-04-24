# Korean Skincare Routine App
## Description
The Korean Skincare Routine App helps users to track which products are used for each step of the Korean Skincare Routine. While an explanation of the 10 steps of the Korean Skincare Routine can be found on many websites, this app follows the 10-Step Korean Skincare Routine as originally explained by [Soko Glam] ("https://sokoglam.com/pages/the-korean-skin-care-routine").

##Features:
These features were included to allow users to see the functionality of how a tracking app for a skincare routine could work:

- See an explanation of the 10-Step Korean Skincare Routine
- Create a free user account
- See a breakdown of the Morning and Night time steps with products saved for each step (if any)
- Search the Skincare API (referenced below) for products by product brand, product name, or product ingredients
- Save 1 product to a specific step
- Delete 1 product from a specific step
- Future Features:
	- Save multiple products to a specific step
	- If Skincare API does not have specific product, user can manually add the product to the app
	- Save 1 product to multiple steps (i.e. if the same toner is used during morning and night routines)
	- User history of products
	- Add public or private notes to each product
	- Share skincare routine products and notes with others (if opted)

##Tests
Backend test files are saved next to their respective file in /skincareapp-backend and all tests can be ran with `jest -i`. Frontend test files are saved in src/__tests __ and all tests can be ran with `npm test`.

## User Flow
- Register or Login
- Search product for 1 step at a time for both morning and night
- Save product to a specific step
- Delete product from a specific step

## API Reference
Skincare API built by Laura Robertson:
https://github.com/LauraRobertson/skincareAPI

## Tech Stack
Korean Skincare App uses:
- Javascript
- HTML
- reactstrap
- React
- Redux
- Express
- Node.js
- PostgreSQL
- Heroku
