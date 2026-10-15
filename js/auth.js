/**
 * SoftSolution Admin Authentication Module
 * Manages admin session, login validation, session expiration, and authorization checks.
 */

const AUTH_KEY = 'softsolution_admin_session_v1';
const ADMIN_CREDENTIALS_KEY = 'softsolution_admin_creds_v1';

// Default admin account
const DEFAULT_ADMIN = {
  email: 'admin@softsolution.com',
  passwordHash: btoa('admin123'), // Base64 encoded for prototype security
  name: 'System Administrator',
  role: 'Super Admin',
};

// 4 hours session duration
const SESSION_DURATION_MS = 4 * 60 * 60 * 1000;

export function getStoredCredentials() {
  try {
    const raw = localStorage.getItem(ADMIN_CREDENTIALS_KEY);
    if (!raw) return DEFAULT_ADMIN;
    return JSON.parse(raw);
  } catch (err) {
    return DEFAULT_ADMIN;
  }
}

export function saveStoredCredentials(email, password, name) {
  try {
    const creds = {
      email: email.trim().toLowerCase(),
      passwordHash: btoa(password),
      name: name || 'System Administrator',
      role: 'Super Admin',
    };
    localStorage.setItem(ADMIN_CREDENTIALS_KEY, JSON.stringify(creds));
    return true;
  } catch (err) {
    return false;
  }
}

export function login(email, password) {
  const creds = getStoredCredentials();
  const normalizedEmail = (email || '').trim().toLowerCase();

  if (normalizedEmail === creds.email && btoa(password) === creds.passwordHash) {
    const session = {
      token: 'tok_' + Math.random().toString(36).substring(2) + Date.now().toString(36),
      email: creds.email,
      name: creds.name,
      role: creds.role,
      loginTime: Date.now(),
      expiresAt: Date.now() + SESSION_DURATION_MS,
    };
    localStorage.setItem(AUTH_KEY, JSON.stringify(session));
    return { success: true, session };
  }

  return { success: false, error: 'Invalid email or password. Please use admin@softsolution.com / admin123' };
}

export function getCurrentSession() {
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    if (!raw) return null;
    const session = JSON.parse(raw);

    // Check expiration
    if (Date.now() > session.expiresAt) {
      logout();
      return null;
    }

    return session;
  } catch (err) {
    return null;
  }
}

export function isAuthenticated() {
  return getCurrentSession() !== null;
}

export function requireAuth(redirectUrl = '/admin/login.html') {
  if (!isAuthenticated()) {
    window.location.href = redirectUrl;
    return false;
  }
  return true;
}

export function logout() {
  try {
    localStorage.removeItem(AUTH_KEY);
  } catch (err) {
    console.error(err);
  }
  window.location.href = '/admin/login.html';
}
