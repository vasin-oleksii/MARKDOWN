import React from "react";

const ContainerFullScreen = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex h-screen w-screen flex-col">{children}</div>;
};

export default ContainerFullScreen;
