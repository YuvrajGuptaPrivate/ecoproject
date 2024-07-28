import React from 'react';
import Navbar from '../Navbar'
import Footer from '../Footer'
import '../Info.css'

function Info() {
  return (
    <div>
      <Navbar/>
    <div className="curtain-info">
      <h1>Curtains and Window Treatments</h1>
      <p>
        Curtains and window treatments are an essential part of any home decor.
        They not only add style and elegance to a room, but also provide functionality
        such as blocking light, reducing noise, and insulating against heat and cold.
      </p>

      <h2>Types of Curtains</h2>
      <ul>
        <li><strong>Sheer Curtains</strong>: Lightweight, transparent curtains that filter natural light.</li>
        <li><strong>Blackout Curtains</strong>: Thick, opaque curtains that block out light and reduce noise.</li>
        <li><strong>Thermal Curtains</strong>: Insulated curtains that help regulate room temperature.</li>
        <li><strong>Panel Curtains</strong>: Simple, flat curtains that can be used as a room divider or to add texture to a wall.</li>
      </ul>

      <h2>Blinds</h2>
      <p>
        Blinds are a popular alternative to curtains, offering a sleek and modern look.
        They come in a variety of materials, including wood, vinyl, and aluminum.
      </p>
      <ul>
        <li><strong>Vertical Blinds</strong>: Blinds that hang vertically from a track, often used for large windows or sliding glass doors.</li>
        <li><strong>Horizontal Blinds</strong>: Blinds that hang horizontally from a track, often used for smaller windows.</li>
        <li><strong>Roller Blinds</strong>: Blinds that roll up onto a tube, often used for modern and minimalist decor.</li>
      </ul>

      <h2>Wallpaper</h2>
      <p>
        Wallpaper is a great way to add pattern, texture, and color to a room.
        It can be used to create a feature wall or to cover an entire room.
      </p>
      <ul>
        <li><strong>Paper-backed Wallpaper</strong>: Wallpaper with a paper backing, easy to install and remove.</li>
        <li><strong>Non-woven Wallpaper</strong>: Wallpaper made from synthetic materials, durable and easy to clean.</li>
        <li><strong>Natural Fiber Wallpaper</strong>: Wallpaper made from natural materials, such as grasscloth or bamboo.</li>
      </ul>

      <h2>Flooring</h2>
      <p>
        Flooring is an essential part of any room, providing a foundation for furniture and decor.
        There are many types of flooring to choose from, including hardwood, carpet, tile, and laminate.
      </p>
      <ul>
        <li><strong>Hardwood Flooring</strong>: Durable and long-lasting, hardwood flooring is a popular choice for many homes.</li>
        <li><strong>Carpet Flooring</strong>: Soft and comfortable, carpet flooring is a great choice for bedrooms and living rooms.</li>
        <li><strong>Tile Flooring</strong>: Easy to clean and maintain, tile flooring is a popular choice for kitchens and bathrooms.</li>
      </ul>

      <h2>Curtain Rods</h2>
      <p>
        Curtain rods are a necessary component of any curtain or drapery system.
        They come in a variety of materials, including wood, metal, and plastic.
      </p>
      <ul>
        <li><strong>Single Rod</strong>: A single rod that holds one curtain or drapery panel.</li>
        <li><strong>Double Rod</strong>: A double rod that holds two curtain or drapery panels.</li>
        <li><strong>Triple Rod</strong>: A triple rod that holds three curtain or drapery panels.</li>
      </ul>
    </div>
    <Footer/>
    </div>
  );
}

export default Info;