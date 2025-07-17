import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Shield, Award, Users } from 'lucide-react';

const Home: React.FC = () => {
  // Mock data for featured products
  const featuredProducts = [
    {
      id: '1',
      name: 'Diamond Solitaire Ring',
      price: 125000,
      originalPrice: 150000,
      image: '/api/placeholder/300/300',
      rating: 4.8,
      reviews: 124
    },
    {
      id: '2',
      name: 'Gold Pearl Necklace',
      price: 85000,
      image: '/api/placeholder/300/300',
      rating: 4.9,
      reviews: 89
    },
    {
      id: '3',
      name: 'Emerald Earrings',
      price: 95000,
      originalPrice: 110000,
      image: '/api/placeholder/300/300',
      rating: 4.7,
      reviews: 156
    },
    {
      id: '4',
      name: 'Ruby Bracelet',
      price: 75000,
      image: '/api/placeholder/300/300',
      rating: 4.6,
      reviews: 78
    }
  ];

  const collections = [
    {
      name: 'Bridal Collection',
      description: 'Exquisite pieces for your special day',
      image: '/api/placeholder/400/300',
      link: '/collections/bridal'
    },
    {
      name: 'Traditional Jewelry',
      description: 'Timeless designs with cultural heritage',
      image: '/api/placeholder/400/300',
      link: '/collections/traditional'
    },
    {
      name: 'Contemporary Designs',
      description: 'Modern elegance for everyday wear',
      image: '/api/placeholder/400/300',
      link: '/collections/contemporary'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      comment: 'Absolutely stunning jewelry! The craftsmanship is exceptional and the service was outstanding.',
      image: '/api/placeholder/60/60'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Delhi',
      rating: 5,
      comment: 'Bought my wife\'s wedding jewelry here. Beautiful designs and excellent quality. Highly recommended!',
      image: '/api/placeholder/60/60'
    },
    {
      name: 'Anjali Patel',
      location: 'Bangalore',
      rating: 5,
      comment: 'The perfect place for luxury jewelry. Great collection and professional staff.',
      image: '/api/placeholder/60/60'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-black-900 via-black-800 to-black-900">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/api/placeholder/1920/1080')"
          }}
        ></div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
          >
            Brijwasi Jeweller
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gold-200"
          >
            Crafting Timeless Elegance Since 1950
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/products"
              className="bg-gold-500 hover:bg-gold-600 text-black-900 px-8 py-3 rounded-md font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/collections"
              className="border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black-900 px-8 py-3 rounded-md font-semibold transition-colors duration-200"
            >
              View Collections
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-black-900 mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular pieces, carefully curated for their exceptional 
              beauty and craftsmanship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.originalPrice && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-black-900 mb-2">{product.name}</h3>
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-gold-500 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-black-900">
                        ₹{product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <Link
                      to={`/product/${product.id}`}
                      className="bg-gold-500 hover:bg-gold-600 text-black-900 px-4 py-2 rounded-md font-medium transition-colors duration-200"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="bg-black-900 hover:bg-black-800 text-white px-8 py-3 rounded-md font-semibold transition-colors duration-200 inline-flex items-center"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-black-900 mb-4">
              Our Collections
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated collections, each telling a unique story 
              of craftsmanship and elegance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center text-white p-6">
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-2">{collection.name}</h3>
                    <p className="text-gold-200 mb-4">{collection.description}</p>
                    <Link
                      to={collection.link}
                      className="bg-gold-500 hover:bg-gold-600 text-black-900 px-6 py-2 rounded-md font-medium transition-colors duration-200 inline-flex items-center"
                    >
                      Explore Collection
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-serif font-bold text-black-900 mb-6">
                Three Generations of Excellence
              </h2>
              <p className="text-gray-600 mb-6">
                Since 1950, Brijwasi Jeweller has been synonymous with exceptional craftsmanship 
                and timeless elegance. Founded by our grandfather, we have been creating exquisite 
                jewelry that celebrates life's most precious moments.
              </p>
              <p className="text-gray-600 mb-8">
                Our commitment to quality, authenticity, and customer satisfaction has made us 
                one of the most trusted names in luxury jewelry. Every piece is crafted with 
                meticulous attention to detail and backed by our lifetime guarantee.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="h-8 w-8 text-black-900" />
                  </div>
                  <h3 className="font-semibold text-black-900">Certified</h3>
                  <p className="text-sm text-gray-600">Hallmarked Jewelry</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-8 w-8 text-black-900" />
                  </div>
                  <h3 className="font-semibold text-black-900">Lifetime</h3>
                  <p className="text-sm text-gray-600">Guarantee</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-8 w-8 text-black-900" />
                  </div>
                  <h3 className="font-semibold text-black-900">10,000+</h3>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="/api/placeholder/600/500"
                alt="Brijwasi Jeweller Heritage"
                className="w-full rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold-500 rounded-full flex items-center justify-center">
                <div className="text-center text-black-900">
                  <div className="text-2xl font-bold">74+</div>
                  <div className="text-sm">Years</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-black-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our valued customers 
              have to say about their experience with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 shadow-md"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-black-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gold-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;