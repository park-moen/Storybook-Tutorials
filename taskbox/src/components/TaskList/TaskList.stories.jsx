import TaskList from './TaskList';

import * as TaskStories from '../Task/Task.stories';

export default {
  component: TaskList,
  title: 'TaskList',
  decorators: [story => <div style={{ margin: '3rem' }}>{story()}</div>],
  tags: ['autodocs'],
  args: {
    ...TaskStories.ActionsData,
  },
};

export const Default = {
  args: {
    tasks: [
      { ...TaskStories.Default.args.task, id: '1', title: 'Task1' },
      { ...TaskStories.Default.args.task, id: '2', title: 'Task2' },
      { ...TaskStories.Default.args.task, id: '3', title: 'Task3' },
      { ...TaskStories.Default.args.task, id: '4', title: 'Task4' },
      { ...TaskStories.Default.args.task, id: '5', title: 'Task5' },
      { ...TaskStories.Default.args.task, id: '6', title: 'Task6' },
    ],
  },
};

export const WithPinnedTasks = {
  args: {
    tasks: [
      ...Default.args.tasks.slice(0, 5),
      { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
    ],
  },
};

export const Loading = {
  args: {
    tasks: [],
    loading: true,
  },
};

export const Empty = {
  args: {
    ...Loading.args,
    loading: false,
  },
};
