import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <div className="relative w-full max-w-lg bg-[#fffdd0] border border-black sm:rounded-2xl shadow-lg p-6 md:p-8 text-white overflow-hidden">
      <span className="absolute top-0 left-0 h-2 w-full border-b border-black bg-[linear-gradient(to_right,#f15b5b_0%,#195B94_30%,#008087_65%,#F2FF00_100%)] sm:rounded-full"></span>
      {children}
    </div>
  );
};

export default Card;
