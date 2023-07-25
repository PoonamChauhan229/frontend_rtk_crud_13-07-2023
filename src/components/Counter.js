import { useState } from "react";
import Badge from "@mui/material/Badge";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { IconButton } from "@mui/material";

const Counter = () => {
  const [like, setLike] = useState(0);
  const [dislike, setdisLike] = useState(0);

 
  return (
    <>
      <IconButton
      onClick={() => {
        setLike(like + 1);
      }}
      >
        <Badge
          badgeContent={like}
          color="primary"
          
        >
          <ThumbUpIcon color="action" />
        </Badge>
      </IconButton>

      <IconButton
      onClick={() => {
        setdisLike(dislike + 1);
      }}
      >
        <Badge
          badgeContent={dislike}
          color="error"
          
        >
          <ThumbDownAltIcon color="action" />
        </Badge>
      </IconButton>

    </>
  );
};
export default Counter;
