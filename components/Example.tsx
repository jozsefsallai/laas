import { useState } from 'react';

export default function Example() {
  const [input, setInput] = useState('\\int \\frac{1}{\\sqrt{x^2 - a^2}} dx = ln \\left| x + \\sqrt{x^2 - a^2} \\right| + C');

  function updateInput(e) {
    e.preventDefault();
    setInput(e.target.latex.value);
  }

  return (
    <>
      <form onSubmit={updateInput}>
        <textarea name="latex" defaultValue={input} />
        <button type="submit">Go!</button>
      </form>

      <div className="example">
        <img src={`/api/svg?input=${encodeURIComponent(input)}`} alt={input} />
      </div>
    </>
  );
}
