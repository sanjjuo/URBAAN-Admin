import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import CreateCategories from './CreateCategories';
import AddedCategories from './AddedCategories';

const Category = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const ImageUrl = URL.createObjectURL(file);
      setSelectedImage(ImageUrl);
    }
  };

  return (
    <>
      <h1 className="text-2xl lg:text-3xl font-semibold">Categories</h1>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 mt-5">
        {/* Create Categories Section */}
        <div className="lg:col-span-2">
          <CreateCategories
            selectedImage={selectedImage}
            handleImageUpload={handleImageUpload}
          />
        </div>

        {/* Search and Added Categories Section */}
        <div className="lg:col-span-4 space-y-5">
          {/* Search Bar */}
          <div className="border border-gray-300 py-1 px-2 flex items-center gap-2 rounded-xl bg-gray-100/50 h-10 w-96">
            <IoIosSearch className="text-gray-500 text-xl" />
            <input
              type="search"
              name="search"
              placeholder="Search Category"
              className="bg-transparent placeholder:text-gray-500 placeholder:text-sm font-light focus:outline-none text-secondary w-full"
            />
          </div>

          {/* Added Categories */}
          <div className="grid lg:grid-cols-2 gap-5">
            <AddedCategories />
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
