type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function Inner({ className, children }: Props) {
  return (
    <div
      className={`mx-auto w-[calc(630/750*100vw)] md:w-[calc(1344/1536*100%)] md:max-w-[1344px] ${className}`}
    >
      {children}
    </div>
  );
}
