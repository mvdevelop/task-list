// TypeScript interfaces for Task List App
export interface ITarefa {
  id: string;
  text: string;
  concluida: boolean;
}

export interface ITarefaInput {
  text: string;
}

export interface IFormProps {
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  novaTarefa: string;
}

export interface ITarefasProps {
  tarefas: ITarefa[];
  handleEdit: (e: React.MouseEvent, index: number) => void;
  handleDelete: (e: React.MouseEvent, index: number) => void;
  handleToggle: (index: number) => void;
}

export interface IErrorBoundaryState {
  error: Error | null;
}

export interface IUseTaskManagerState {
  novaTarefa: string;
  tarefas: ITarefa[];
  index: number;
}

export interface IUseTaskManagerProps {
  initialTasks: ITarefa[];
}

export interface IThemeProps {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  border: string;
}

export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
  confirmLabel: string;
  cancelLabel: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export interface INotificationProps {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}