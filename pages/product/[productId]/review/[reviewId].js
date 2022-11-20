import React from "react";
import { useRouter } from "next/router";

const ReviewId = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <div>
      Review {reviewId} for Product {productId}
    </div>
  );
};

export default ReviewId;
