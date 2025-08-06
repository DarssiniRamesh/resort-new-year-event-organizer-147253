import React, { createContext, useContext, useState, useCallback } from 'react';

const NotificationContext = createContext();

/**
 * PUBLIC_INTERFACE
 * NotificationProvider exposes showToast/toasts for feedback & engagement.
 */
export function NotificationProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  // Add a toast
  const showToast = useCallback((msg, type = 'success') => {
    const id = Date.now() + Math.random();
    setToasts((current) => [
      ...current,
      { id, msg, type }
    ]);
    setTimeout(() => {
      setToasts((current) => current.filter((t) => t.id !== id));
    }, 3200);
  }, []);

  return (
    <NotificationContext.Provider value={{ showToast }}>
      {children}
      <div className="toasts-container" aria-live="polite">
        {toasts.map((t) => (
          <div key={t.id} className={`toast ${t.type}`}>
            {t.msg}
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
}

/**
 * PUBLIC_INTERFACE
 * useNotification for triggering toasts.
 */
export function useNotification() {
  return useContext(NotificationContext);
}
