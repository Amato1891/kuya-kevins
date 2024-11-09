import React, { useState, useEffect } from 'react';

function PromoBanner({ productName, productImage }) {
  const [showBanner, setShowBanner] = useState(false);
  const [reaction, setReaction] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
    // get timestamp from local storage and check if its older than 1 month. If it is, then show the survey again.
    const oldTimeStamp = JSON.parse (localStorage.getItem("kuyaKevins"))?.surveyCompletedDate;
    const timeStampOlderThanOneMonth = isTimestampOlderThanOneMonth (oldTimeStamp)
      setShowBanner(timeStampOlderThanOneMonth);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleReaction = (emoji) => {
    setReaction(emoji);
    console.log(`User reacted with: ${emoji}`);
    setLocalStorage();
    // Track the reaction event in Google Analytics
    console.log('Sending product_reaction event to GA');
    gtag('event', 'product_reaction', {
        product_name: productName,
        reaction: emoji,
      });
  
    setShowBanner(false);
  };

  const handleClose = () => {
    setShowBanner(false);
  };

  const setLocalStorage = () => {
    const timestamp = new Date().toISOString();
    const storageData = JSON.stringify ({
        "surveyCompletedDate": timestamp
    })
    // set local storage
    localStorage.setItem("kuyaKevins", storageData);
  }

  const isTimestampOlderThanOneMonth = (storedTimestamp) => {
    if (!storedTimestamp) return true; // If no timestamp, treat as older
  
    const storedDate = new Date(storedTimestamp);
    const currentDate = new Date();
  
    // Calculate the difference in months
    const monthDifference =
      currentDate.getMonth() - storedDate.getMonth() +
      12 * (currentDate.getFullYear() - storedDate.getFullYear());
  
    return monthDifference >= 1; // Returns true if the timestamp is more than one month old
  }

  return (
    <>
      {showBanner && (
        <div style={bannerStyle}>
            <button onClick={handleClose} style={closeButtonStyle}>
            ✖
          </button>
          <h6>🔥 New Menu Item 🔥</h6>
          <p><em>{productName}</em></p>
          {productImage && (
            <img src={productImage} alt={productName} style={imageStyle} />
          )}
          <div>
            <button onClick={() => handleReaction('yum')} style={emojiButtonStyle}>
              🤤
            </button>
            <button onClick={() => handleReaction('idk')} style={emojiButtonStyle}>
              🫤
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// Styles
const bannerStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  padding: '20px',
  backgroundColor: '#ffffe6',
  color: '#856404',
  border: '1px solid #ffeeba',
  borderRadius: '8px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.8)',
  zIndex: 1000,
  textAlign: 'center',
  width: '250px',
};

const emojiButtonStyle = {
  fontSize: '24px',
  margin: '0 10px',
  cursor: 'pointer',
  border: 'none',
  background: 'none',
  animation: 'glow 1.5s infinite'
};

const imageStyle = {
  width: '35%',
  height: '35%',
  marginBottom: '15px',
  borderRadius: '5px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.9)'
};

const closeButtonStyle = {
    position: 'absolute',
    top: '0px',
    right: '-3px',
    background: 'none',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    color: '#856404'
  };

  const glowAnimation = `
  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 1px rgba(255, 165, 0, 0.5);
    }
    25% {
      box-shadow: 0 0 2px rgba(255, 165, 0, 1);
    }
    50% {
      box-shadow: 0 0 3px rgba(255, 165, 0, 1);
    }
    75% {
      box-shadow: 0 0 4px rgba(255, 165, 0, 1);
    }
  }
  `;

// Adding the animation CSS to the document head
if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(glowAnimation));
    document.head.appendChild(style);
  }

export default PromoBanner;