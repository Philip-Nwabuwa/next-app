import React from "react";
import Link from "next/link";

const Products = () => {
  return (
    <div>
      <h2>lists of Products</h2>
      <ul>
        <Link href="/product/1">
          <li>Product 1</li>
        </Link>
        <Link href="/product/2">
          <li>Product 2</li>
        </Link>
        <Link href="/product/3" replace>
          <li>Product 3</li>
        </Link>
      </ul>
      <Link href="/">Home Page</Link>
    </div>
  );
};

export default Products;
