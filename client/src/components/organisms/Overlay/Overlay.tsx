import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Modal from 'react-modal';
import { modalStyles } from '../../../pages/KirunaMap';
import './Overlay.css';
import FloatingButton from '../../molecules/FloatingButton';
import DocumentForm from '../DocumentForm';
import { IDocument } from '../../../utils/interfaces/document.interface';
import AllDocumentsModal from '../modals/AllDocumentsModal';
import { FaFolder, FaGlobe, FaPlus } from 'react-icons/fa';
import { AllMunicipalityDocuments } from '../coordsOverlay/AllMunicipalityDocuments';
import { useAuth } from '../../../context/AuthContext';
import { UserRoleEnum } from '../../../utils/interfaces/user.interface';

interface OverlayProps {
  coordinates: any; //Need to pass coordinates to the modal as parameter
  setCoordinates: (coordinates: any) => void;
  documents: IDocument[];
  setDocuments: (documents: IDocument[]) => void;
}

// <div key={index} className='border-b p-2 pb-1 cursor-pointer hover:bg-gray-100 rounded last:border-none'>
//   <h1 className='text-sm font-bold'>{doc.title}</h1>
//   <p className='text-sm mt-1'>{doc.summary?.slice(0, 200)}...</p>
// </div>

const Overlay: React.FC<OverlayProps> = ({
  coordinates,
  setCoordinates,
  documents,
  setDocuments,
}) => {
  const [isHoveredMunicipality, setIsHoveredMunicipality] = useState(false);
  const [showMunicipalityDocuments, setShowMunicipalityDocuments] =
    useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [isHoveredNewDocument, setIsHoveredNewDocument] = useState(false);

  const [isHoveredSearch, setIsHoveredSearch] = useState(false);
  const [showAllDocuments, setShowAllDocuments] = useState(false);

  const { isLoggedIn, user } = useAuth();

  const municipalityDocumentsModalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '90%',
      height: '90vh',
    },
    overlay: { zIndex: 1000 },
  };

  return (
    <Container
      fluid
      style={{
        position: 'absolute',
        top: '50vh',
        left: 0,
        width: '100%',
        zIndex: 1000,
      }}
    >
      <FloatingButton
        text={
          isHoveredMunicipality ? (
            'All Municipality Documents'
          ) : (
            <FaGlobe style={{ display: 'inline' }} />
          )
        }
        onMouseEnter={() => setIsHoveredMunicipality(true)}
        onMouseLeave={() => setIsHoveredMunicipality(false)}
        onClick={() => {
          if (!modalOpen) {
            setShowMunicipalityDocuments(true);
          }
        }}
      />
      {isLoggedIn && user && user.role === UserRoleEnum.Uplanner && (
        <>
          <FloatingButton
            text={
              isHoveredNewDocument ? (
                '+ New Document'
              ) : (
                <FaPlus style={{ display: 'inline' }} />
              )
            }
            onMouseEnter={() => setIsHoveredNewDocument(true)}
            onMouseLeave={() => setIsHoveredNewDocument(false)}
            onClick={() => {
              if (!modalOpen) {
                setModalOpen(true);
              }
            }}
            className="mt-20"
          />
          <FloatingButton
            onMouseEnter={() => setIsHoveredSearch(true)}
            onMouseLeave={() => setIsHoveredSearch(false)}
            onClick={() => {
              if (!showAllDocuments) {
                setShowAllDocuments(true);
              }
            }}
            text={
              isHoveredSearch ? (
                'See All Documents'
              ) : (
                <FaFolder style={{ display: 'inline' }} />
              )
            }
            className="mt-40"
          />
        </>
      )}

      <Modal
        style={modalStyles}
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
      >
        <DocumentForm
          coordinates={coordinates}
          setCoordinates={setCoordinates}
          documents={documents}
          setDocuments={setDocuments}
          positionProp={undefined}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      </Modal>

      <Modal
        style={modalStyles}
        isOpen={showAllDocuments}
        onRequestClose={() => setShowAllDocuments(false)}
      >
        <AllDocumentsModal setShowAllDocuments={setShowAllDocuments} />
      </Modal>

      <Modal
        style={municipalityDocumentsModalStyles}
        isOpen={showMunicipalityDocuments}
        onRequestClose={() => setShowMunicipalityDocuments(false)}
      >
        <AllMunicipalityDocuments
          coordinates={coordinates}
          setCoordinates={setCoordinates}
          documents={documents}
          setDocuments={setDocuments}
        />
      </Modal>
    </Container>
  );
};

export default Overlay;
