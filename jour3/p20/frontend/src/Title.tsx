import type { ReactNode } from "react";

const Title = ({ children }: { children: ReactNode }) => {
  return <h1>{children}</h1>;
};

export default Title;
