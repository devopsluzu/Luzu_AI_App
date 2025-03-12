import { useState, useEffect } from 'react';
import { getDatabase, ref, get } from "firebase/database";
import { UserAuth } from '@context/AuthContext';
import Image from 'next/image';
import prfecBtn from '@public/Images/ai/prfec button.svg';
import { RiCloseFill } from "react-icons/ri";
import Link from 'next/link';

export default function ChatInput({ input, setInput, handleSendMessage, buttonHl, setButtonHl, 
  // promptCount, setPromptCount, 
  isTyping }) {
  const [planType, setPlanType] = useState(null);
  const [planCount, setPlanCount] = useState(3);
  const [popupOpen, setPopupOpen] = useState(false);

  const { user } = UserAuth();
  const userId = user?.uid;
  const database = getDatabase();

  useEffect(() => {
    if (!userId) return;
    
    const fetchPlanType = async () => {
      try {
        const planRef = ref(database, `/subscriptions/${userId}/planType`);
        const snapshot = await get(planRef);
        if (snapshot.exists()) {
          setPlanType(snapshot.val());
        }
      } catch (error) {
        console.error("Error fetching planType:", error);
      }
    };

    fetchPlanType();
  }, [userId,database]);

  // useEffect(() => {
  //   if (planType === 'starter') {
  //     setPlanCount(50);
  //   } else if (planType === 'pro') {
  //     setPlanCount(150);
  //   } else {
  //     setPlanCount(3);
  //   }
  // }, [planType]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setButtonHl(event.target.value.trim() !== '');
  };

  // const promptLeft = planCount - promptCount;

  // useEffect(() => {
  //   if (promptLeft === 0) {
  //     setPopupOpen(true); 
  //   }
  // }, [promptLeft]); 

  return (
    <div className="chat-input">
      {popupOpen && (
        <div className='chat-input-upgrade'>
          <div className='chat-input-upgrade-container'>
          <p>There are currently no prompts left. Prompts will reset after 24 hours.</p>
          <Link href='/pricing' ><button>Upgrade</button></Link>
          <RiCloseFill className='chat-input-upgrade-close'  onClick={() => setPopupOpen(false)} style={{color:"var(--p-color)"}}/>
          </div>
        </div>
       )} 

      <div className="chat-input-container">
        <input 
          type="text" 
          value={input} 
          onChange={handleInputChange} 
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()} 
          placeholder="Type your message..."
        />
        <div 
          className={`chat-input-generate-button ${isTyping ? "loading" : ""}`} 
          style={{ backgroundColor: buttonHl ? '#414abb' : '#515bda',height:"100%" }}
          onClick={handleSendMessage}
        >
          <p>Generate</p>
          <Image src={prfecBtn} alt="prfec" />
        </div>
      </div>

    </div>
  );
}

