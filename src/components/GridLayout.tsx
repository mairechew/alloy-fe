import { ReactNode } from "react";

const GridLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {children}
      </div>
    </div>
  );
};

export { GridLayout }