import styled from 'styled-components';


export const GalleryContainer = styled.div`
margin-top: 10px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: 0 4px 3px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const GalleryImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
    
    .gallery-zoom-effect {
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
  transform-origin: center;
`;

export const GalleryOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.mainBGColor === '#333' ? 
     
      `rgba(255, 255, 255, 0.1) 0%,
       rgba(255, 255, 255, 0.05) 20%,
       rgba(255, 255, 255, 0.02) 50%,
       rgba(255, 255, 255, 0.08) 80%,
       rgba(255, 255, 255, 0.15) 100%` : 
      
      `rgba(0, 0, 0, 0.6) 0%,
       rgba(0, 0, 0, 0.25) 20%,
       rgba(0, 0, 0, 0.15) 50%,
       rgba(0, 0, 0, 0.25) 80%,
       rgba(0, 0, 0, 0.6) 100%`
    }
  );
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  transition: background 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const GalleryInfo = styled.div`
  text-align: center;
  color: white;
  width: 100%;
  max-width: 600px;
`;

export const GalleryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const PhotoCounter = styled.span`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1rem;
  border-radius: 10px;
  white-space: nowrap;
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.4rem 0.8rem;
  }
`;

export const StorageInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  min-width: 140px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 0.5rem 0.75rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    min-width: 120px;
    padding: 0.4rem 0.6rem;
  }
`;

export const StorageText = styled.span`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const StorageBar = styled.div`
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
`;

export const StorageBarFilled = styled.div`
  height: 100%;
  background: #10b981;
  border-radius: 2px;
  transition: all 0.3s ease;
  box-shadow: 0 0 4px rgba(16, 185, 129, 0.5);
`;

export const ViewAllButton = styled.button`
  background: linear-gradient(135deg, ${({ theme }) => theme.lightGreen}, ${({ theme }) => theme.greenMain});
  color: ${({ theme }) => theme.white};
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(103, 188, 142, 0.4);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 1.5rem;
  backdrop-filter: blur(10px);

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, ${({ theme }) => theme.greenMain}, ${({ theme }) => theme.darkGreen});
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(103, 188, 142, 0.6);
  }

  &:active {
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    padding: 0.85rem 2rem;
    font-size: 0.9rem;
    margin-top: 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.85rem;
    letter-spacing: 0.5px;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
    z-index: -1;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4); 
  z-index: 10;
`;

export const ModalContent = styled.div`
  position: relative;
  width: 90%;
  height: 96vh;
  display: flex;
  flex-direction: column;
  background: rgba(254, 254, 254, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  overflow: hidden;
  z-index: 1001;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.9rem;

  background: rgba(255,255,255,0.1); 
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  z-index: 2;

  @media (max-width: 768px) {
  flex-direction: column;
    align-items: flex-start; 
    justify-content: flex-start;
  }
`;



export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.white};
  margin: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;

@media (max-width: 768px) {
  flex-direction: column;
  align-items: flex-start;
  font-size: 1rem;
}
`;

export const ModalTitleCount = styled.span`
  font-weight: normal;
  font-size: 1rem;
  margin-left: 0.5rem;
  text-transform: uppercase;
 color: ${({ theme }) => theme.white};
  @media (max-width: 768px) {
    margin-left: 0; 
    font-size: 0.9rem;
  }
`;


export const CloseButton = styled.button`
  position: absolute;
  top: 0.9rem;
  right: 1.5rem;
  background:  ${({ theme }) => theme.white};
  border: 3px solid ${({ theme }) => theme.greenMain};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);

  svg {
    width: 1.2rem;
    height: 1.2rem;
    stroke: ${({ theme }) => theme.textGray}; 
    transition: stroke 0.2s ease;
  }


  @media (max-width: 768px) {
    top: 0.6rem;
    right: 1rem;
    width: 36px;
    height: 36px;

    svg {
      width: 1rem;
      height: 1rem;
    }
  }
`;


export const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 0.75rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 0.5rem;
  }
`;

export const PhotoItem = styled.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.3);
  padding: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  cursor: pointer;
  backdrop-filter: blur(10px);

  &:hover {
    transform: scale(1.05);
    
    .photo-actions {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    border-radius: 8px;
    padding: 6px;
  }
`;

export const PhotoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.2s ease;

  @media (max-width: 768px) {
    border-radius: 6px;
  }
`;

export const ErrorImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  opacity: 0.7;
  filter: grayscale(0.3);

  @media (max-width: 768px) {
    border-radius: 6px;
  }
`;

export const PhotoActions = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  gap: 0.5rem;
  opacity: 0;
  transition: opacity 0.2s ease;
  z-index: 10; 

  @media (max-width: 768px) {
    opacity: 1;
    top: 10px;
    right: 10px;
    gap: 0.25rem;
  }
`;

export const PhotoActionButton = styled.button`
  background: rgba(255, 255, 255, 0.95);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.875rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    font-size: 0.75rem;
  }
`;

export const DeletePhotoButton = styled(PhotoActionButton)`
  border: 2px solid ${({ theme }) => theme.red};
  display: flex;
  align-items: center;
  justify-content: center;

svg {
  stroke: ${({ theme }) => theme.red};
  fill: none;
  width: 1.2rem;
  height: 1.2rem;
  transition: stroke 0.2s;
}

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.red};
    color: ${({ theme }) => theme.white};

    svg {
      stroke: ${({ theme }) => theme.white};
      fill: none; 
      width: 1.2rem;
      height: 1.2rem;
      transition: stroke 0.2s;
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    svg {
      stroke: ${({ theme }) => theme.red};
    }
  }
`;



export const DownloadPhotoButton = styled(PhotoActionButton)`
  border: 2px solid  ${({ theme }) => theme.greenMain};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${({ theme }) => theme.greenMain};
    transition: fill 0.2s;
  }

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.greenMain};
    color: ${({ theme }) => theme.white};
    
    svg {
      fill: ${({ theme }) => theme.white};
    }
  }
`;


export const ScrollLoader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 1rem;
  height: 200px;
`;

export const UploadSection = styled.div`
  padding: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.5);   
  backdrop-filter: blur(30px);           
  position: sticky;
  bottom: 0;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 0.75rem;
  }
`;

export const UploadProgress = styled.div`
 position: fixed;
   top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.4); 
  z-index: 11; 
  backdrop-filter: blur(3px); 
`;

export const UploadInput = styled.input`
  display: none;
`;

export const UploadLabel = styled.label`
  display: inline-block;   
  width: auto;          

  @media (max-width: 768px) {
    display: block;       
    width: 100%;         
    text-align: center;   
  }
`;

export const UploadButton = styled.button`
  background: ${props => props.$isPrimary ? 
    `linear-gradient(135deg, ${props.theme.lightGreen}, ${props.theme.greenMain})` : 
    'rgba(255, 255, 255, 0.9)'
  };
  color: ${props => props.$isPrimary ? props.theme.white : props.theme.black};
  border: ${props => props.$isPrimary ? 'none' : `2px dashed ${props.theme.gray}`};
  padding: 0.875rem 1.5rem;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  min-width: 140px;
  text-align: center;
  
  ${props => props.$isPrimary && `
    box-shadow: 0 4px 14px rgba(103, 188, 142, 0.25);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  `}

  &:hover:not(:disabled) {
    background: ${props => props.$isPrimary ? 
      `linear-gradient(135deg, ${props.theme.greenMain}, ${props.theme.darkGreen})` : 
      props.theme.disabledBG
    };
    
    ${props => props.$isPrimary && `
      box-shadow: 0 6px 20px rgba(103, 188, 142, 0.4);
    `}
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

@media (max-width: 768px) {
  padding: 0.75rem 1.25rem;
  font-size: 0.85rem;
  min-width: 100%;  
  display: block;   

}

@media (max-width: 480px) {
  width: 100%;
  min-width: auto;
}
`;

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  z-index: 999;
  border-radius: inherit;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  text-align: center;
  margin: 3rem 2rem;
  color: ${({ theme }) => theme.textGray};
  flex: 1;
  min-height: 70%; 

  p {
    margin: 0 0 1rem 0;
    font-size: 1rem;
    
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;


export const EmptyGalleryIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.5;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const NoPhotosMessage = styled.p`
  text-align: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.white};
  margin: 2rem auto;
  width: 100%;
`;

export const PhotoViewModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  cursor: pointer;

  body& {
    overflow: hidden;
  }
`;

export const PhotoViewOverlay = styled.div`
  display: none; 
`;

export const PhotoViewContent = styled.div`
  position: relative;
  width: 90vw;
  height: 90vh;
  max-width: 1200px;
  max-height: 800px;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 95vw;
    height: 85vh;
  }
`;

export const PhotoViewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 90%;
  max-height: 90%;
`;

export const FullscreenPhoto = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
`;

export const PhotoViewActions = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  gap: 1rem;
  z-index: 1502;

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
    gap: 0.5rem;
  }
`;

