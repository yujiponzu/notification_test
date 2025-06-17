"uses client";
import { useEffect, useRef, useState } from 'react';

export const useNotificationScheduler = () => {
  const [times, setTimes] = useState<string[]>([]);
  const scheduledRef = useRef<Set<string>>(new Set());

  // 通知権限の取得
  const requestPermission = async () => {
    if (!('Notification' in window)) return;
    if (Notification.permission === 'default') {
      await Notification.requestPermission();
    }
  };

  // 時刻追加
  const addTime = (time: string) => {
    if (!times.includes(time)) {
      setTimes(prev => [...prev, time]);
    }
  };

  // 時刻削除
  const removeTime = (time: string) => {
    setTimes(prev => prev.filter(t => t !== time));
    scheduledRef.current.delete(time);
  };

  useEffect(() => {
    requestPermission();

    const checkInterval = setInterval(() => {
      const now = new Date();
      const hhmm = now.toTimeString().slice(0,5);
      if (times.includes(hhmm) && !scheduledRef.current.has(hhmm)) {
        // 通知発火
        if (Notification.permission === 'granted') {
          new Notification('通知機能デモ', { body: `時刻 ${hhmm} になりました！` });
        } else {
          alert(`時刻 ${hhmm} になりました！`);
        }
        scheduledRef.current.add(hhmm);
      }
    }, 1000 * 30); // 30秒ごと

    return () => clearInterval(checkInterval);
  }, [times]);

  return { times, addTime, removeTime };
};
