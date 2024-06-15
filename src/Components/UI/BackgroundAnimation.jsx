// import React from 'react';
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// const BackgroundAnimation = () => {
//   return (
//     <DotLottieReact
//       src="path/to/animation.lottie"
//       loop
//       autoplay
//     />
//   );
// }

// export default BackgroundAnimation;
// import React from 'react';
// import Lottie from 'lottie-react';
// import animationData from '../../../public/Animations/Animation - Line-Gray.json'; // Adjust the path to your JSON file

// const BackgroundAnimation = () => {
//   return (
//     <div style={{ width: '100%', height: '100%', position: 'relative' }}>
//       <Lottie
//         animationData={animationData}
//         loop
//         autoplay
//         style={{ width: '100%', height: '100%' }}
//       />
//     </div>
//   );
// }

// export default BackgroundAnimation;

import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../../public/Animations/Animation - Line-Gray.json'; // Adjust the path to your JSON file

const BackgroundAnimation = ({ children }) => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
      />
      <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%' }}>
        {children}
      </div>
    </div>
  );
}

export default BackgroundAnimation;

