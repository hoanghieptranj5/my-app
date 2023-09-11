import React, {useState} from 'react';
import './ChineseCharacterCard.css';
import {Button, Modal} from 'antd';

const ChineseCharacterInfo = ({ hanzi }) => {
  const [isMeaningExpanded, setIsMeaningExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMeaning = () => {
    setIsMeaningExpanded(!isMeaningExpanded);
  };
  const showModal = () => {
    console.log(isModalOpen)
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const splitParagraphWithSepartor = (paragraph, separator) => {
    const separatorPattern = new RegExp(separator + ' ', 'g');
    // Split the paragraph using the separator pattern
    const lines = paragraph.split(separatorPattern);
    return lines;
  }

  return (
    <>
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
          </div>
          <Button type="link" onClick={showModal}>
            Show More
          </Button>
        </div>
      </div>
      <Modal title={<h1>{hanzi.id + "'s details"}</h1>} visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {
          splitParagraphWithSepartor(hanzi.meaningInVietnamese, "\\d+\\.").map(x => <p>{x}</p>)
        }
      </Modal>
    </>

  );
};

export default ChineseCharacterInfo;
