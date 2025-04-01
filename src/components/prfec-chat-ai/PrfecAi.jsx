// 'use client';
// import React, { useState, useEffect } from 'react';
// import Chatbot from './ai/ChatAi';
// import AiDashboard from '@components/ai/Dashboard';
// import '@styles/prfec-chat-ai/ChatAi.css';
// const PrfecAi = ({ chatId }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isDesktop, setIsDesktop] = useState(window.innerWidth > 800);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth > 800);
//       if (window.innerWidth > 800) {
//         setMenuOpen(false); // Ensure menu closes when resizing to desktop mode
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     handleResize(); // Initialize state on mount

//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     const adjustHeight = () => {
//       const viewportHeight = window.innerHeight;
//       const viewportWidth = window.innerWidth;

//       if (viewportWidth <= 600) {
//         document.querySelector('.prfecAiComponent').style.height = `${viewportHeight}px`;
//       } else {
//         document.querySelector('.prfecAiComponent').style.height = 'auto';
//       }
//     };

//     adjustHeight();
//     window.addEventListener('resize', adjustHeight);

//     return () => window.removeEventListener('resize', adjustHeight);
//   }, []);

//   const handleMenuOpen = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div className='prfecAiComponent'>
//       {/* Show AiDashboard only for desktop (width > 800px) */}
//       {isDesktop && <AiDashboard />}
//       {/* {!isDesktop &&
//       <div className='prfec-chat-dashboard-hamburger' style={{display:"flex" ,justifyContent:"space-between"}}>
//         <RiMenu4Fill
//           className='prfec-chat-dashboard-menu-icon'
//           onClick={handleMenuOpen}
//           style={{ color: "var(--p-color)" }}
//         />
//                   <Link href='/settings/profile'> <CgProfile  style={{color:"var(--dashboard-h-color)",width:"22px",height:"22px"}}/></Link> 


//         {!isDesktop && menuOpen && (
//           <div className='prfec-chat-dashboard-mobile'>
//             <AiDashboard menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
//           </div>
//         )}
//       </div>} */}

//       <Chatbot chatId={chatId} />
//     </div>
//   );
// };

// export default PrfecAi;


'use client';
import React, { useState, useEffect } from 'react';
import Chatbot from './ai/ChatAi';
import AiDashboard from '@components/ai/Dashboard';
import styles from '@styles/prfec-chat-ai/GeneralChat.module.css';
const PrfecAi = ({ chatId }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 800);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 800);
      if (window.innerWidth > 800) {
        setMenuOpen(false); // Ensure menu closes when resizing to desktop mode
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize state on mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const adjustHeight = () => {
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      if (viewportWidth <= 600) {
        document.querySelector('.luzuAiComponent').style.height = `${viewportHeight}px`;
      } else {
        document.querySelector('.luzuAiComponent').style.height = 'auto';
      }
    };

    adjustHeight();
    window.addEventListener('resize', adjustHeight);

    return () => window.removeEventListener('resize', adjustHeight);
  }, []);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`${styles.luzuAiComponent} luzuAiComponent`}>
      {isDesktop && <AiDashboard />}

      <Chatbot chatId={chatId} />
    </div>
  );
};

export default PrfecAi;

