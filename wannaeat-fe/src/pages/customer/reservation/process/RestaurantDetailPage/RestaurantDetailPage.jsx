import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useHeaderStore from '../../../../../stores/common/header/useHeaderStore';
import {
  Box,
  RestaurantImageBox,
  InformationText,
  InformationContainer,
} from './RestaurantDetailPage';
import RestaurantImg from '../../../../../assets/icons/common/food.png';

const RestaurantDetailPage = () => {
  const params = useParams();
  const {
    setIsCarrot,
    pageName,
    setPageName,
    setIsShowLogo,
    setActiveIcons,
    setIsShowBackIcon,
    activeIcons,
    isShowBackIcon,
  } = useHeaderStore();

  useEffect(() => {
    setIsCarrot(true);
    setPageName('서래갈매기 한밭대점'); // 나중에 가게이름
    setIsShowLogo(false);
    setIsShowBackIcon(true);
    setActiveIcons([3]);
  }, []);

  const informations = {
    restaurantBusinessNumber: '수정-수정',
    restaurantOwnerName: '이경곤수정222',
    restaurantAddress: '포항',
    restaurantPhone: '01011112222',
    restaurantName: '경곤수정식당',
    restaurantCategoryName: '보쌈족발',
    restaurantOpenTime: '09:00',
    restaurantCloseTime: '23:59',
    breakStartTime: '12:00',
    breakEndTime: '13:30',
    maxReservationTime: 120,
    minMemberCount: 2,
    maxMemberCount: 5,
    depositPerMember: 10000,
    restaurantDescription: '음식 지림',
    latitude: 12.25,
    longitude: 35.0,
    menuListResponseDto: {
      menusMap: {
        족발: [
          {
            menuId: 1,
            menuName: '개매운족발',
            menuPrice: 10000,
            menuImage: '47716e29-52a6-43ee-a1df-7f25e7a2baa4.jfif',
            menuDescription: '뒤지게 맛있음',
          },
          {
            menuId: 3,
            menuName: 'ABC 초코',
            menuPrice: 10,
            menuImage: 'ffd2cade-a659-445f-a0c4-67ce68e1f58e.png',
            menuDescription: '많이달다',
          },
        ],
        주류: [
          {
            menuId: 2,
            menuName: '맥주',
            menuPrice: 10000,
            menuImage: '82371d62-09f6-4c5d-a685-b3cc5cdf83dd.jfif',
            menuDescription: '뒤지게 맛있음',
          },
        ],
      },
    },
  };

  return (
    <Box>
      {/* <div> {params.id}번 가게 상세페이지</div> */}
      <RestaurantImageBox src={RestaurantImg} />
      <InformationContainer>
        <InformationText>{informations.restaurantDescription}</InformationText>
        <InformationText>{informations.restaurantAddress}</InformationText>
        <InformationText>
          {informations.restaurantOpenTime}~{informations.restaurantCloseTime}
          &nbsp;(브레이크타임 {informations.breakStartTime}~
          {informations.breakEndTime})
        </InformationText>
        <InformationText>{informations.restaurantPhone}</InformationText>
      </InformationContainer>
    </Box>
  );
};

export default RestaurantDetailPage;
