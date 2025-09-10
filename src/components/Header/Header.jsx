import React from 'react';
import { 
  HeaderContainer, 
  BurgerButton, 
  Title, 
  ContanerSettings, 
  TexeName,
  MenuIcon,
  ImgAvatar,
  LinkMyAcc,
} from './Header.styled';
import profilePlaceholder from "../../assets/PlaceholderProfileCoach.jpg";
import imageNotFound from "../../assets/ImageNotFound.png";
import BtnTheme from '../BtnTheme/BtnTheme';
import { ReactComponent as SettingsIcon } from '../../assets/SettingsIcon.svg';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Header = ({ toggleSidebar, isMobile, title }) => {
  const { user } = useSelector((state) => state.auth);
  const [previewImage, setPreviewImage] = useState(user.avatar || null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (user.avatar) {
      const img = new Image();
      img.src = user.avatar;

      img.onload = () => {
        setPreviewImage(user.avatar);
        setImageError(false);
      };
      img.onerror = () => {
        setPreviewImage(null);
        setImageError(true);
      };
    } else {
      setPreviewImage(null);
      setImageError(false); // Немає помилки, якщо аватара немає
    }
  }, [user.avatar]);

  // Визначаємо, яке зображення показувати
  const getImageSource = () => {
    if (imageError) {
      return imageNotFound; // Показуємо ImageNotFound тільки при помилці завантаження
    }
    return previewImage || profilePlaceholder; // Або аватар, або плейсхолдер
  };

  // Функція для обробки помилки завантаження зображення
  const handleImageError = (e) => {
    // Перевіряємо, чи це не вже плейсхолдер (щоб уникнути нескінченного циклу)
    if (e.target.src !== profilePlaceholder && e.target.src !== imageNotFound) {
      setImageError(true);
      e.target.src = imageNotFound;
    }
  };
  
  return (
    <HeaderContainer>
      {isMobile && (
        <>
          <BurgerButton onClick={toggleSidebar}><MenuIcon  /></BurgerButton>
          <Title>{title}</Title>
          <ContanerSettings>
            <SettingsIcon style={{ width: '20px', height: '20px' }}  />
            <BtnTheme/>
            <TexeName>{user.username || "User"}</TexeName>
            <LinkMyAcc to="my-account">
              <ImgAvatar
                src={getImageSource()}
                onError={handleImageError}
                loading="lazy"
                alt="User"
              />
            </LinkMyAcc>
          </ContanerSettings>
        </>
      )}
      {!isMobile && (
        <>
          <Title>{title}</Title>
          <ContanerSettings>
            <SettingsIcon style={{ width: '20px', height: '20px' }}  />
            <BtnTheme/>
            <TexeName>{user.username || "User"}</TexeName>
            <LinkMyAcc to="my-account">
              <ImgAvatar
                src={getImageSource()}
                onError={handleImageError}
                loading="lazy"
                alt="User"
              />
            </LinkMyAcc>
          </ContanerSettings>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;