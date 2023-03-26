import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import useCurrentUser from '../hooks/useCurrentUser';
import useLoginModal from '../hooks/useLoginModal';

interface PostItemProps {
  userId?: string;
  data: Record<string, any>;
}

const PostItem: React.FC<PostItemProps> = ({ userId, data }) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const { data: currentUser } = useCurrentUser();
  const goToUser = useCallback(
    (event: any) => {
      event.stopPropagation();
      router.push(`/user/${data.user.id}`);
    },
    [router, data.user.id]
  );
  const goToPost = useCallback(() => {
    router.push(`/posts/${data.id}`);
  }, [router, data.id]);

  return <div>PostItem</div>;
};

export default PostItem;
