import React from "react";
import { Card, IconButton, Chip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const RestaurantCard = () => {
  return (
    <Card className=" w-[18rem]">
      <div
        className={`${true ? "cursor-pointer" : "cursor-not-allowed"} relative`}
      >
        <img
          className="w-full h-[10rem]"
          src="https://media.istockphoto.com/id/829150472/photo/indian-food-eating-cuisine-togetherness-concept.jpg?s=1024x1024&w=is&k=20&c=XY38B6xEbYW8tfWnlmEzTEZPFisNR4kFumh-kybMQsw="
          alt="restaurant"
        />

        <Chip
          size="small"
          className="absolute top-2 left-2"
          color={true ? "success" : "error"}
          label={true ? "open" : "closed"}
        />
      </div>

      <div className="p-4 textPart lg:flex w-full justify-between">
        <div className="space-y-1">
          <p className="font-semibold text-lg"> Indian Fast Food</p>
          <p className="text-gray-500 text-sm">
            Craving it all? Dive into out global fla....
          </p>
        </div>

        <div>
          <IconButton>
            {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;
