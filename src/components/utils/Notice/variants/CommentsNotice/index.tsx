import React from "react";
import Notice from "../..";
import SearchIcon from "../../../../icons/SearchIcon";

const CommentsNotice: React.FC = () => {
  return (
    <Notice
      icon={<SearchIcon />}
      title="¡No hay comentarios!"
      description="No hay comentarios creados, se el primero en comentar."
    />
  );
};

export default CommentsNotice;
