import { useClick } from './ClickContext';

export default function Clicker() {
  const { clicks, setClicks } = useClick();

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div id="app">
      <span id="container">
        <h1>Clicks: </h1>
        <h1 id="clicker-count">{clicks}</h1>
      </span>
      <button id="clicker-button" onClick={handleClick}>Click Here!</button>
    </div>
  );
}
