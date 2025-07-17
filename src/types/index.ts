export interface User {
  id: string;
  email?: string;
  phoneNumber?: string;
  displayName?: string;
  role: 'customer' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  subcategory?: string;
  material: string;
  weight?: number;
  dimensions?: string;
  images: string[];
  inStock: boolean;
  stockQuantity: number;
  featured: boolean;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  customizations?: {
    size?: string;
    engraving?: string;
    gift_wrap?: boolean;
  };
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: Address;
  billingAddress: Address;
  paymentMethod: string;
  paymentStatus: 'pending' | 'paid' | 'failed';
  trackingNumber?: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Address {
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  subcategories?: string[];
  featured: boolean;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  verified: boolean;
  createdAt: Date;
}

export interface WishlistItem {
  id: string;
  userId: string;
  productId: string;
  addedAt: Date;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signInWithPhone: (phoneNumber: string) => Promise<void>;
  verifyOTP: (otp: string) => Promise<void>;
  signOut: () => Promise<void>;
  isAdmin: boolean;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalAmount: number;
}

export interface FilterOptions {
  category?: string;
  priceRange?: [number, number];
  material?: string;
  inStock?: boolean;
  sortBy?: 'price_low' | 'price_high' | 'newest' | 'popular';
  searchQuery?: string;
}