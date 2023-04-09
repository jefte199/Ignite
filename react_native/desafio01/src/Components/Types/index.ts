export interface task {
  tasks: string;
  removeTask: () => void;
  preCount: () => void;
  CountCheck: number;
  setCountCheck: React.Dispatch<React.SetStateAction<number>>;
}