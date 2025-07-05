import { Game } from "./game";

export interface Cover {
    alphaChannel: boolean;
    animated: boolean;
    checksum: string;
    game: Game;
    gameLocalization: null | unknown; // Ajuster selon les valeurs possibles
    id: number;
    height: number;
    imageId: string;
    url: string;
    width: number;
  }