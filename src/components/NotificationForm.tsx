import React, { useState, FC } from 'react';

type Props = {
  onAdd: (time: string) => void;
};

export const NotificationForm: FC<Props> = ({ onAdd }) => {
  const [input, setInput] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input) {
      onAdd(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-4">
      <input
        type="time"
        value={input}
        onChange={e => setInput(e.target.value)}
        className="border rounded px-2 py-1"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded px-4 py-1 hover:bg-blue-600"
      >
        追加
      </button>
    </form>
  );
};
