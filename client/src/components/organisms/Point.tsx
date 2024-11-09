import React, { useRef, useState } from 'react';
import { Marker } from 'react-leaflet';
import { LatLng } from 'leaflet';
import Modal from 'react-modal';
import { MapPopup } from '../molecules/MapPopup';
import { modalStyles } from '../../pages/KirunaMap';
import DocumentForm from './DocumentForm';
import { IDocument } from '../../utils/interfaces/document.interface';
import { MarkerDocumentList } from '../molecules/documentsItems/MarkerDocumentList';

interface PointProps {
  id: string;
  pointCoordinates: LatLng;
  name: string;
  coordinates: any;
  isLoggedIn: boolean;
  documents: IDocument[]
}

export const Point: React.FC<PointProps> = ({
  id,
  pointCoordinates,
  name,
  coordinates,
  isLoggedIn,
  documents
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPointId, setSelectedPointId] = useState('');
  const markerRef = useRef<L.Marker>(null);

  return (
    <>
      <Marker key={id} position={pointCoordinates} ref={markerRef}>
        <MapPopup
          name={name}
          isLoggedIn={isLoggedIn}
          message="Do you want to add a document in this point?"
          documents={documents}
          onYesClick={() => {
            markerRef.current?.closePopup();
            setSelectedPointId(id);
            if (!modalOpen) setModalOpen(true);
          }}
          onCancelClick={() => {
            markerRef.current?.closePopup();
          }}
        />
      </Marker>

      <Modal
        style={modalStyles}
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
      >
        <DocumentForm
          coordinates={coordinates}
          selectedCoordIdProp={selectedPointId}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      </Modal>
    </>
  );
};
