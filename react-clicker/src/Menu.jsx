import React, { useEffect, useState } from 'react';
import { useClick } from './ClickContext.jsx'
import { useCountMulti } from './UpgradeContext';

function Menu() {
    const [ showMenu, setShowMenu ] = useState(false);
    const { clicks, setClicks } = useClick();
    const { countMulti, setCountMulti } = useCountMulti();

    useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key == "m") {
            setShowMenu(prev => !prev);
          }
        };
    
        document.addEventListener('keydown', handleKeyDown);
    
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }, []);

    function buyItem(id=1, cost=100) {
        if (cost > clicks) return;
        setClicks(clicks - cost)

        if (id == 1) setCountMulti(countMulti + 1)
        if (id == 2) setCountMulti(countMulti + 10)
        if (id == 3) setCountMulti(countMulti + 100)
        if (id == 4) setCountMulti(countMulti + 1000)
        if (id == 5) setCountMulti(countMulti + 10000)
        if (id == 6) setCountMulti(countMulti + 100000)
    }

    return (
        <div>
            {showMenu && (
              <div>
                <h2 id="menu-label">Menu</h2>
                <span id="menu-container">
                    <button id="upgrade-button" onClick={() => buyItem(1, 100)} disabled={clicks < 100}>Upgrade 1 | Cost: 100</button>
                    <button id="upgrade-button" onClick={() => buyItem(2, 500)} disabled={clicks < 500}>Upgrade 2 | Cost: 500</button>
                    <button id="upgrade-button" onClick={() => buyItem(3, 1000)} disabled={clicks < 1000}>Upgrade 3 | Cost: 1000</button>
                </span>
                <span id="menu-container">
                    <button id="upgrade-button" onClick={() => buyItem(4, 10000)} disabled={clicks < 10000}>Upgrade 1 | Cost: 10000</button>
                    <button id="upgrade-button" onClick={() => buyItem(5, 50000)} disabled={clicks < 50000}>Upgrade 2 | Cost: 50000</button>
                    <button id="upgrade-button" onClick={() => buyItem(6, 100000)} disabled={clicks < 100000}>Upgrade 3 | Cost: 100000</button>
                </span>
              </div>
            )}
        </div>
    )
}

export default Menu;