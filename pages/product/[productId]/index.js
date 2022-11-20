import React from "react";
import { useRouter } from "next/router";

const Products = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return <div>Detail for about Product {productId}</div>;
};

export default Products;
