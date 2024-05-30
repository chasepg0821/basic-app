import { atom } from 'recoil';

const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }
    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

const defaultValue = (key, alt) => {
  const savedValue = localStorage.getItem(key);
  return !!savedValue ? savedValue : alt;
};

/**
 * options {
 *  key: {unique key}
 *  default: {default state}
 *  effects: [list of effects] *REQUIRED FOR THIS IMPLEMENTATION, NOT FOR DEFAULT RECOIL*
 * }
 */
function makeLocalStorageAtom(options) {
  return atom({
    ...options,
    effects: [...options.effects, localStorageEffect(options.key)],
  });
}

export const dcCompState = makeLocalStorageAtom({
  key: 'dogsvscats',
  default: {
    dogs: 0,
    cats: 0,
  },
  effects: [],
});

export const themeState = makeLocalStorageAtom({
  key: 'theme',
  default: defaultValue('theme', 'system'),
  effects: [],
});
