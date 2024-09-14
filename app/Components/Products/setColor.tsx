"use client";

import { SelectedimgType } from "@/app/product/[productId]/productDetails";

interface SetColorProps {
  image: SelectedimgType;
}

const SetColor: React.FC<SetColorProps> = ({ image }) => {
  return <div>Color</div>;
};

export default SetColor;
