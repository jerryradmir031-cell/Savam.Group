"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

type LightboxImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function WorkLightbox({
  items,
}: {
  items: LightboxImage[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close]);

  const open = openIndex !== null ? items[openIndex] : null;

  return (
    <>
      <div className="grid gap-16 lg:gap-20">
        {items.map((item, i) => (
          <figure key={item.src} className="group">
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="block w-full cursor-zoom-in text-left"
              aria-label={`Увеличить: ${item.alt}`}
            >
              <div className="overflow-hidden bg-[var(--bg-soft)]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                  sizes="(max-width: 1024px) 100vw, 1120px"
                />
              </div>
            </button>
            <figcaption className="mt-4 text-[15px] text-[var(--muted)]">
              {item.alt}
            </figcaption>
          </figure>
        ))}
      </div>

      {open && (
        <div
          className="lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={open.alt}
          onClick={close}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={close}
            aria-label="Закрыть"
          >
            ×
          </button>
          <div
            className="relative max-h-full max-w-[min(1400px,100%)]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={open.src}
              alt={open.alt}
              width={open.width}
              height={open.height}
              className="max-h-[calc(100vh-48px)] w-auto max-w-full h-auto"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
