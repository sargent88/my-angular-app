export interface Comment {
  id: string;
  text: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'not-started' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate: Date;
  assignedTo: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  comments: Comment[];
}