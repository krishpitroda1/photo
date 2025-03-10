import React, { useState, useEffect } from "react"; 
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  return (
    <div>
      {loading ? (
        <SplashScreen />
      ) : (
        <>
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="p-6 text-center">
            <h1 className="text-4xl font-bold text-gray-900">
              Welcome to My Photography Portfolio
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              Capturing timeless moments with elegance and creativity.
            </p>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
