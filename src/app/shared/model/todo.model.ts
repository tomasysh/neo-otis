export interface Todo {
  id: number,
  plan?: string,
  summary: string,
  status: TodoStatus,
  tag?: string[],
  assignee: number[],
  dueDate?: string | Date
}

export enum TodoStatus {
  OPEN = 'OPEN',
  DOING = 'DOING',
  DONE = 'DONE'
}
