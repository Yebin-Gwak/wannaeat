import { authClientInstance } from 'utils/http-client';

export const registRestaurant = async (restaurantData) => {
  return await authClientInstance
    .post('/api/restaurants', restaurantData)
    .then((result) => result)
    .catch((error) => error);
};
