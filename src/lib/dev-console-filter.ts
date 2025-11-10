// Dev-only console filter to hide noisy environment warnings/errors not caused by the app
// This does NOT affect production builds.
export function installDevConsoleFilter() {
  // Only in development
  if (import.meta.env.MODE !== "development") return;

  const patterns = [
    /Unrecognized feature:/i, // 'vr', 'ambient-light-sensor', 'battery'
    /allow-scripts and allow-same-origin/i, // iframe sandbox warning
    /api\.lovable\.dev\/projects\/.+\/collaborators/i, // 405 from platform
    /\/_sandbox\/dev-server/i, // CORS to sandbox dev server
    /connect\.facebook\.net/i, // blocked by client
    /\/ingest\/e\//i, // external analytics 500
  ];

  const shouldIgnore = (args: unknown[]) =>
    args.some((arg) => typeof arg === "string" && patterns.some((p) => p.test(arg)));

  const originalWarn = console.warn.bind(console);
  const originalError = console.error.bind(console);

  console.warn = (...args: unknown[]) => {
    if (shouldIgnore(args)) return;
    originalWarn(...args);
  };

  console.error = (...args: unknown[]) => {
    if (shouldIgnore(args)) return;
    originalError(...args);
  };
}
