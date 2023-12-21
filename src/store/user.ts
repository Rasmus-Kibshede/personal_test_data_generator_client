import { User } from '../types/user';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthUserStore = {
  user: User | null;
  setUser: (authUser: User) => void;
  resetUser: () => void;
};

export const useUserStore = create<AuthUserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user: user }),
      resetUser: () => set({ user: null}),
    }),
    {
      name: 'user-storage',
    }
  )
);
