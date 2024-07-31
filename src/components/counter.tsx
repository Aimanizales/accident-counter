import { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const [draftCount, setDraftCount] = useState<number>(0);

  // console.log('+aa ~ count:', count); // triggers twice due Strict mode (see index.tsx)

  useEffect(() => {
    setDraftCount(count);
  }, [count]);

  return (
    <section className="flex w-2/3 flex-col items-center gap-8 border-4 border-primary-500 bg-white p-8 shadow-lg">
      <h1>Days since the last JS accident</h1>
      <p className="text-6xl">{count}</p>
      <div className="flex gap-2">
        <button onClick={() => setCount((count) => count - 1)}>
          ➖ Decrement
        </button>
        <button onClick={() => setCount(() => 0)}>🔁 Reset</button>
        <button onClick={() => setCount((count) => count + 1)}>
          ➕ Increment
        </button>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setCount(draftCount);
          }}
        >
          <input
            type="number"
            value={draftCount}
            // Four ways to coerce the value as number:
            onChange={(e) => setDraftCount(e.target.valueAsNumber)}
            // onChange={(e) => setDraftCount(+e.target.value)}
            // onChange={(e) => setDraftCount(parseInt(e.target.value))}
            // onChange={(e) => setDraftCount(Number(e.target.value))}
          />
          <button type="submit">Update Counter</button>
        </form>
      </div>
    </section>
  );
};

export default Counter;
