# Brijwasi Jeweller - E-commerce Website

A fully functional and responsive e-commerce website for selling jewelry under the brand name "Brijwasi Jeweller". Built with modern web technologies and featuring a luxurious black and yellow color theme.

## 🚀 Features

### 🛍️ E-commerce Functionality
- **Product Catalog**: Browse and search jewelry products
- **Product Details**: Detailed product pages with image galleries
- **Shopping Cart**: Add/remove items with quantity management
- **Checkout Process**: Secure order placement with form validation
- **Order Management**: Track orders and order history

### 🔐 Authentication
- **Admin Login**: Email + password authentication for admin access
- **Customer Login**: OTP-based phone number verification
- **Protected Routes**: Secure access to user-specific content
- **Role-based Access**: Different permissions for customers and admins

### 📱 Mobile-First Design
- **Responsive Layout**: Optimized for all device sizes
- **Touch-Friendly UI**: Easy navigation on mobile devices
- **Bottom Navigation**: Mobile-friendly navigation options
- **Smooth Animations**: Professional micro-interactions

### 🎨 UI/UX Features
- **Luxury Design**: Black and yellow color theme
- **Modern Components**: Clean and elegant interface
- **Smooth Animations**: Framer Motion animations
- **Loading States**: Professional loading indicators
- **Error Handling**: User-friendly error messages

### 🔧 Admin Panel
- **Product Management**: Add, edit, and delete products
- **Order Management**: View and update order status
- **Customer Management**: View customer information
- **Inventory Tracking**: Monitor stock levels
- **Secure Access**: Admin-only routes and features

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **Lucide React** for icons

### Backend & Database
- **Firebase Authentication** for user management
- **Firestore** for database
- **Firebase Storage** for image storage
- **Firebase Functions** for serverless operations
- **Firebase Hosting** for deployment

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Firebase project setup

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd brijwasi-jeweller
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Firebase Setup**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication (Email/Password and Phone)
   - Create a Firestore database
   - Set up Firebase Storage
   - Copy your Firebase config

4. **Configure Firebase**
   - Update `src/firebase/config.ts` with your Firebase configuration:
   ```typescript
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-project.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-project.appspot.com",
     messagingSenderId: "your-sender-id",
     appId: "your-app-id"
   };
   ```

5. **Start the development server**
   ```bash
   npm start
   ```

6. **Open your browser**
   - Navigate to `http://localhost:3000`

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   └── ProtectedRoute.tsx
├── contexts/
│   ├── AuthContext.tsx
│   └── CartContext.tsx
├── firebase/
│   └── config.ts
├── pages/
│   ├── Home.tsx
│   ├── Products.tsx
│   ├── ProductDetail.tsx
│   ├── Cart.tsx
│   ├── Checkout.tsx
│   ├── Login.tsx
│   ├── Register.tsx
│   ├── Profile.tsx
│   ├── Orders.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── AdminDashboard.tsx
├── types/
│   └── index.ts
├── App.tsx
├── index.tsx
└── index.css
```

## 🎨 Design System

### Colors
- **Primary Gold**: `#fbbf24` (gold-500)
- **Secondary Gold**: `#f59e0b` (gold-600)
- **Primary Black**: `#000000` (black-900)
- **Secondary Black**: `#383838` (black-800)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Components
- **Buttons**: Primary (gold) and Secondary (black)
- **Cards**: White background with subtle shadows
- **Forms**: Consistent styling with gold focus states

## 🔐 Authentication Flow

### Customer Authentication
1. User enters phone number
2. OTP is sent via SMS
3. User verifies OTP
4. User is logged in and redirected

### Admin Authentication
1. Admin enters email and password
2. Credentials are verified
3. Admin is logged in with elevated permissions

## 📱 Mobile Optimization

- **Responsive Grid**: Adapts to all screen sizes
- **Touch Targets**: Minimum 44px for touch elements
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Optimized Images**: Lazy loading and proper sizing
- **Performance**: Optimized for mobile networks

## 🚀 Deployment

### Firebase Hosting
1. **Build the project**
   ```bash
   npm run build
   ```

2. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

3. **Login to Firebase**
   ```bash
   firebase login
   ```

4. **Initialize Firebase hosting**
   ```bash
   firebase init hosting
   ```

5. **Deploy to Firebase**
   ```bash
   firebase deploy
   ```

## 🔧 Environment Variables

Create a `.env` file in the root directory:
```
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
```

## 📊 Performance Optimization

- **Code Splitting**: Lazy loading of components
- **Image Optimization**: WebP format and lazy loading
- **Caching**: Browser caching for static assets
- **Minification**: Optimized build process
- **Tree Shaking**: Remove unused code

## 🐛 Known Issues

- Firebase configuration needs to be updated with actual credentials
- Some pages are placeholder implementations
- OTP verification requires proper Firebase setup
- Admin features need complete implementation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions:
- Email: info@brijwasijeweller.com
- Phone: +91 98765 43210

---

**Brijwasi Jeweller** - Crafting Timeless Elegance Since 1950