"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const Photo = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  
  // Danh sách ảnh avatar cá nhân - bạn có thể thêm nhiều ảnh avatar khác nhau
  const photos = [
    "/assets/photo.jpg",
    "/assets/photo1.jpg",
    "/assets/photo2.jpg",
    "/assets/photo3.jpg",
    // Bạn có thể thêm các ảnh avatar khác vào đây
    // Ví dụ: "/assets/avatar2.jpg", "/assets/avatar3.jpg"
  ];

  // Tự động chuyển ảnh mỗi 5 giây (chỉ khi có nhiều hơn 1 ảnh)
  useEffect(() => {
    if (photos.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [photos.length]);

  const nextPhoto = () => {
    if (photos.length <= 1) return;
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    if (photos.length <= 1) return;
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPhotoIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full h-full relative"
            >
              <Image
                src={photos[currentPhotoIndex]}
                priority
                quality={100}
                fill
                alt="Avatar"
                className="object-cover rounded-full"
              />
            </motion.div>
          </AnimatePresence>

          {/* Photo Counter - chỉ hiển thị khi có nhiều hơn 1 ảnh */}
          {photos.length > 1 && (
            <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
              {currentPhotoIndex + 1} / {photos.length}
            </div>
          )}

          {/* Navigation Buttons - chỉ hiển thị khi có nhiều hơn 1 ảnh */}
          {photos.length > 1 && (
            <>
              <button
                onClick={prevPhoto}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                ←
              </button>
              <button
                onClick={nextPhoto}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                →
              </button>

              {/* Photo Indicators - chỉ hiển thị khi có nhiều hơn 1 ảnh */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {photos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPhotoIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentPhotoIndex 
                        ? "bg-white scale-125" 
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </motion.div>

        {/* Circle Animation */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#D0EFFF"
            strokeWidth="4"
            strokeLinejoin="round"
            strokeLinecap="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
