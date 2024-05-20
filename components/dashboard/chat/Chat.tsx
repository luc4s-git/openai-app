'use client';

import { FormEvent, useState } from 'react';

export default function Chat(): React.ReactNode {
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(text);
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]">
      <div>msg</div>
      <form onSubmit={handleSubmit} className="flex justify-center pt-12">
        <div className="join w-full max-w-4xl">
          <input
            type="text"
            placeholder="Message GeniusGPT"
            className="input input-bordered join-item w-full"
            value={text}
            required
            onChange={(e) => setText(e.target.value)}
          />
          <button className="btn btn-primary join-item" type="submit">
            send
          </button>
        </div>
      </form>
    </div>
  );
}
