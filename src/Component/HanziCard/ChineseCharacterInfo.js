import React, {useState} from 'react';
import './ChineseCharacterCard.css';

const ChineseCharacterInfo = ({ hanzi }) => {
  const [isMeaningExpanded, setIsMeaningExpanded] = useState(false);

  const toggleMeaning = () => {
    setIsMeaningExpanded(!isMeaningExpanded);
  };

  return (
    <div className="chinese-character-card">
      <div className="chinese-character">{hanzi.id}</div>
      <div className="separator"></div> {/* Thin line separator */}
      <div className="description">
        <div className="description-row">
          <div className="description-label">HanViet:</div>
          <div className="description-value">{hanzi.hanViet}</div>
        </div>
        <div className="description-row">
          <div className="description-label">Pinyin:</div>
          <div className="description-value">{hanzi.pinyin}</div>
        </div>
        <div className="description-row">
          <div className="description-label">Cantonese:</div>
          <div className="description-value">{hanzi.cantonese}</div>
        </div>
        <div className="description-row">
          <div className="description-label">Meaning:</div>
          {isMeaningExpanded ? hanzi.meaningInVietnamese : `${hanzi.meaningInVietnamese.slice(0, 100)}...`} {/* Display the first 100 characters */}
          <button className="toggle-button" onClick={toggleMeaning}>
            {isMeaningExpanded ? 'Collapse' : 'Expand'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChineseCharacterInfo;
