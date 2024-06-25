import { useState, useEffect } from 'react';
import { react, expressjs, springboot, aws, html, css, javascript, tailwindcss, java, python, nodejs, mongodb, github, pandas, numpy, android, mysql, opencv, figma, nextjs, typescript, docker, kubernetes, firebase, excel, powerbi, scikitlearn, jenkins } from '../assets';

const TechStack = () => {
  const techStacks = [
    { src: react, alt: "React" },
    { src: springboot, alt: "Spring Boot" },
    { src: aws, alt: "AWS" },
    { src: html, alt: "HTML" },
    { src: css, alt: "CSS" },
    { src: javascript, alt: "JavaScript" },
    { src: tailwindcss, alt: "Tailwind CSS" },
    { src: java, alt: "Java" },
    { src: python, alt: "Python" },
    { src: nodejs, alt: "Node.js" },
    { src: mongodb, alt: "MongoDB" },
    { src: expressjs, alt: "Express.js" },
    { src: github, alt: "GitHub" },
    { src: pandas, alt: "Pandas" },
    { src: numpy, alt: "Numpy" },
    { src: android, alt: "Android" },
    { src: mysql, alt: "MySQL" },
    { src: opencv, alt: "OpenCV" },
    { src: figma, alt: "Figma" },
    { src: nextjs, alt: "Next.js" },
    { src: typescript, alt: "TypeScript" },
    { src: firebase, alt: "Firebase" },
    { src: docker, alt: "Docker" },
    { src: kubernetes, alt: "Kubernetes" },
    { src: excel, alt: "Excel" },
    { src: powerbi, alt: "Power BI" },
    { src: scikitlearn, alt: "Scikit Learn" },
    { src: jenkins, alt: "Jenkins" },
  ];

  const [positions, setPositions] = useState([]);

  useEffect(() => {


    setTimeout( () => {
    const generatePositions = () => {
      const generatedPositions = [];
      const containerWidth = window.innerWidth;
      const containerHeight = window.innerHeight;

      const minSize = 40; // Minimum size of the icons
      const maxSize = 100; // Maximum size of the icons
      const minDistance = 20; // Minimum distance between icons

      // Define the safe zone dimensions (center of the screen)
      const safeZoneWidth = 300;
      const safeZoneHeight = 100;

      const checkOverlap = (x, y, size, positions) => {
        for (let pos of positions) {
          const dx = pos.x - x;
          const dy = pos.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < (size / 2 + pos.size / 2 + minDistance)) {
            return true;
          }
        }
        return false;
      };

      for (let i = 0; i < techStacks.length; i++) {
        let size = Math.random() * (maxSize - minSize) + minSize; // Random size between minSize and maxSize
        let x, y;
        let attempts = 0;
        let isInsideSafeZone;
        do {
          x = Math.random() * (containerWidth - size);
          y = Math.random() * (containerHeight - size);

          // Ensure the icons do not overlap the edges
          x = Math.max(size / 2, Math.min(x, containerWidth - size / 2));
          y = Math.max(size / 2, Math.min(y, containerHeight - size / 2));

          // Ensure the icons do not overlap with the safe zone
          isInsideSafeZone =
            x > (containerWidth - safeZoneWidth) / 2 - size / 2 &&
            x < (containerWidth + safeZoneWidth) / 2 + size / 2 &&
            y > (containerHeight - safeZoneHeight) / 2 - size / 2 &&
            y < (containerHeight + safeZoneHeight) / 2 + size / 2;

          attempts++;
        } while ((checkOverlap(x, y, size, generatedPositions) || isInsideSafeZone) && attempts < 100);

        generatedPositions.push({ x, y, size });
      }

      setPositions(generatedPositions);
    };

    generatePositions();
    window.addEventListener('resize', generatePositions);

    return () => {
      window.removeEventListener('resize', generatePositions);
    }},4000)
  });

  return (
    <div className="relative w-full h-screen bg-gray-6 overflow-hidden">
      {positions.map((pos, index) => (
        <div
          key={index}
          style={{
            top: pos.y - pos.size / 2,
            left: pos.x - pos.size / 2,
            width: pos.size,
            height: pos.size,
          }}
          className="absolute flex items-center justify-center bg-gray-200 rounded-full transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl z-10 group"
        >
          <img src={techStacks[index].src} alt={techStacks[index].alt} className="w-2/3" />
          <span className="absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {techStacks[index].alt}
          </span>
        </div>
      ))}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20 bg-gray-100 bg-opacity-75 px-4 py-2 rounded-lg">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800">Our Tech Stack</h1>
      </div>
    </div>
  );
};

export default TechStack;
