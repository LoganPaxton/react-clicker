import { useClick } from './ClickContext';
import { useCountMulti } from './UpgradeContext';

export default function Clicker() {
  const { clicks, setClicks } = useClick();
  const { countMulti } = useCountMulti();

  const handleClick = () => {
    const multiplier = countMulti > 0 ? countMulti : 1;
    setClicks(prev => prev + multiplier);
  };

  return (
    <div id="app">
      <span id="count-container">
        <h1>Clicks: </h1>
        <h1 id="clicker-count">{clicks}</h1>
      </span>
      <span id="multi-container">
        <h2>Multiplier: </h2>
        <h2 id="multi-count">+{countMulti}</h2>
      </span>
      <button id="clicker-button" onClick={handleClick}>Click Here!</button>
    </div>
  );
}
