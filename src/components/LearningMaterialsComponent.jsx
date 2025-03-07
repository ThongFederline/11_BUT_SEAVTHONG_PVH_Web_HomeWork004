import React, { useState } from "react";
import { Star } from "lucide-react";
import FilterComponent from "./FilterComponent";
import { learningMaterials } from "../data/learningMaterials";

export default function LearningMaterialsComponent() {
  const [favorites, setFavorites] = useState({});
  const [sortOrder, setSortOrder] = useState(""); // State for sorting order

  // Toggle favorite status
  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id], // Toggle the value
    }));
  };

  // Function to format date
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("/");
    return `${day}/${month}/${year}`;
  };

  // Function to handle sorting
  const sortedMaterials = [...learningMaterials].sort((a, b) => {
    if (sortOrder === "A-Z") {
      return a.title.localeCompare(b.title);
    } else if (sortOrder === "Z-A") {
      return b.title.localeCompare(a.title);
    }
    return 0; // No sorting applied
  });

  return (
    <div className="bg-white drop-shadow-lg rounded-2xl overflow-auto h-[80vh] mt-4">
      {/* calling filter component and passing sorting function */}
      <FilterComponent setSortOrder={setSortOrder} />

      {/* title */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={30} height={30} />
      </div>

      {/* materials list */}
      {sortedMaterials.map((course) => (
        <div className="space-y-3" key={course.id || course.title}>
          <div className="bg-light-gray px-4 py-2 flex gap-5 items-center">
            <img
              src={course.image}
              alt={course.title}
              width={50}
              height={50}
              className="rounded-xl"
            />

            <div className="w-full">
              <div className="flex justify-between">
                <p className="text-base font-medium">{course.title}</p>
                <Star
                  size={20}
                  className={`cursor-pointer ${
                    favorites[course.id]
                      ? "text-yellow-500 fill-amber-500"
                      : "text-gray-400"
                  }`}
                  onClick={() => toggleFavorite(course.id)}
                />
              </div>
              <p className="text-gray-400 text-sm">
                Posted at: {formatDate(course.postedAt)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
