import type { StateCreator } from 'zustand';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { IS_DEV } from '~/config';

export const createZustandStore = <T>(store: StateCreator<T>) => (IS_DEV ? create(devtools(store)) : create(store));
