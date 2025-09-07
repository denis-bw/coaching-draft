import { createSlice } from '@reduxjs/toolkit';
import { fetchTeams, searchTeams, createTeam, fetchTeamDetails, updateTeam, deleteTeam, fetchTeamGallery, uploadTeamPhoto, deleteTeamPhoto, uploadMultipleTeamPhotos, fetchUserStorageInfo } from './teamsOperations';

const initialState = {
  teams: [],
  allTeams: {}, 
  pagesFetched: [], 
  currentPage: 1,
  isLoading: false,
  hasMore: true,
  error: null,
  searchQuery: '',
  isSearchMode: false,
  searchPage: 1,
  isAllDataLoaded: false,
  
  createTeamStatus: 'idle', 
  createTeamError: null,
  teamDetails: null,
  fetchTeamDetailsStatus: 'idle',
  fetchTeamDetailsError: null,
  updateTeamStatus: 'idle',
  updateTeamError: null,
  deleteTeamStatus: 'idle',
  deleteTeamError: null,
  
  // Галерея
  teamGallery: [],
  galleryCurrentPage: 1,
  galleryHasMore: true,
  fetchTeamGalleryStatus: 'idle',
  fetchTeamGalleryError: null,
  uploadTeamPhotoStatus: 'idle',
  uploadTeamPhotoError: null,
  deleteTeamPhotoStatus: 'idle',
  deleteTeamPhotoError: null,
  
  // Множинне завантаження
  uploadMultiplePhotosStatus: 'idle',
  uploadMultiplePhotosError: null,
  uploadProgress: null,
  
  // Вибрані файли
  selectedFiles: [],
  
  // Інформація про сховище
  storageInfo: null,
  fetchStorageInfoStatus: 'idle',
  fetchStorageInfoError: null
};

const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    resetTeams: (state) => {
      state.teams = [];
      state.currentPage = 1;
      state.hasMore = true;
      state.error = null;
      state.searchQuery = '';
      state.isSearchMode = false;
      state.searchPage = 1;
    },
    
    resetTeamGallery: (state) => {
      state.teamGallery = [];
      state.galleryCurrentPage = 1;
      state.galleryHasMore = true;
      state.fetchTeamGalleryStatus = 'idle';
      state.fetchTeamGalleryError = null;
    },
    
    resetTeamGalleryStatus: (state) => {
      state.fetchTeamGalleryStatus = 'idle';
      state.fetchTeamGalleryError = null;
      state.uploadTeamPhotoStatus = 'idle';
      state.uploadTeamPhotoError = null;
      state.deleteTeamPhotoStatus = 'idle';
      state.deleteTeamPhotoError = null;
      state.uploadMultiplePhotosStatus = 'idle';
      state.uploadMultiplePhotosError = null;
      state.uploadProgress = null;
    },
    
    setSearchQuery: (state, action) => {
      const query = action.payload;
      
      if (state.searchQuery !== query) {
        state.searchQuery = query;
        state.searchPage = 1;
        state.teams = [];
        state.isSearchMode = query !== '';
        
        if (query === '') {
          const allTeamsArray = Object.values(state.allTeams);
          state.teams = allTeamsArray.slice(0, state.currentPage * 5);
          state.hasMore = !state.isAllDataLoaded;
        } 
        else {
          state.hasMore = true;
        }
      }
    },
    
    filterLocalTeams: (state, action) => {
      const query = action.payload.toLowerCase();
      
      if (state.isAllDataLoaded) {
        const allTeamsArray = Object.values(state.allTeams);
        const filteredTeams = allTeamsArray.filter(team => 
          team.name.toLowerCase().includes(query)
        );
        
        state.teams = filteredTeams;
        state.isSearchMode = true;
        state.searchQuery = query;
        state.hasMore = false;
      }
    },
    
    // Робота з вибраними файлами
    setSelectedFiles: (state, action) => {
      state.selectedFiles = action.payload;
    },
    
    addSelectedFile: (state, action) => {
      state.selectedFiles.push(action.payload);
    },
    
    removeSelectedFile: (state, action) => {
      const indexToRemove = action.payload;
      state.selectedFiles = state.selectedFiles.filter((_, index) => index !== indexToRemove);
    },
    
    clearSelectedFiles: (state) => {
      state.selectedFiles = [];
    },
    
    setUploadProgress: (state, action) => {
      state.uploadProgress = action.payload;
    },
    
    resetCreateTeamStatus: (state) => {
      state.createTeamStatus = 'idle';
      state.createTeamError = null;
    },
    resetFetchTeamDetailsStatus: (state) => {
      state.fetchTeamDetailsStatus = 'idle';
      state.fetchTeamDetailsError = null;
      state.teamDetails = null;
    },
    resetUpdateTeamStatus: (state) => {
      state.updateTeamStatus = 'idle';
      state.updateTeamError = null;
    },
    resetDeleteTeamStatus: (state) => {
      state.deleteTeamStatus = 'idle';
      state.deleteTeamError = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Існуючі редюсери для команд...
      .addCase(fetchTeams.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTeams.fulfilled, (state, action) => {
        state.isLoading = false;
        
        if (action.payload.noMorePages) {
          state.hasMore = false;
          state.isAllDataLoaded = true;
          return;
        }
        
        const { teams, page } = action.payload;
        
        teams.forEach(team => {
          if (!state.allTeams[team.id]) {
            state.allTeams[team.id] = team;
          }
        });
        
        if (!state.pagesFetched.includes(page)) {
          state.pagesFetched.push(page);
        }
        
        const newTeams = teams.filter(team => 
          !state.teams.some(existingTeam => existingTeam.id === team.id)
        );
        
        state.teams = [...state.teams, ...newTeams];
        state.currentPage = page + 1;
        
        if (!teams || teams.length < 5) {  
          state.hasMore = false;
          state.isAllDataLoaded = true;
        }
      })
      .addCase(fetchTeams.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Помилка при завантаженні команд';
      })
      
      .addCase(searchTeams.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(searchTeams.fulfilled, (state, action) => {
        state.isLoading = false;
        
        const { teams, page } = action.payload;
        
        if (action.payload.noMorePages) {
          state.hasMore = false;
          return;
        }
        
        teams.forEach(team => {
          if (!state.allTeams[team.id]) {
            state.allTeams[team.id] = team;
          }
        });
        
        const newTeams = teams.filter(team => 
          !state.teams.some(existingTeam => existingTeam.id === team.id)
        );
        
        state.teams = [...state.teams, ...newTeams];
        state.searchPage = page + 1;
        
        if (!teams || teams.length < 5) {  
          state.hasMore = false;
        }
      })
      .addCase(searchTeams.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Помилка при пошуку команд';
      })
      
      .addCase(createTeam.pending, (state) => {
        state.createTeamStatus = 'loading';
        state.createTeamError = null;
      })
      .addCase(createTeam.fulfilled, (state, action) => {
        state.createTeamStatus = 'succeeded';
  
        const newTeam = action.payload.team;
        if (newTeam && newTeam.id) {
          state.allTeams[newTeam.id] = newTeam;
          
          state.teams = [newTeam, ...state.teams];
        }
      })
      .addCase(createTeam.rejected, (state, action) => {
        state.createTeamStatus = 'failed';
        state.createTeamError = action.payload || 'Помилка при створенні команди';
      })
      
      .addCase(fetchTeamDetails.pending, (state) => {
        state.fetchTeamDetailsStatus = 'loading';
        state.fetchTeamDetailsError = null;
      })
      .addCase(fetchTeamDetails.fulfilled, (state, action) => {
        state.fetchTeamDetailsStatus = 'succeeded';
        state.teamDetails = action.payload;
        
        // Оновлюємо інформацію про сховище якщо є
        if (action.payload.storageInfo) {
          state.storageInfo = action.payload.storageInfo;
        }
        
        if (action.payload && action.payload.id) {
          state.allTeams[action.payload.id] = {
            id: action.payload.id,
            name: action.payload.name,
            logo: action.payload.logo,
            galleryCount: action.payload.galleryCount || 0
          };
        }
      })
      .addCase(fetchTeamDetails.rejected, (state, action) => {
        state.fetchTeamDetailsStatus = 'failed';
        state.fetchTeamDetailsError = action.payload || 'Помилка при завантаженні деталей команди';
      })
      
      .addCase(updateTeam.pending, (state) => {
        state.updateTeamStatus = 'loading';
        state.updateTeamError = null;
      })
      .addCase(updateTeam.fulfilled, (state, action) => {
        state.updateTeamStatus = 'succeeded';
        const updatedTeam = action.payload;
        
        if (state.teamDetails && state.teamDetails.id === updatedTeam.id) {
          state.teamDetails = { ...state.teamDetails, ...updatedTeam };
        }
        
        if (state.allTeams[updatedTeam.id]) {
          state.allTeams[updatedTeam.id] = {
            ...state.allTeams[updatedTeam.id],
            name: updatedTeam.name,
            logo: updatedTeam.logo,
            galleryCount: updatedTeam.galleryCount || state.allTeams[updatedTeam.id].galleryCount || 0
          };
        }
        
        const teamIndex = state.teams.findIndex(team => team.id === updatedTeam.id);
        if (teamIndex !== -1) {
          state.teams[teamIndex] = {
            ...state.teams[teamIndex],
            name: updatedTeam.name,
            logo: updatedTeam.logo,
            galleryCount: updatedTeam.galleryCount || state.teams[teamIndex].galleryCount || 0
          };
        }
      })
      .addCase(updateTeam.rejected, (state, action) => {
        state.updateTeamStatus = 'failed';
        state.updateTeamError = action.payload || 'Помилка при оновленні команди';
      })
      
      .addCase(deleteTeam.pending, (state) => {
        state.deleteTeamStatus = 'loading';
        state.deleteTeamError = null;
      })
      .addCase(deleteTeam.fulfilled, (state, action) => {
        state.deleteTeamStatus = 'succeeded';
        const deletedTeamId = action.payload.deletedTeamId;
        
        state.teams = state.teams.filter(team => team.id !== deletedTeamId);
        
        if (state.allTeams[deletedTeamId]) {
          delete state.allTeams[deletedTeamId];
        }
        
        if (state.teamDetails && state.teamDetails.id === deletedTeamId) {
          state.teamDetails = null;
        }
      })
      .addCase(deleteTeam.rejected, (state, action) => {
        state.deleteTeamStatus = 'failed';
        state.deleteTeamError = action.payload || 'Помилка при видаленні команди';
      })
      
      // Галерея з пагінацією
      .addCase(fetchTeamGallery.pending, (state) => {
        state.fetchTeamGalleryStatus = 'loading';
        state.fetchTeamGalleryError = null;
      })
      .addCase(fetchTeamGallery.fulfilled, (state, action) => {
        state.fetchTeamGalleryStatus = 'succeeded';
        const { photos, pagination, storageInfo, isFirstPage, loadMore } = action.payload;
        
        if (isFirstPage && !loadMore) {
          // Перша загрузка - повністю перезаписуємо галерею
          state.teamGallery = photos || [];
        } else {
          // Додаткова загрузка - додаємо нові фото до існуючих
          const existingIds = new Set(state.teamGallery.map(photo => photo.id));
          const newPhotos = (photos || []).filter(photo => !existingIds.has(photo.id));
          state.teamGallery = [...state.teamGallery, ...newPhotos];
        }
        
        state.galleryCurrentPage = pagination.currentPage;
        state.galleryHasMore = pagination.hasMore;
        
        if (storageInfo) {
          state.storageInfo = storageInfo;
        }
      })
      .addCase(fetchTeamGallery.rejected, (state, action) => {
        state.fetchTeamGalleryStatus = 'failed';
        state.fetchTeamGalleryError = action.payload || 'Помилка при завантаженні галереї команди';
      })

      .addCase(uploadTeamPhoto.pending, (state) => {
        state.uploadTeamPhotoStatus = 'loading';
        state.uploadTeamPhotoError = null;
      })
      .addCase(uploadTeamPhoto.fulfilled, (state, action) => {
        state.uploadTeamPhotoStatus = 'succeeded';
        const { photo, storageInfo } = action.payload;
        
        // Додаємо фото на початок галереї
        state.teamGallery = [photo, ...state.teamGallery];
        
        // Оновлюємо інформацію про сховище
        if (storageInfo) {
          state.storageInfo = storageInfo;
        }
        
        // Оновлюємо кількість фото в команді
        if (state.teamDetails) {
          state.teamDetails.galleryCount = (state.teamDetails.galleryCount || 0) + 1;
        }
      })
      .addCase(uploadTeamPhoto.rejected, (state, action) => {
        state.uploadTeamPhotoStatus = 'failed';
        state.uploadTeamPhotoError = action.payload || 'Помилка при завантаженні фото';
      })

      .addCase(deleteTeamPhoto.pending, (state) => {
        state.deleteTeamPhotoStatus = 'loading';
        state.deleteTeamPhotoError = null;
      })
      .addCase(deleteTeamPhoto.fulfilled, (state, action) => {
        state.deleteTeamPhotoStatus = 'succeeded';
        const { deletedPhotoId, storageInfo } = action.payload;
        
        // Видаляємо фото з галереї
        state.teamGallery = state.teamGallery.filter(photo => photo.id !== deletedPhotoId);
        
        // Оновлюємо інформацію про сховище
        if (storageInfo) {
          state.storageInfo = storageInfo;
        }
        
        // Оновлюємо кількість фото в команді
        if (state.teamDetails && state.teamDetails.galleryCount > 0) {
          state.teamDetails.galleryCount = state.teamDetails.galleryCount - 1;
        }
      })
      .addCase(deleteTeamPhoto.rejected, (state, action) => {
        state.deleteTeamPhotoStatus = 'failed';
        state.deleteTeamPhotoError = action.payload || 'Помилка при видаленні фото';
      })
      
      // Множинне завантаження фото
      .addCase(uploadMultipleTeamPhotos.pending, (state) => {
        state.uploadMultiplePhotosStatus = 'loading';
        state.uploadMultiplePhotosError = null;
        state.uploadProgress = { current: 0, total: 0 };
      })
      .addCase(uploadMultipleTeamPhotos.fulfilled, (state, action) => {
        state.uploadMultiplePhotosStatus = 'succeeded';
        const { uploadedPhotos, storageInfo, successCount } = action.payload;
        
        // Додаємо успішно завантажені фото на початок галереї
        if (uploadedPhotos && uploadedPhotos.length > 0) {
          state.teamGallery = [...uploadedPhotos.reverse(), ...state.teamGallery];
        }
        
        // Оновлюємо інформацію про сховище
        if (storageInfo) {
          state.storageInfo = storageInfo;
        }
        
        // Оновлюємо кількість фото в команді
        if (state.teamDetails && successCount > 0) {
          state.teamDetails.galleryCount = (state.teamDetails.galleryCount || 0) + successCount;
        }
        
        state.uploadProgress = null;
      })
      .addCase(uploadMultipleTeamPhotos.rejected, (state, action) => {
        state.uploadMultiplePhotosStatus = 'failed';
        state.uploadMultiplePhotosError = action.payload || 'Помилка при завантаженні фото';
        state.uploadProgress = null;
      })
      
      // Інформація про сховище
      .addCase(fetchUserStorageInfo.pending, (state) => {
        state.fetchStorageInfoStatus = 'loading';
        state.fetchStorageInfoError = null;
      })
      .addCase(fetchUserStorageInfo.fulfilled, (state, action) => {
        state.fetchStorageInfoStatus = 'succeeded';
        state.storageInfo = action.payload;
      })
      .addCase(fetchUserStorageInfo.rejected, (state, action) => {
        state.fetchStorageInfoStatus = 'failed';
        state.fetchStorageInfoError = action.payload || 'Помилка при отриманні інформації про сховище';
      })
      
      .addMatcher(
        action => action.type === 'app/resetAllData',
        (state) => {
          return initialState;
        }
      );
  },
});

export const { 
  resetTeams, 
  resetTeamGallery,
  setSearchQuery, 
  filterLocalTeams, 
  resetCreateTeamStatus,
  resetFetchTeamDetailsStatus,
  resetUpdateTeamStatus,
  resetDeleteTeamStatus,
  resetTeamGalleryStatus,
  setSelectedFiles,
  addSelectedFile,
  removeSelectedFile,
  clearSelectedFiles,
  setUploadProgress
} = teamsSlice.actions;

export default teamsSlice.reducer;