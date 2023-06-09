import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { FaFeather } from 'react-icons/fa';

import useLoginModal from '../hooks/useLoginModal';

export default function SidebarTweetButton() {
  const router = useRouter();
  const loginModal = useLoginModal();

  const handleClick = useCallback(() => {
    loginModal.onOpen();
  }, [loginModal]);

  return (
    <div onClick={handleClick}>
      <div
        className="
          mt-6
          lg:hidden
          rounded-full
          h-14
          w-14
          p-4
          flex
          items-center
          justify-center
          bg-sky-500
          hover:bg-opacity-80
          transition
          cursor-pointer  
    "
      >
        <FaFeather size={24} color="white" />
      </div>
      <div
        className="
          mt-6
          lg:block
          hidden 
          px-4
          py-2
          rounded-full
          bg-sky-500
          hover:bg-opacity-90
          cursor-pointer
          transition
    "
      >
        <p
          className="
          hidden
          lg:block
          text-center
          text-white
          text-[20px]
        "
        >
          {' '}
          Tweet{' '}
        </p>
      </div>
    </div>
  );
}
