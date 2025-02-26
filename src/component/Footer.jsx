import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div>
         {/* Footer */}
      <footer className="bg-[#21201e] text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Contact Us</h4>
              <p className="mb-2">Email: Info.kanvifoodscompany.com</p>
              <p className="mb-2">Phone: +919315955893</p>
              <p>Address: Greater Noida West, 201301</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to={'/'} className="hover:text-red-200">Home</Link></li>
                <li><Link to={'/about'} className="hover:text-red-200">About Us</Link></li>
                <li><Link to={'/brand'} className="hover:text-red-200">Our Brands</Link></li>
                <li><Link to={'/contact'} className="hover:text-red-200">Contact</Link></li>
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
            <p>&copy; {new Date().getFullYear()} Kan-Vi All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
