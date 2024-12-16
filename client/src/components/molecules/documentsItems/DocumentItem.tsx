import React, { useState } from 'react';
import { DocumentIcon } from './DocumentIcon';
import { FaArrowRight } from 'react-icons/fa';
import Modal from 'react-modal';
import DocumentDetailsModal from '../../organisms/modals/DocumentDetailsModal';
import { IDocument } from '../../../utils/interfaces/document.interface';

Modal.setAppElement('#root');

interface DocumentItemProps {
  document: IDocument;
  coordinates: any;
  setCoordinates: (coordinates: any) => void;
  allDocuments: IDocument[];
  setAllDocuments: (documents: IDocument[]) => void;
  filteredDocuments: IDocument[];
  setFilteredDocuments: (documents: IDocument[]) => void;
}

export const DocumentItem: React.FC<DocumentItemProps> = ({
  document,
  coordinates,
  setCoordinates,
  allDocuments,
  setAllDocuments,
  filteredDocuments,
  setFilteredDocuments
}) => {
  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      margin: '0 auto',
      transform: 'translate(-50%, -50%)',
      width: '90%',
    },
    overlay: { zIndex: 1000 },
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="flex py-1 hover:bg-gray-200 rounded-lg text-start w-full"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <div className="flex-none size-8 ml-1 mr-3 self-center">
          <DocumentIcon
            type={document.type.type}
            stakeholders={document.stakeholders?.map((s) => s.type)}
          />
        </div>
        <span className="flex-1 text-lg font-bold self-center mr-3">
          {document.title}
        </span>
        <FaArrowRight className="text-lg self-center font-bold mr-1" />
      </button>

      <Modal
        style={modalStyles}
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <DocumentDetailsModal
          document={document}
          coordinates={coordinates}
          setCoordinates={setCoordinates}
          allDocuments={allDocuments}
          setAllDocuments={setAllDocuments}
          filteredDocuments={filteredDocuments}
          setFilteredDocuments={setFilteredDocuments}
        />
      </Modal>
    </>
  );
};
