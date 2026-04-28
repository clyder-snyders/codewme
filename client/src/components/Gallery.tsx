import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Design: Warm Editorial
 * - Responsive grid layout (3 columns desktop, 1 mobile)
 * - Lightbox modal for full-size viewing
 * - Image captions with context
 * - Smooth animations
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

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg bg-surface-elevated cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-lg aspect-square">
              <img
                src={image.src}
                alt={image.caption}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white text-sm font-medium">{image.caption}</p>
                <p className="text-white/70 text-xs mt-1">{image.category}</p>
              </div>
            </div>

            {/* Caption below image */}
            <div className="p-4">
              <p className="text-sm font-medium text-ink">{image.caption}</p>
              <p className="text-xs text-ink-soft mt-1">{image.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedIndex(null)}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          tabIndex={0}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white z-10"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Main image container */}
          <div className="relative w-full h-full max-w-4xl max-h-[90vh] flex items-center justify-center p-4">
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Navigation buttons */}
            {selectedIndex !== null && selectedIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            {selectedIndex !== null && selectedIndex < images.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}

            {/* Image info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4 text-white">
              <p className="font-medium">{selectedImage.caption}</p>
              <p className="text-sm text-white/70 mt-1">{selectedImage.category}</p>
              <p className="text-xs text-white/50 mt-2">
                {selectedIndex !== null ? selectedIndex + 1 : 0} / {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
