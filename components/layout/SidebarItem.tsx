import React from 'react';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { IconType } from 'react-icons';
import useCurrentUser from '../hooks/useCurrentUser';
import useLoginModal from '../hooks/useLoginModal';

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
  auth?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
  auth,
}) => {
  const { data: currenUser } = useCurrentUser();
  const loginModal = useLoginModal();

  const router = useRouter();
  const handleClick = useCallback(() => {
    if (onClick) onClick();

    if (auth && !currenUser) {
      loginModal.onOpen();
    } else if (href) {
      router.push(href);
    }
  }, [router, onClick, href, currenUser, auth, loginModal]);

  return (
    <div className="flex flex-row items-center" onClick={handleClick}>
      <div
        className="
              rounded-full
              h-14
              w-14
              p-4
              flex
              items-center
              justify-center
              hover:bg-slate-300
              hover:bg-opacity-10
              cursor-pointer
              lg:hidden
        "
      >
        <Icon size={28} color="white" />
      </div>
      <div
        className="
              relative
              hidden
              gap-4
              p-4
              lg:flex
              items-center
              rounded-full
              hover:bg-slate-300
              hover:bg-opacity-10
              cursor-pointer
        "
      >
        <Icon size={24} color="white" />
        <p className="hidden lg:block text-white text-xl">{label}</p>
      </div>
    </div>
  );
};
export default SidebarItem;
