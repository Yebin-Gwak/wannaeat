package com.waterdragon.wannaeat.domain.restaurant.service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.waterdragon.wannaeat.domain.menu.dto.response.MenuListResponseDto;
import com.waterdragon.wannaeat.domain.restaurant.dto.request.RestaurantEditRequestDto;
import com.waterdragon.wannaeat.domain.restaurant.dto.request.RestaurantRegisterRequestDto;
import com.waterdragon.wannaeat.domain.restaurant.dto.response.RestaurantCategoryListResponseDto;
import com.waterdragon.wannaeat.domain.restaurant.dto.response.RestaurantDetailResponseDto;
import com.waterdragon.wannaeat.domain.restaurant.dto.response.RestaurantMapListResponseDto;

public interface RestaurantService {

	void registerRestaurant(RestaurantRegisterRequestDto restaurantRegisterRequestDto);

	RestaurantMapListResponseDto getListRestaurantsByFilter(Long categoryId, String keyword, LocalDate reservationDate,
		LocalTime startTime, LocalTime endTime, Integer memberCount, Double latitude, Double longitude);

	RestaurantDetailResponseDto getDetailRestaurantByRestaurantId(Long restaurantId);

	MenuListResponseDto getListMenusByRestaurantId(Long restaurantId);

	RestaurantCategoryListResponseDto getListRestaurantCategories();

	void editRestaurant(Long restaurantId, RestaurantEditRequestDto restaurantEditRequestDto,
		List<MultipartFile> multipartFiles);
}
