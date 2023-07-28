import React from 'react';

interface State {
  /**
   * Disable all JavaScript based animations
   *
   * This includes Framer Motion animations and manual css values.
   *
   * @default false
   */
  disableAnimations: boolean;

  singletonComponents: Record<
    string,
    {
      element: ReturnType<React.FC>;
      instanceCount: React.MutableRefObject<number>;
    }
  >;

  theme: 'light' | 'dark';
}

const defaultState: State = {
  disableAnimations: false,
  singletonComponents: {},
  theme: 'light',
};

const SpaceKitStateContext = React.createContext<State | undefined>(undefined);

/**
 * Hook to get the values from the Space Kit Provider with sensible defaults for
 * all the values.
 *
 * This component does _not_ require us to be wrapped with `SpaceKitProvider`
 */
export function useSpaceKitProvider(): Readonly<State> {
  const context = React.useContext(SpaceKitStateContext);

  if (context == null) {
    // Provide a default because consumers are not required to wrap their
    // components with our providers
    return defaultState;
  }

  return context;
}
