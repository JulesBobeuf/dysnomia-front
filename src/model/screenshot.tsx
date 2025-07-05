export interface Screenshot {
    id: number;
    url: string;
    imageId: string;
    height: number;
    width: number;
    alphaChannel: boolean;
    animated: boolean;
    checksum: string;
    game: {
      id: number;
      value: unknown;
    };
  }
  