"use client";
import Image from "next/image";
import hitachi from "/public/assets/clients/hitachi.png";
import kineco from "/public/assets/clients/kineco.png";
import pci from "/public/assets/clients/pci.png";
import philips from "/public/assets/clients/philips.png";
import schindler from "/public/assets/clients/schindler.png";
import trp from "/public/assets/clients/trp.png";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const clientImages = [
  { id: 1, imageUrl: hitachi, width: 100, height: 50, logoName: "hitachi" },
  { id: 2, imageUrl: kineco, width: 200, height: 100, logoName: "kineco" },
  { id: 3, imageUrl: pci, width: 100, height: 100, logoName: "pci" },
  { id: 4, imageUrl: philips, width: 50, height: 100, logoName: "philips" },
  { id: 5, imageUrl: schindler, width: 60, height: 100, logoName: "schindler" },
  { id: 6, imageUrl: trp, width: 100, height: 100, logoName: "trp" },
];

// Duplicate the images for seamless looping
const loopingClientImages = [...clientImages, ...clientImages];

export const ClientCarousel = () => {
  const logoContainerRef = useRef(null);

  useEffect(() => {
    const logoContainer = logoContainerRef.current;

    // Calculate total width of logos
    const totalWidth = logoContainer.scrollWidth / 2;

    // GSAP animation
    gsap.to(logoContainer, {
      x: -totalWidth,
      duration: 20, // Adjust speed here
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => {
          const parsedX = parseFloat(x);
          return parsedX % totalWidth; // Keep it in the bounds of the total width
        }),
      },
    });
  }, []);

  return (
    <section className="mt-20 px-6 overflow-x-hidden">
      <div className="container">
        <div className="flex justify-center items-center">
          <h2 className="text-primary mb-10 lg:max-w-[600px]">
            Choice of industry leaders and Fortune 500 companies
          </h2>
        </div>
        <div
          className="logos flex justify-center items-center gap-40 logo-container"
          ref={logoContainerRef}
        >
          {loopingClientImages.map((client, index) => (
            <Image
              key={`${client.id}-${index}`}
              src={client.imageUrl}
              alt={client.logoName}
              width={client.width}
              height={client.height}
              className="logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
