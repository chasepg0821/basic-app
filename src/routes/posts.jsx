import React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useRecoilState } from 'recoil';
import { dcCompState } from '../atoms';

export const Route = createFileRoute('/posts')({
  component: Counter,
});

function Counter() {
  const [counterState, setCounterState] = useRecoilState(dcCompState);

  const Display = ({ animal }) => {
    const count = counterState[animal];
    return <div>{`${animal}: ${count}`}</div>;
  };

  const Increment = ({ animal }) => (
    <button
      onClick={() =>
        setCounterState({ ...counterState, [animal]: counterState[animal] + 1 })
      }
    >
      My Friend Likes {animal}
    </button>
  );

  const Clear = () => {
    return (
      <button onClick={() => setCounterState({ dogs: 0, cats: 0 })}>
        Reset
      </button>
    );
  };

  return (
    <div>
      <h1>How many of your friends like cats or dogs?</h1>
      <p>
        Press one of the buttons to add a counter of how many of your friends
        like cats or dogs
      </p>
      <Increment animal="dogs" />
      <Display animal="dogs" />
      <Increment animal="cats" />
      <Display animal="cats" />
      <Clear />
    </div>
  );
}
