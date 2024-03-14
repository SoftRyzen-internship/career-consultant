import { Container } from '@/components/Container';

type IHeader = {
  className: string;
};

export const Header = ({ className }: IHeader) => {
  return (
    <header className={className}>
      <Container>It is header</Container>
    </header>
  );
};
