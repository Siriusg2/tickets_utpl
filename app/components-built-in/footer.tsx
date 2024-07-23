interface FooterProps {
  children?: React.ReactNode;
}
export default function Footer({ children }: FooterProps) {
  return (
    <div className="absolute bottom-0 h-[10%] w-full bg-primary-background">
      {children}
    </div>
  );
}
