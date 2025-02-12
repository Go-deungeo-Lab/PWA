import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as Sentry from "@sentry/react";

Sentry.init({
    dsn: "https://3ce6198a228142a01421fd6cc6f58170@o4508806187581440.ingest.us.sentry.io/4508806197739520",
    integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration(),
    ],
    // Tracing
    tracesSampleRate: 1.0,
    tracePropagationTargets: [
        "localhost",
        "https://pwa-19v8.vercel.app",
        /^https:\/\/pwa-19v8\.vercel\.app/
    ],
    // Session Replay
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
});

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);