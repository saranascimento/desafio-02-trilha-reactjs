import '../styles/header.scss';

interface GenreHeaderProps {
  title: string;
}

interface HeaderProps {
  selectedGenre : GenreHeaderProps;
}

export function Header({selectedGenre}: HeaderProps) {
  return (
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>
  )
}