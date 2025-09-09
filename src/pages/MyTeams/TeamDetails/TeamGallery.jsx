import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { 
  fetchTeamGallery, 
  uploadTeamPhoto,
  deleteTeamPhoto,
  resetTeamGalleryStatus,
  fetchUserStorageInfo
} from '../../../redux/teams/teamsOperations';
import {
  resetTeamGallery
} from '../../../redux/teams/teamsSlice';
import {
  GalleryContainer,
  PhotoViewWrapper,
  NoPhotosMessage,
  GalleryImageContainer,
  BackgroundImage,
  UploadLabel,
  GalleryOverlay,
  GalleryInfo,
  GalleryTitle,
  PhotoCounter,
  StorageInfo,
  StorageBar,
  StorageBarFilled,
  StorageText,
  ViewAllButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalTitleCount,
  CloseButton,
  PhotoGrid,
  PhotoItem,
  PhotoActions,      
  DownloadPhotoButton,
  DeletePhotoButton,
  UploadSection,
  UploadInput,
  UploadButton,
  LoaderWrapper,
  EmptyState,
  ScrollLoader,
  EmptyGalleryIcon,
  PhotoViewModal,
  PhotoViewOverlay,
  PhotoViewContent,
  PhotoViewActions,
  ErrorImage,
  UploadProgress
} from './TeamGallery.styled';
import Loader from '../../../components/Loader/Loader';
import ProgressiveImage from './ProgressiveImage';
import imageNotFound from "../../../assets/ImageNotFound.png";
import { ReactComponent as DeleteIcon } from '../../../assets/DeleteIcon.svg';
import { ReactComponent as DownloadIcon } from '../../../assets/Download.svg';
import { ReactComponent as CloseIcon } from '../../../assets/CloseIcon.svg';
import PhotoZoom from './PhotoZoom';

const TeamGallery = ({ teamId, onSelectionChange }) => {
  const dispatch = useDispatch();
  const { 
    teamGallery, 
    galleryCurrentPage,
    galleryHasMore,
    fetchTeamGalleryStatus,
    uploadTeamPhotoStatus,
    deleteTeamPhotoStatus,
    storageInfo,
    teamDetails,
    uploadTeamPhotoError
  } = useSelector((state) => state.teams);

  const [showModal, setShowModal] = useState(false);
  const [showPhotoView, setShowPhotoView] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageErrors, setImageErrors] = useState(new Set());
  const [showImageErrorToast, setShowImageErrorToast] = useState(true); 
  
  const scrollContainerRef = useRef(null);
  const fileInputRef = useRef(null);

  const loading = fetchTeamGalleryStatus === 'loading' && galleryCurrentPage === 1;
  const uploading = uploadTeamPhotoStatus === 'loading';
  const deleting = deleteTeamPhotoStatus === 'loading';

  useEffect(() => {
    if (teamId) {
      dispatch(resetTeamGallery());
      dispatch(fetchTeamGallery({ teamId, page: 1 }));
      dispatch(fetchUserStorageInfo());
    }

    return () => {
      dispatch(resetTeamGalleryStatus());
      setSelectedFile(null);
      setImageErrors(new Set());
      setShowImageErrorToast(true); 
    };
  }, [teamId, dispatch]);

   useEffect(() => {
    if (onSelectionChange) {
      onSelectionChange(selectedFile !== null);
    }
   }, [selectedFile, onSelectionChange]);
  
  useEffect(() => {
    if (uploadTeamPhotoStatus === 'succeeded') {
      toast.success('Фото успішно завантажено!');
      setSelectedFile(null);
      dispatch(resetTeamGalleryStatus());
      
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }

    if (uploadTeamPhotoStatus === 'failed') {
      if (uploadTeamPhotoError) {
        if (uploadTeamPhotoError.includes('File too large') || uploadTeamPhotoError.includes('max file size') || uploadTeamPhotoError.includes('size')) {
          toast.error('Файл занадто великий (макс. 5MB)');
        } else if (uploadTeamPhotoError.includes('Insufficient storage') || uploadTeamPhotoError.includes('not enough space') || uploadTeamPhotoError.includes('storage')) {
          toast.error('Недостатньо місця в сховищі');
        } else if (uploadTeamPhotoError.includes('Server not responding') || uploadTeamPhotoError.includes('network error') || uploadTeamPhotoError.includes('server')) {
          toast.error('Сервер не відповідає');
        } else if (uploadTeamPhotoError.includes('Invalid file type') || uploadTeamPhotoError.includes('file type') || uploadTeamPhotoError.includes('format')) {
          toast.error('Файл не того формату');
        } else {
          toast.error('Помилка при завантаженні фото');
        }
      } else {
        toast.error('Помилка при завантаженні фото');
      }
      
      dispatch(resetTeamGalleryStatus());
      
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  }, [uploadTeamPhotoStatus, uploadTeamPhotoError, dispatch]);

  useEffect(() => {
    if (deleteTeamPhotoStatus === 'succeeded') {
      toast.success('Фото успішно видалено!');
      dispatch(resetTeamGalleryStatus());
      if (showPhotoView && selectedPhoto && !teamGallery.find(photo => photo.id === selectedPhoto.id)) {
        setShowPhotoView(false);
        setSelectedPhoto(null);
      }
    }

    if (deleteTeamPhotoStatus === 'failed') {
      toast.error('Помилка при видаленні фото');
      dispatch(resetTeamGalleryStatus());
    }
  }, [deleteTeamPhotoStatus, dispatch, showPhotoView, selectedPhoto, teamGallery]);

  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current || isLoadingMore || !galleryHasMore) return;

    const container = scrollContainerRef.current;
    const { scrollTop, scrollHeight, clientHeight } = container;
    
    if (scrollHeight - scrollTop <= clientHeight + 100) {
      setIsLoadingMore(true);
      dispatch(fetchTeamGallery({ 
        teamId, 
        page: galleryCurrentPage + 1 
      })).unwrap().catch((error) => {
        if (error.message && error.message.includes('Server not responding')) {
          toast.error('Сервер не відповідає');
        }
      }).finally(() => {
        setIsLoadingMore(false);
      });
    }
  }, [dispatch, teamId, galleryCurrentPage, galleryHasMore, isLoadingMore]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container && showModal) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll, showModal]);

  const handleImageError = (photoId) => {
    setImageErrors(prev => new Set([...prev, photoId]));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast.error('Файл не того формату');
        return;
      }
      
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Файл занадто великий (макс. 5MB)');
        return;
      }
      
      setSelectedFile(file);
    }
  };

  const handleClearFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.warning('Оберіть файл для завантаження');
      return;
    }

    if (storageInfo) {
      if (storageInfo.remainingBytes < selectedFile.size) {
        const remainingMB = Math.round(storageInfo.remainingBytes / (1024 * 1024));
        const neededMB = Math.round(selectedFile.size / (1024 * 1024));
        toast.error('Недостатньо місця в сховищі');
        return;
      }
    }

    dispatch(uploadTeamPhoto({ teamId, photo: selectedFile })).unwrap().catch((error) => {
     
      if (error.message) {
        if (error.message.includes('File too large')) {
          toast.error('Файл занадто великий (макс. 5MB)');
        } else if (error.message.includes('Insufficient storage')) {
          toast.error('Недостатньо місця в сховищі');
        } else if (error.message.includes('Server not responding')) {
          toast.error('Сервер не відповідає');
        } else if (error.message.includes('Invalid file type')) {
          toast.error('Файл не того формату');
        }
      }
    });
  };

  const handleDeletePhoto = (photoId) => {
    dispatch(deleteTeamPhoto({ teamId, photoId }));
  };

  const handleDownloadPhoto = async (url, photoId) => {
    try {
      const res = await fetch(url, { mode: 'cors' });
      if (!res.ok) {
        throw new Error('Server not responding');
      }
      const blob = await res.blob();
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `team-${teamId}-photo-${photoId}.jpg`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(a.href);
    } catch (e) {
      if (e.message.includes('Server not responding') || e.message.includes('Failed to fetch')) {
        toast.error('Сервер не відповідає');
      } else {
        toast.error('Помилка завантаження фото');
      }
      console.error(e);
    }
  };

  const handleOpenModal = () => {
    setShowModal(true);
    setShowImageErrorToast(true); 
    if (teamGallery.length === 0) {
      dispatch(fetchTeamGallery({ teamId, page: 1 })).unwrap().catch((error) => {
        if (error.message && error.message.includes('Server not responding')) {
          toast.error('Сервер не відповідає');
        }
      });
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowPhotoView(false);
    setSelectedPhoto(null);
    if (selectedFile) {
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleOpenPhotoView = (photo) => {
    if (imageErrors.has(photo.id)) {
      toast.error('Помилка завантаження фото');
      return;
    }
    setSelectedPhoto(photo);
    setShowPhotoView(true);
  };

  const handleClosePhotoView = () => {
    setShowPhotoView(false);
    setSelectedPhoto(null);
  };

  const handleModalOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const formatBytes = (bytes) => {
    if (bytes === 0) return '0 MB';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const lastPhoto = teamGallery && teamGallery.length > 0 ? teamGallery[0] : null;
  const totalPhotos = teamDetails?.galleryCount || teamGallery.length || 0;

  return (
    <>
      <GalleryContainer>
        <GalleryImageContainer onClick={handleOpenModal}>
          <BackgroundImage 
            src={lastPhoto && !imageErrors.has(lastPhoto.id) ? lastPhoto.url : imageNotFound}
            alt="Фон галереї"
            onError={() => lastPhoto && handleImageError(lastPhoto.id)}
          />
          <GalleryOverlay>
            <GalleryInfo>
              <GalleryTitle>Галерея команди</GalleryTitle>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem', 
                justifyContent: 'center',   
                flexWrap: 'wrap',
                marginBottom: '1rem'        
              }}>
                {totalPhotos > 0 ? (
                  <PhotoCounter>{totalPhotos} фото</PhotoCounter>
                ) : (
                  <PhotoCounter>Поки що немає фото</PhotoCounter>
                )}

                {storageInfo && (
                  <StorageInfo>
                    <StorageText>
                      {formatBytes(storageInfo.usedBytes)} / {formatBytes(storageInfo.limitBytes)}
                    </StorageText>
                    <StorageBar>
                      <StorageBarFilled 
                        style={{ 
                          width: `${Math.min(storageInfo.usedPercentage, 100)}%`,
                          backgroundColor: storageInfo.usedPercentage > 90 ? '#ef4444' : 
                                          storageInfo.usedPercentage > 70 ? '#f59e0b' : '#10b981'
                        }} 
                      />
                    </StorageBar>
                  </StorageInfo>
                )}
              </div>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ViewAllButton>
                  {totalPhotos > 0 ? 'Переглянути всі фото' : 'Додати фото'}
                </ViewAllButton>
              </div>
            </GalleryInfo>
          </GalleryOverlay>
        </GalleryImageContainer>
      </GalleryContainer>

      {showModal && (
        <Modal>
          <ModalOverlay onClick={handleModalOverlayClick}/>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>
                Галерея команди
                {totalPhotos > 0 && <ModalTitleCount>({totalPhotos} фото)</ModalTitleCount>}
              </ModalTitle>
            <CloseButton onClick={handleCloseModal} title="Закрити">
              <CloseIcon />
            </CloseButton>
            </ModalHeader>

            <div 
              ref={scrollContainerRef}
              style={{ 
                flex: 1, 
                overflowY: 'auto', 
                padding: '1.5rem',
                paddingBottom: '10px'
              }}
            >
              {teamGallery.length > 0 ? (
                <>
                  <PhotoGrid>
                    {teamGallery.map((photo) => (
                      <PhotoItem key={photo.id}>
                        {imageErrors.has(photo.id) ? (
                          <ErrorImage 
                            src={imageNotFound} 
                            alt="Помилка завантаження"
                            onClick={() => handleOpenPhotoView(photo)}
                          />
                        ) : (
                          <ProgressiveImage 
                            src={photo.url} 
                            alt={`Фото команди ${photo.id}`}
                            onClick={() => handleOpenPhotoView(photo)}
                            onError={() => handleImageError(photo.id)}
                            loading="lazy"
                            $borderRadius="8px"
                            $objectFit="cover"
                            $cursor="pointer"
                          />
                        )}
                        <PhotoActions className="photo-actions">
                          <DownloadPhotoButton 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDownloadPhoto(photo.url, photo.id);
                            }}
                            disabled={deleting || uploading || imageErrors.has(photo.id)}
                            title={imageErrors.has(photo.id) ? "Фото недоступне для завантаження" : "Завантажити фото"}
                          >
                            <DownloadIcon style={{ width: '1.2rem', height: '1.2rem' }} />
                          </DownloadPhotoButton>
                          <DeletePhotoButton 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeletePhoto(photo.id);
                            }}
                            disabled={deleting || uploading}
                            title={deleting || uploading ? "Не можна видалити фото зараз" : "Видалити фото"}
                          >
                            <DeleteIcon />
                          </DeletePhotoButton>
                        </PhotoActions>
                      </PhotoItem>
                    ))}
                  </PhotoGrid>
                  
                  {isLoadingMore && (
                    <ScrollLoader>
                      <Loader />
                    </ScrollLoader>
                  )}
                </>
              ) : (
                <EmptyState>
                  <NoPhotosMessage>Поки що немає фотографій</NoPhotosMessage>
                </EmptyState>
              )}
            </div>
               
            {uploading && (
              <UploadProgress>
                <Loader />
              </UploadProgress>
            )}

            {deleting && (
              <UploadProgress>
                <Loader />
              </UploadProgress>
            )}

            <UploadSection>
              {selectedFile && (
                <div style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: '2px dashed #ccc',
                  borderRadius: '8px',
                  padding: '1rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{ fontSize: '0.9rem', color: '#333' }}>
                    {selectedFile.name.length > 30 
                      ? `${selectedFile.name.substring(0, 30)}...` 
                      : selectedFile.name
                    }
                  </span>
                  <button
                    onClick={handleClearFile}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#ef4444',
                      cursor: 'pointer',
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      padding: '0.25rem'
                    }}
                  >
                     <CloseIcon 
                      style={{ 
                        width: '1rem', 
                        height: '1rem', 
                        color: '#ef4444', 
                        fill: '#ef4444' 
                      }} 
                    />
                  </button>
                </div>
              )}

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <UploadInput
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  id="gallery-upload"
                />
                <UploadLabel htmlFor="gallery-upload">
                  <UploadButton as="span" disabled={uploading}>
                    Додати зображення
                  </UploadButton>
                </UploadLabel>
                
                {selectedFile && (
                  <UploadButton 
                    onClick={handleUpload}
                    disabled={uploading || !selectedFile}
                    $isPrimary={true}
                  >
                    {uploading ? 'Завантаження...' : 'Завантажити зображення'}
                  </UploadButton>
                )}
              </div>
            </UploadSection>
          </ModalContent>
        </Modal>
      )}

      {showPhotoView && (
        <PhotoViewModal onClick={(e) => {
          e.stopPropagation();
          setShowPhotoView(false);
          setSelectedPhoto(null);
        }}>
          <PhotoViewWrapper>
            <PhotoViewContent>
              <PhotoZoom
          src={selectedPhoto?.url}
          alt="Перегляд фото"
          onClick={(e) => e.stopPropagation()}
          onError={() => {
            toast.error('Помилка завантаження фото');
            setShowPhotoView(false);
          }}
          style={{ 
            width: '100%', 
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        />
        
        {deleting && (
          <UploadProgress>
            <Loader />
          </UploadProgress>
        )}
        
        <PhotoViewActions onClick={(e) => e.stopPropagation()}>
          <DownloadPhotoButton
            onClick={() =>
              handleDownloadPhoto(selectedPhoto?.url, selectedPhoto?.id)
            }
            disabled={imageErrors.has(selectedPhoto?.id)}
          >
            <DownloadIcon style={{ width: '1.2rem', height: '1.2rem' }} />
          </DownloadPhotoButton>

          <DeletePhotoButton
            onClick={() => handleDeletePhoto(selectedPhoto?.id)}
          >
            <DeleteIcon style={{ width: '1.2rem', height: '1.2rem' }} />
          </DeletePhotoButton>
        </PhotoViewActions>

        <CloseButton
          onClick={(e) => {
            e.stopPropagation();
            setShowPhotoView(false);
            setSelectedPhoto(null);
          }}
        >
          <CloseIcon />
        </CloseButton>
      </PhotoViewContent>
    </PhotoViewWrapper>
  </PhotoViewModal>
      )}
    </>
  );
};

export default TeamGallery;