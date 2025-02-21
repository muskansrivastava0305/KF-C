import React from 'react'

export const Footer = () => {
  return (
    <div>
         {/* Footer */}
      <footer className="bg-red-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Contact Us</h4>
              <p className="mb-2">Email: info@canwe.com</p>
              <p className="mb-2">Phone: (555) 123-4567</p>
              <p>Address: 123 Food Street, Cuisine City</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-red-200">Home</a></li>
                <li><a href="#" className="hover:text-red-200">About Us</a></li>
                <li><a href="#" className="hover:text-red-200">Menu</a></li>
                <li><a href="#" className="hover:text-red-200">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-red-200">Facebook</a>
                <a href="#" className="hover:text-red-200">Twitter</a>
                <a href="#" className="hover:text-red-200">Instagram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-red-700 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Can We? All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
