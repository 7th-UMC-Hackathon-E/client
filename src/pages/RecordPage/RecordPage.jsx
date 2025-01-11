import { useState } from 'react';
import ConstellationList from '@/components/RecodPage/ConstellationList/ConstellationList';
import * as S from '@/pages/RecordPage/RecordPage.style';
import Modal from '@/components/RecodPage/Modal/Modal';
import CancelWhite from '@/assets/icons/cancelWhite.svg?react';

const constellations = [
  { percentage: 100, image: '/images/constellation1.png', date: '2025. 01. 11' },
  { percentage: 50, image: '/images/constellation2.png', date: '2025. 01. 10' },
  { percentage: 100, image: '/images/constellation3.png', date: '2025. 01. 09' },
  { percentage: 100, image: '/images/constellation4.png', date: '2025. 01. 08' },
];

const RecordPage = () => {
  // 🧩 모달 상태 및 선택된 데이터 관리
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  // 🧩 카드 클릭 시 모달 열기
  const openModal = (record) => {
    setSelectedRecord(record);
    setIsModalOpen(true);
  };

  // 🧩 모달 닫기
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

      {1 && <Modal record={selectedRecord} onClose={closeModal} />}
    </>
  );
};

export default RecordPage;
