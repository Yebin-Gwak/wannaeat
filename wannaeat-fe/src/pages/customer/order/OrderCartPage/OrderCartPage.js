import styled from '@emotion/styled';
import theme from 'style/common/theme';

export const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5vh 0 0 0;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  align-items: center;
`;

// 탭 스타일
export const WETabContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${theme.color.white};
`;

export const TotalMenuP = styled.p`
  font-size: 15px;
  font-weight: 700;
  margin-left: 0.5rem;
`;

export const DeleteDiv = styled.div`
  display: flex;
  align-items: center;
  margin-right: 3vw;

  & > button {
    padding: 5px;
    border-radius: 9px;
    border: 1.5px solid rgba(192, 192, 192, 1);
    font-size: ${theme.fontSize.px11};
    font-weight: ${theme.fontWeight.default};
    color: rgba(192, 192, 192, 1);
  }
`;

export const FoodDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LineDiv = styled.div`
  border: 1px solid rgba(212, 212, 212, 1);
  width: 100%;
  margin-top: 0.5vh;
  margin-bottom: 1.5vh;
`;

export const MenuDiv = styled.div`
  padding: 0.5rem;
  height: ${(props) => (props.role ? '52vh' : '60vh')};
  overflow-y: auto;
  -ms-overflow-style: none; /* 인터넷 익스플로러용 스크롤바 숨김 */
  scrollbar-width: none; /* 파이어폭스용 스크롤바 숨김 */

  &::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 엣지 등 웹킷 브라우저용 스크롤바 숨김 */
  }
`;

export const MenuImg = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 15px;
  border-radius: 6px;
`;

export const FoodInfoDiv = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const DeleteImg = styled.img`
  position: absolute;
  top: 3%;
  right: 5%;
  cursor: pointer;
`;

export const FoodInfoTopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
`;

export const FoodInfoCountDiv = styled.div`
  height: 20px;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
`;

export const FoodPriceP = styled.p`
  font-size: ${theme.fontSize.px15};
  font-weight: ${theme.fontWeight.bold};
`;

export const MenuNameP = styled.p`
  font-size: ${theme.fontSize.px13};
  font-weight: bold;
`;

export const FoodInfoCountP = styled.p`
  border-top: 1px solid rgba(212, 212, 212, 1);
  border-bottom: 1px solid rgba(212, 212, 212, 1);
  font-size: 11px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  background-color: white;
  height: 22px;
`;

export const FoodInfoCountLeftBtn = styled.button`
  background-color: white;
  width: 23px;
  height: 23px;
  color: rgba(212, 212, 212, 1);
  border: 1px solid rgba(212, 212, 212, 1);
  border-radius: 6px 0 0 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const FoodInfoCountRightBtn = styled.button`
  background-color: white;
  width: 23px;
  height: 23px;
  color: rgba(212, 212, 212, 1);
  border: 1px solid rgba(212, 212, 212, 1);
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const FoodInfoBottomDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

export const PeopleP = styled.p`
  font-size: ${theme.fontSize.px11};
  color: #424242;
  display: inline-block;
  @media (min-width: 480px) {
    font-size: ${theme.fontSize.px13};
  }
`;

export const TotalPriceDiv = styled.div`
  display: flex;
  justify-content: right;
`;

export const TotalPriceP = styled.p`
  font-size: ${theme.fontSize.px15};
  font-weight: ${theme.fontWeight.bold};
`;

export const OrderContainer = styled.div``;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0px;
`;
