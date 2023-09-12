import React from "react";
const sizes = [25, 50, 100, 250];
interface SizesProps {
  selectedSize: number;
  setSelectedSize: (size: number) => void;
}
const Sizes: React.FC<SizesProps> = ({ selectedSize, setSelectedSize }) => {
  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(Number(e.target.value));
  };
  return (
    <div>
      <select name="sizes" id="sizes" onChange={(e) => handleSizeChange(e)} value={selectedSize}>
        {sizes?.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Sizes;