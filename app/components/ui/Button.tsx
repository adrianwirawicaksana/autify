import { ReactNode } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`w-full bg-green-500 animate-[heartbeat_2s_ease-in-out_infinite]
      mt-1 text-black font-semibold py-2 rounded-lg border border-black
      transition duration-200 ease-in-out
      hover:scale-105 hover:font-bold
      active:translate-x-1 active:translate-y-1 active:shadow-none
      shadow-[4px_4px_0px_#000]
      ${props.className ?? ""}`}
    >
      {children}
    </button>
  );
};

export default Button;