import { clientInstance } from 'utils/http-client';

// 카카오페이

// 보증금 결제 카페
export const payDepositPaymentByKakaoPay = async ({ requestDto }) => {
  return (await clientInstance.post('/api/payments/deposit/kakao', requestDto))
    .then((result) => result)
    .catch((error) => error);
};

// 음식비 결제준비완료 카페
export const readyMenuPaymentByKakaoPay = async () => {
  return (await clientInstance.post('/api/payments/menus/ready/kakao'))
    .then((result) => result)
    .catch((error) => error);
};

// 음식비 결제 카페
export const payMenuByKakaoPay = async () => {
  return (await clientInstance.post('/api/payments/menus/kakao'))
    .then((result) => result)
    .catch((error) => error);
};
