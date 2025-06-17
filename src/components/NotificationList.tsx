import React, { FC } from 'react';

type Props = {
  times: string[];
  onRemove: (time: string) => void;
};

export const NotificationList: FC<Props> = ({ times, onRemove }) => (
  <ul className="space-y-2">
    {times.map(time => (
      <li key={time} className="flex justify-between items-center border p-2 rounded">
        <span>{time}</span>
        <button
          onClick={() => onRemove(time)}
          className="text-red-500 hover:underline"
        >
          削除
        </button>
      </li>
    ))}
  </ul>
);
