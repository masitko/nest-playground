export type mouseEvent = {
  x: number;
  y: number;
  type: string;
};

export type mouseEventResponse = {
  status: string;
} & mouseEvent;
