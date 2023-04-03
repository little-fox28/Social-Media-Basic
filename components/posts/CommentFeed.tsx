import React from "react";
import CommentItems from "./CommentItems";

interface CommentsFeedProps {
  comments?: Record<string, any>[];
}

export const CommentFeed: React.FC<CommentsFeedProps> = ({ comments = [] }) => {
  return (
    <>
      {comments.map((comment) => (
        <CommentItems key={comment.id} data={comment} />
      ))}
    </>
  );
};
