This repo is a reproduction of the Sentry Error Boundary.

## How to Reproduce

First go to `sentry.server.config.js` and `sentry.client.config.js` and add your own Sentry DSN.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser and see an exception thrown.

Check on `pages/index.tsx` that the error is thrown outside the ErrorBoundary.

Access Sentry and check the error was incorrectly catched:

<img width="965" alt="Screenshot 2021-11-18 at 15 48 40" src="https://user-images.githubusercontent.com/1096800/142438660-c607e92e-b92f-402c-a369-578d895c1cf0.png">

