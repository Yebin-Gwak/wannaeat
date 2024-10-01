package com.waterdragon.wannaeat.domain.restaurant.dto.response;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class TableDetailResponseDto {

	private int tableId;
	private int assignedSeats;
	private double x;
	private double y;
	private int floor;
}
