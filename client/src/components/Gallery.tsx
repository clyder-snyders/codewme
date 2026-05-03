import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ANIMATION_TIMINGS, ANIMATION_EASING } from "@/lib/animations";

/**
 * Design: Warm Editorial + Kinetic Editorial Animations
 * - Responsive grid layout (3 columns desktop, 1 mobile)
 * - Lightbox modal for full-size viewing
 * - Image captions with context
 * - Scroll-triggered reveals and hover animations
 */

interface GalleryImage {
  id: string;
  src: string;
  caption: string;
  category: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

export default function Gallery({ images }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "Escape") setSelectedIndex(null);
  };

  // Animation variants for gallery items
  const itemVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: ANIMATION_TIMINGS.scrollReveal,
        ease: ANIMATION_EASING.scrollReveal,
        delay: i * ANIMATION_TIMINGS.scrollStagger,
      },
    }),
  };

  // Lightbox animation variants
  const backdropVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <>
      {/* Gallery Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            custom={index}
            variants={itemVariant}
            className="group relative overflow-hidden rounded-lg bg-surface-elevated cursor-pointer"
            onClick={() => setSelectedIndex(index)}
            whileHover={{ y: -4 }}
            transition={{ duration: ANIMATION_TIMINGS.hover }}
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-lg aspect-square">
              <motion.img
                src={image.src}
                alt={image.caption}
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: ANIMATION_TIMINGS.hover }}
              />
              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: ANIMATION_TIMINGS.hover }}
              >
                <p className="text-white text-sm font-medium">{image.caption}</p>
                <p className="text-white/70 text-xs mt-1">{image.category}</p>
              </motion.div>
            </div>

            {/* Caption below image */}
            <div className="p-4">
              <p className="text-sm font-medium text-ink">{image.caption}</p>
              <p className="text-xs text-ink-soft mt-1">{image.category}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            variants={backdropVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
            onKeyDown={handleKeyDown}
            role="dialog"
            aria-modal="true"
            tabIndex={0}
          >
            {/* Close button */}
            <motion.button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white z-10"
              aria-label="Close"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="h-6 w-6" />
            </motion.button>

            {/* Main image container */}
            <motion.div
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full h-full max-w-4xl max-h-[90vh] flex items-center justify-center p-4"
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.caption}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Navigation buttons */}
              {selectedIndex !== null && selectedIndex > 0 && (
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                  aria-label="Previous image"
                  whileHover={{ scale: 1.1, x: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft className="h-6 w-6" />
                </motion.button>
              )}

              {selectedIndex !== null && selectedIndex < images.length - 1 && (
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                  aria-label="Next image"
                  whileHover={{ scale: 1.1, x: 4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRight className="h-6 w-6" />
                </motion.button>
              )}

              {/* Image info */}
              <motion.div
                className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4 text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="font-medium">{selectedImage.caption}</p>
                <p className="text-sm text-white/70 mt-1">{selectedImage.category}</p>
                <p className="text-xs text-white/50 mt-2">
                  {selectedIndex !== null ? selectedIndex + 1 : 0} / {images.length}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
