import React from "react";
import ButtonRounded from "../atoms/button/ButtonRounded";
import { FaFolder } from "react-icons/fa";
import { IDocument } from "../../utils/interfaces/document.interface";
import { FaX } from "react-icons/fa6";
import AllDocumentsList from "./AllDocumentsList";

interface SidebarProps {
  sidebarVisible: boolean;
  setSidebarVisible: (sidebarVisible: boolean) => void;
  coordinates: any;
  setCoordinates: (coordinates: any) => void;
  allDocuments: IDocument[];
  setAllDocuments: (allDocuments: IDocument[]) => void;
  filteredDocuments: IDocument[];
  setFilteredDocuments: (documents: IDocument[]) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  sidebarVisible,
  setSidebarVisible,
  coordinates,
  setCoordinates,
  allDocuments,
  setAllDocuments,
  filteredDocuments,
  setFilteredDocuments
}) => {
  
  return (
    <>
      <ButtonRounded 
        text={<FaFolder />}
        variant="filled"
        className="bg-black px-3 text-base"
        onClick={() => setSidebarVisible(true)}
      />
      <nav
        style={{
          background: '#ffffff',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          position: 'fixed',
          top: 0,
          right: sidebarVisible ? "0" : "-100%",
          transition: '350ms'
        }}
        className='xl:w-2/5 lg:w-4/6 md:w-5/6 w-full'
      >
        <div className='flex flex-col w-full p-2'>
        <FaX 
            style={{ fontSize: '30px' }} 
            onClick={() => setSidebarVisible(false)}
            className='absolute top-2 right-2 cursor-pointer'
          />

          <AllDocumentsList
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            allDocuments={allDocuments}
            setAllDocuments={setAllDocuments}
            filteredDocuments={filteredDocuments}
            setFilteredDocuments={setFilteredDocuments}
          />
        </div>
      </nav>
    </>
  )
}