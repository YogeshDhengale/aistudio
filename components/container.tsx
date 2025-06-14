import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      id="workspace"
      className="bg-background flex-1 size-full overflow-auto rounded-2xl will-change-auto shadow transform transition-all duration-500 ease-in-out -mr-1 md:mr-0 flex flex-col"
    >
      {children}
    </div>
  );
};

export default Container;
