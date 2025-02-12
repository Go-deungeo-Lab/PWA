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
    tracesSampleRate: 1.0, // Capture 100% of the transactions
    tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    // Session Replay
    replaysSessionSampleRate: 0.1, // 개발 중에는 100%로 설정하고 프로덕션에서는 낮출 수 있습니다
    replaysOnErrorSampleRate: 1.0, // 에러 발생 시 100% 캡처
});

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);