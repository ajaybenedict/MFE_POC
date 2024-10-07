import React, { Suspense } from "react";

const RemoteMicrofrontend1App = React.lazy(() => import("microfrontend1/Microfrontend1App"));
const RemoteMicrofrontend2App = React.lazy(() => import("microfrontend2/Microfrontend2App"));

const App = () => {
  return <div>
  <Suspense fallback="Loading...">
      <h1>Main App</h1>
      <RemoteMicrofrontend1App />
      <RemoteMicrofrontend2App />
 </Suspense>
 </div>
};

export default App