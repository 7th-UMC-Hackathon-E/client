import { useState } from 'react';
import ConstellationList from '@/components/RecodPage/ConstellationList/ConstellationList';
import * as S from '@/pages/RecordPage/RecordPage.style';
import Modal from '@/components/RecodPage/Modal/Modal';
import CancelWhite from '@/assets/icons/cancelWhite.svg?react';

const constellations = [
  { percentage: 100, image: '/images/gray0.png', date: '2025. 01. 11' },
  { percentage: 50, image: '/images/gray50.png', date: '2025. 01. 10' },
  { percentage: 0, image: '/images/gray100.png', date: '2025. 01. 09' },
  { percentage: 100, image: '/images/gray0.png', date: '2025. 01. 08' },
  { percentage: 50, image: '/images/gray50.png', date: '2025. 01. 07' },
  { percentage: 100, image: '/images/gray0.png', date: '2025. 01. 06' },
  { percentage: 100, image: '/images/gray0.png', date: '2025. 01. 06' },
  { percentage: 100, image: '/images/gray0.png', date: '2025. 01. 06' },
];

const RecordPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const openModal = (record) => {
    setSelectedRecord(record);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRecord(null);
  };

  return (
    <>
      <S.Container>
        <S.Header>
          <S.Button>
            <CancelWhite />
          </S.Button>
        </S.Header>
        <ConstellationList constellations={constellations} onCardClick={openModal} />
      </S.Container>

      {isModalOpen && <Modal record={selectedRecord} onClose={closeModal} />}
    </>
  );
};

export default RecordPage;
