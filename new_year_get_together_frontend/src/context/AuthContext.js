import React, { createContext, useState, useEffect, useContext } from 'react';
import { supabase } from '../supabaseClient';

const AuthContext = createContext();

/**
 * PUBLIC_INTERFACE
 * AuthProvider wraps the app and provides auth state/context.
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null);

  useEffect(() => {
    // Auth state change subscription for login/logout/session
    const session = supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
      refreshRole(session?.user);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
        refreshRole(session?.user);
      }
    );

    return () => {
      listener?.subscription?.unsubscribe();
    };
    // eslint-disable-next-line
  }, []);

  const refreshRole = async (user) => {
    // Fetch role from user metadata or public users table
    if (user) {
      // Try public.users table
      const { data } = await supabase
        .from('users')
        .select('role')
        .eq('id', user.id)
        .maybeSingle();
      setRole(data?.role || null);
    } else {
      setRole(null);
    }
  };

  // PUBLIC_INTERFACE
  const login = async ({ email, password }) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error };
  };

  // PUBLIC_INTERFACE
  const logout = async () => {
    await supabase.auth.signOut();
  };

  // PUBLIC_INTERFACE
  const register = async ({ email, password, name }) => {
    // Onboard via Supabase auth, then insert profile into table
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (!error && data.user) {
      await supabase.from('users').insert([
        { id: data.user.id, email, name, role: 'attendee' }
      ]);
    }
    return { error };
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        register,
        role,
        refreshRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

/**
 * PUBLIC_INTERFACE
 * useAuth hook to access auth context in components.
 */
export function useAuth() {
  return useContext(AuthContext);
}
