# 🛒 ShopsKart - Online Shopping App

ShopsKart is a modern and responsive **Online Shopping Web Application** developed using **React.js and Vite**.

The application provides a simple e-commerce experience where users can browse products, view product details, manage their shopping cart, create an account, log in, and manage application settings.

---

## 🌐 Live Demo

🚀 **GitHub Repository:**  
https://github.com/tusharmahajan737-max/ShopsKart-_Online_Shopping_App

🚀 **Live Website:**  
https://tusharmahajan737-max.github.io/ShopsKart-_Online_Shopping_App/

---

## 📌 Project Description

**ShopsKart** is a frontend-based online shopping application created using React.js.

The main purpose of this project is to demonstrate the development of a complete shopping website using modern React concepts such as:

- React Components
- React Router
- Props
- State Management
- React Hook Form
- Form Validation
- Local Storage
- Responsive Design
- Reusable Components
- GitHub Pages Deployment

Users can navigate through different pages, explore products, add products to the cart, manage their account, and change application settings.

---

# ✨ Features

### 🏠 Home Page
- Attractive shopping homepage
- Navigation bar
- Search box
- Product sections
- Featured products
- Responsive layout

### 🛍️ Product Page
- Display available products
- Product cards
- Product image
- Product name
- Product price
- Product category
- Add to Cart option
- Buy Now option

### 📦 Category Page
- Browse products by category
- Category-based product display
- Easy product navigation

### 🛒 Shopping Cart
- View selected products
- Add products to cart
- Remove products
- Manage shopping items
- View cart information

### 👤 Account
- User account page
- User information
- Account-related options

### 🔐 Login
- User login form
- Email validation
- Password validation
- Show/Hide password
- Form validation
- Navigation after successful login

### 📝 Register
- New user registration
- Name validation
- Email validation
- Password validation
- Confirm/terms checkbox
- Form validation

### 🔑 Password Help
- Password recovery/help page
- Email-based form interface

### ⚙️ Settings
- Application settings
- Dark Mode
- Light Mode
- System Default
- Theme preference management

---

# 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Frontend development |
| Vite | React development/build tool |
| React Router DOM | Page navigation and routing |
| React Hook Form | Form handling and validation |
| JavaScript | Application logic |
| HTML5 | Page structure |
| CSS3 | Styling |
| Bootstrap 5 | Responsive UI |
| Font Awesome | Icons |
| Local Storage | Storing browser-side data |
| Git | Version control |
| GitHub | Source code hosting |
| GitHub Pages | Website deployment |

---

# 📁 Project Structure

```text
ShopsKart/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── public/
│   └── Logo.png
│
├── src/
│   │
│   ├── Components/
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   └── Products_Card.jsx
│   │
│   ├── Pages/
│   │   ├── Account.jsx
│   │   ├── Cart.jsx
│   │   ├── Category.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Password_Help.jsx
│   │   ├── Product.jsx
│   │   ├── Register.jsx
│   │   └── Settings.jsx
│   │
│   ├── Styles/
│   │   ├── App.css
│   │   └── Login.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── .eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js

🧩 Main Components
Navbar.jsx

The Navbar provides the main navigation of the application.

It contains links to:

Home
Products
Categories
Account
Cart

It also contains the ShopsKart logo and search interface.

Footer.jsx

The Footer provides additional website information and links at the bottom of the application.

Layout.jsx

The Layout component provides a common structure for different pages.

Navbar
   ↓
Page Content
   ↓
Footer
Products_Card.jsx

The Products Card component is a reusable component used to display product information.

A product card can contain:

Product Image
Product Name
Product Category
Product Price
Add to Cart
Buy Now
📄 Pages
Home.jsx

Main landing page of ShopsKart.

Home
 ├── Navbar
 ├── Shopping Banner
 ├── Featured Products
 ├── Product Sections
 └── Footer
Product.jsx

Displays available products and product information.

Category.jsx

Displays products according to their categories.

Cart.jsx

Displays products selected by the user.

Login.jsx

Allows existing users to log into the application.

Register.jsx

Allows new users to create an account.

Password_Help.jsx

Provides a password recovery/help interface.

Account.jsx

Displays user account information.

Settings.jsx

Allows users to change application preferences such as:

Dark Mode
Light Mode
System Default

🔄 Application Flow
The basic application flow of ShopsKart is:
                    ┌──────────────────┐
                    │   Open ShopsKart │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │   Home Page      │
                    └────────┬─────────┘
                             │
             ┌───────────────┼───────────────┐
             │               │               │
             ▼               ▼               ▼
       ┌──────────┐    ┌──────────┐    ┌──────────┐
       │ Products │    │ Category │    │  Search  │
       └────┬─────┘    └────┬─────┘    └────┬─────┘
            │               │               │
            └───────────────┼───────────────┘
                            │
                            ▼
                    ┌──────────────────┐
                    │ Product Details  │
                    └────────┬─────────┘
                             │
                    ┌────────┴────────┐
                    │                 │
                    ▼                 ▼
             ┌────────────┐    ┌────────────┐
             │ Add to Cart│    │  Buy Now   │
             └─────┬──────┘    └─────┬──────┘
                   │                 │
                   └────────┬────────┘
                            ▼
                    ┌──────────────────┐
                    │   Shopping Cart  │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │ Login / Register │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │ Account / User   │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │ Checkout / Order │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │ Order Completed  │
                    └──────────────────┘

🚀 GitHub Deployment Workflow
For your GitHub section, this looks cleaner:
Developer
    │
    ▼
Write / Update Code
    │
    ▼
Test Locally
    │
    ▼
npm run build
    │
    ▼
git add .
    │
    ▼
git commit
    │
    ▼
git push origin main
    │
    ▼
GitHub Repository
    │
    ▼
GitHub Actions
    │
    ▼
Install Dependencies
    │
    ▼
Build React App
    │
    ▼
Generate dist/
    │
    ▼
GitHub Pages
    │
    ▼
Live ShopsKart Website
