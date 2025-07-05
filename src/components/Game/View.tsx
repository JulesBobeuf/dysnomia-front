import { Link } from "react-router-dom";
import { Game as GameType } from "../../model/game";

interface Props {
  game: GameType;
  coverUrl: string | null;
}

export default function View({ game, coverUrl }: Props) {
  return (
    <Link
      to={`/game/${game.id}`}
      className="game-card"
      state={{ game, cover: coverUrl }}
    >
      {coverUrl && (
        <img
          src={coverUrl}
          alt={`Couverture de ${game.name}`}
          className="game-cover"
        />
      )}
      <div className="game-title">{game.name}</div>
    </Link>
  );
}
