import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn:
    SENTRY_DSN ||
    "https://7cab2902df2e4c329d2eaf7e46c26a71@o1042887.ingest.sentry.io/6012099",
  tracesSampleRate: 1.0,
});
