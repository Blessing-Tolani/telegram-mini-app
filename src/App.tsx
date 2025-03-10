import { useEffect } from "react";

function App() {
  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
  }, []);

  return (
    <div className="p-6 text-center bg-gray-100 min-h-screen">
      <h1 className="text-xl font-bold text-amber-400">Telegram Mini App</h1>
      <p className="mt-2">
        Welcome to Class Notifier,{" "}
        {window.Telegram.WebApp.initDataUnsafe?.user?.first_name || "User"}!
      </p>
      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        onClick={() => window.Telegram.WebApp.close()}
      >
        Close App
      </button>
    </div>
  );
}

export default App;
