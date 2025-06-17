"uses client";

import React from 'react';
import { NotificationForm } from '../components/NotificationForm';
import { NotificationList } from '../components/NotificationList';
import { useNotificationScheduler } from '../hooks/useNotificationScheduler';

const HomePage = () => {
  const { times, addTime, removeTime } = useNotificationScheduler();

  return (
    <div className="min-h-screen flex flex-col items-center p-8 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">通知機能デモ</h1>
      <NotificationForm onAdd={addTime} />
      <NotificationList times={times} onRemove={removeTime} />
      <p className="mt-4 text-gray-600 text-sm">
        （ページを開いている間のみ動作します）
      </p>
    </div>
  );
};

export default HomePage;
