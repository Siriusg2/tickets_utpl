interface HeaderProps {
  children?: React.ReactNode;
}
export default function Header({ children }: HeaderProps) {
  return (
    <div className="absolute top-0 h-[10%] w-full bg-primary-background">
      {children}
    </div>
  );
}
