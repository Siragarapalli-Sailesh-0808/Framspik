import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="w-full h-dvh overflow-hidden md:bg-gray-950 flex items-center justify-center">
      <main className="w-full h-full flex items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;

