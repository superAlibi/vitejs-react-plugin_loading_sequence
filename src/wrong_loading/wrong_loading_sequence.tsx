import { FC } from 'react';
import { SayHello } from '@/wrong_loading/dir_1';
export const MyComponent: FC = () => {
  new SayHello();
  return <div>this way</div>;
};
