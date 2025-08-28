'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';

type Toast = { id: string; title: string; description?: string; type?: 'success' | 'error' | 'info' };
type Ctx = { addToast: (t: Omit<Toast, 'id'>) => void };

const ToastContext = createContext<Ctx>({ addToast: () => {} });

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((t: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).slice(2);
    setToasts((prev) => [...prev, { id, ...t }]);
    const timeoutId = setTimeout(() => setToasts((prev) => prev.filter((x) => x.id !== id)), 3500);
    return () => clearTimeout(timeoutId);
  }, []);

  const ctx = useMemo(() => ({ addToast }), [addToast]);

  return (
    <ToastContext.Provider value={ctx}>
      {children}
      <div className="toast-root" role="status" aria-live="polite">
        {toasts.map((t) => (
          <div key={t.id} className={`toast ${t.type === 'success' ? 'toast-success' : t.type === 'error' ? 'toast-error' : ''}`}>
            <div className="font-medium">{t.title}</div>
            {t.description && <div className="text-sm text-muted-foreground">{t.description}</div>}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}

