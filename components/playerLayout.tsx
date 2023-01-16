import Sidebar from "./sidebar";

const PlayerLayout = ({ children }) => {
  return (
    <div className="w-screen h-screen">
      <div className="absolute top-0 ml-0 w-60">
        <Sidebar />
      </div>
      <div className="ml-60 mb-28">
        <div className="h-[(100vh-80px)]">{children}</div>
      </div>
      <div className="absolute bottom-0">player</div>
    </div>
  );
};

export default PlayerLayout;
