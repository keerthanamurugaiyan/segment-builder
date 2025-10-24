import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-1">
      <div className="container">
        <p className="mb-1">© {new Date().getFullYear()} Segment Builder — All Rights Reserved.</p>
        <div>
          <a href="#" className="text-warning mx-2">Privacy Policy</a> |
          <a href="#" className="text-warning mx-2">Terms</a> |
          <a href="#" className="text-warning mx-2">Support</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
