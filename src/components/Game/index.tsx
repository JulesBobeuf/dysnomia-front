import './styles.css';
import { Game as GameType } from "../../model/game";
import useCoverGames from "../../hooks/useCoverGame";
import View from "./View";

interface Props {
  game: GameType;
}

export default function Game({ game }: Props) {
  const coverUrl = useCoverGames(game.id);
  return <View game={game} coverUrl={coverUrl} />;
}
