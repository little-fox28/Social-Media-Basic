import Image from 'next/image';
import React from 'react';
import Avatar from '../Avatar';
import useUSer from '../hooks/useUser';

interface UserHeroProps {
  userId: string;
}

export const UserHero: React.FC<UserHeroProps> = ({ userId }) => {
  const { data: fetchedUser } = useUSer(userId);
  return (
    <div className="bg-neutral-700 h-44 relative">
      {fetchedUser?.coverImage && (
        <Image
          src={fetchedUser.coverImage}
          fill
          alt="Cover image"
          style={{ objectFit: 'cover' }}
        />
      )}
      <div className="absolute -bottom-16 left-4">
        <Avatar userId={userId} isLarge hasBorder />
      </div>
    </div>
  );
};
