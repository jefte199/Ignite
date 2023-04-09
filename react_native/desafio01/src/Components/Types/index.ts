export interface task {
  tasks: string;
  removeTask: () => void;
  CountCheck: number;
  setCountCheck: React.Dispatch<React.SetStateAction<number>>;
}