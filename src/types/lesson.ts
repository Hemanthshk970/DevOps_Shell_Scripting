export interface Lesson {
  id: string;
  title: string;
  description: string;
  category: 'basics' | 'file-operations' | 'permissions' | 'advanced';
  theory: string;
  syntax: string;
  examples: Array<{
    command: string;
    description: string;
    output?: string;
  }>;
  exercises: Array<{
    task: string;
    hint: string;
    solution: string;
  }>;
}

export interface LessonProgress {
  lessonId: string;
  completed: boolean;
  progress: number;
}