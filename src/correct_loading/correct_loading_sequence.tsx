import { FC } from 'react';
import { SayHello } from './cd1';
export const MyComponent2: FC = () => {
  new SayHello();

  return <div>this way</div>;
};
