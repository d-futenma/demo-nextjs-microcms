type Props = {
  children: React.ReactNode;
};

export default function Sheet({ children }: Props) {
  return <div className="relative bg-white">{children}</div>;
}
