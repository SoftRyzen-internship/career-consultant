import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';

type IHeader = {
  className: string;
};

export const Header = ({ className }: IHeader) => {
  return (
    <header className={className}>
      <Container>
        <Logo />
      </Container>
    </header>
  );
};
