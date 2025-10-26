import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Types
export interface User {
  id: string;
  name: string;
  isNewUser: boolean;
  hasToken: boolean;
  goal?: string;
  goalCategory?: string;
}

export interface Session {
  id: string;
  isActive: boolean;
  isPaused: boolean;
  startTime?: Date;
  pauseTime?: Date;
  duration: number; // in minutes
  focusPercentage: number;
  goal: string;
}

export interface Rhythm {
  currentStreak: number;
  totalDays: number;
  freezes: number;
  lastActiveDate?: Date;
}

export interface AppState {
  user: User | null;
  session: Session | null;
  rhythm: Rhythm;
  isOnboardingComplete: boolean;
  blockedApps: string[];
}

// Actions
type AppAction =
  | { type: 'SET_USER'; payload: User }
  | { type: 'UPDATE_USER'; payload: Partial<User> }
  | { type: 'START_SESSION'; payload: Session }
  | { type: 'PAUSE_SESSION' }
  | { type: 'RESUME_SESSION' }
  | { type: 'END_SESSION' }
  | { type: 'UPDATE_RHYTHM'; payload: Partial<Rhythm> }
  | { type: 'COMPLETE_ONBOARDING' }
  | { type: 'SET_BLOCKED_APPS'; payload: string[] }
  | { type: 'ADD_BLOCKED_APP'; payload: string }
  | { type: 'REMOVE_BLOCKED_APP'; payload: string };

// Initial state
const initialState: AppState = {
  user: null,
  session: null,
  rhythm: {
    currentStreak: 0,
    totalDays: 0,
    freezes: 3,
  },
  isOnboardingComplete: false,
  blockedApps: [],
};

// Reducer
function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };

    case 'UPDATE_USER':
      return {
        ...state,
        user: state.user ? { ...state.user, ...action.payload } : null,
      };

    case 'START_SESSION':
      return {
        ...state,
        session: action.payload,
      };

    case 'PAUSE_SESSION':
      return {
        ...state,
        session: state.session ? {
          ...state.session,
          isPaused: true,
          pauseTime: new Date(),
        } : null,
      };

    case 'RESUME_SESSION':
      return {
        ...state,
        session: state.session ? {
          ...state.session,
          isPaused: false,
          pauseTime: undefined,
        } : null,
      };

    case 'END_SESSION':
      return {
        ...state,
        session: null,
        rhythm: {
          ...state.rhythm,
          currentStreak: state.rhythm.currentStreak + 1,
          totalDays: state.rhythm.totalDays + 1,
          lastActiveDate: new Date(),
        },
      };

    case 'UPDATE_RHYTHM':
      return {
        ...state,
        rhythm: { ...state.rhythm, ...action.payload },
      };

    case 'COMPLETE_ONBOARDING':
      return {
        ...state,
        isOnboardingComplete: true,
      };

    case 'SET_BLOCKED_APPS':
      return {
        ...state,
        blockedApps: action.payload,
      };

    case 'ADD_BLOCKED_APP':
      return {
        ...state,
        blockedApps: [...state.blockedApps, action.payload],
      };

    case 'REMOVE_BLOCKED_APP':
      return {
        ...state,
        blockedApps: state.blockedApps.filter(app => app !== action.payload),
      };

    default:
      return state;
  }
}

// Context
const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

// Provider
export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

// Hook
export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

// Action creators
export const appActions = {
  setUser: (user: User) => ({ type: 'SET_USER' as const, payload: user }),
  updateUser: (updates: Partial<User>) => ({ type: 'UPDATE_USER' as const, payload: updates }),
  startSession: (session: Session) => ({ type: 'START_SESSION' as const, payload: session }),
  pauseSession: () => ({ type: 'PAUSE_SESSION' as const }),
  resumeSession: () => ({ type: 'RESUME_SESSION' as const }),
  endSession: () => ({ type: 'END_SESSION' as const }),
  updateRhythm: (updates: Partial<Rhythm>) => ({ type: 'UPDATE_RHYTHM' as const, payload: updates }),
  completeOnboarding: () => ({ type: 'COMPLETE_ONBOARDING' as const }),
  setBlockedApps: (apps: string[]) => ({ type: 'SET_BLOCKED_APPS' as const, payload: apps }),
  addBlockedApp: (app: string) => ({ type: 'ADD_BLOCKED_APP' as const, payload: app }),
  removeBlockedApp: (app: string) => ({ type: 'REMOVE_BLOCKED_APP' as const, payload: app }),
};
