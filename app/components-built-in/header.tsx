interface HeaderProps {
  children?: React.ReactNode;
}
import Image from 'next/image';
import plusLogo from '../../public/plusLogo.png'
import UTPL from '../../public/logo.png'

export default function Header({ children }: HeaderProps) {
  
  return (
    <div className="flex flex-row absolute top-0 h-[10%] w-full bg-primary-background justify-between items-center">
      <Image className='p-4' src={plusLogo} alt='PLUS LOGO' width={200} height={100}/>
      {children}
      <Image className='p-4' src={UTPL} alt='UTPL LOGO' width={150} height={75}/>
    </div>
  );
}
