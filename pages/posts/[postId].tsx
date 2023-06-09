import Form from "@/components/Form";
import Header from "@/components/Header";
import usePost from "@/components/hooks/usePost";
import PostItem from "@/components/posts/PostItem";
import { useRouter } from "next/router";
import React from "react";
import { ClipLoader } from "react-spinners";

const PostView = () => {
  const router = useRouter();
  const { postId } = router.query;
  const { data: fetchedPost, isLoading } = usePost(postId as string);

  if (isLoading || !fetchedPost) {
    return (
      <div
        className="
        flex
        justify-center
        items-center
        h-full
        "
      >
        <ClipLoader color="lightblue" size={80} />
      </div>
    );
  }

  return (
    <>
      <Header label={"Tweet"} showBackArrow={true} />
      <PostItem data={fetchedPost} userId={""} />
      <Form
        placeholder={"Tweet your reply"}
        isComment
        postId={postId as string}
      />
    </>
  );
};

export default PostView;
