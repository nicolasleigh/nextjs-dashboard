import clsx from "clsx";

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
interface ButtonProps extends React.ComponentProps<"button"> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        // The difference between `focus-visible:` and `focus:`
        "flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50",
        // "flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 active:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
    >
      {children}
    </button>
  );
}
