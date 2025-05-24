import { UpgradeProvider } from './UpgradeContext.jsx';
import { ClickProvider } from './ClickContext.jsx';

export const ContextHandler = ({ children }) => (
  <UpgradeProvider>       {/* Must wrap ClickProvider */}
    <ClickProvider>
      {children}
    </ClickProvider>
  </UpgradeProvider>
);
