/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { Analytics } from "@vercel/analytics/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Layout from "~/components/Layout";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
