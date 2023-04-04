import { BsTwitter } from "react-icons/bs";

import { useEffect } from "react";
import useCurrentUser from "./hooks/useCurrentUser";
import useNotifications from "./hooks/useNotification";

const NotificationsFeed = () => {
  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
  const { data: fetchedNotifications = [] } = useNotifications(currentUser?.id);

  useEffect(() => {
    mutateCurrentUser();
  }, [mutateCurrentUser]);

  if (fetchedNotifications.length === 0) {
    return (
      <div className="text-neutral-600 text-center p-6 text-xl">
        No notifications
      </div>
    );
  }

  return (
    <div className="flex flex-col m-2">
      {fetchedNotifications.map((notification: Record<string, any>) => (
        <div
          key={notification.id}
          className="flex flex-row items-center space-x-4 shadow-lg rounded-lg bg-slate-800 mx-auto m-2 p-7 w-full"
        >
          <BsTwitter color="white" size={32} />
          <p className="text-white">{notification.body}</p>
        </div>
      ))}
    </div>
  );
};

export default NotificationsFeed;
// className="shadow-lg rounded-lg bg-slate-800 mx-auto m-8 p-4 notification-box"
