import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-gray-950 flex items-center justify-center">
      <main className="w-full h-full max-h-screen flex items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;

