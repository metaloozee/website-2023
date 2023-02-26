import type { GetStaticProps } from "next";
import Head from "next/head";

import Hero from "../components/Hero";
import Github from "../components/Github";
import Twitter from "../components/Twitter";
import Instagram from "../components/Instagram";
import About from "../components/About";
import Spotify from "../components/Spotify";
import Skills from "../components/Skills";
import Discord from "../components/Discord";
import Guestbook from "~/components/Guestbook";

import { useSession } from "next-auth/react";
import { useUpdatingLanyard } from "../hooks/lanyard";
import type { Data, LanyardResponse } from "use-lanyard";

export type Props = {
  lanyard: Data
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const lanyard = await fetch(`https://api.lanyard.rest/v1/users/331005037062914050`)
    .then(res => res.json() as Promise<LanyardResponse>);

  
  if (!lanyard.success) {
    throw new Error("Lanyard API Failed");
  }

  return {
    revalidate: 60,
    props: {
      lanyard: lanyard.data
    }
  }
}

const Home = (props: Props) => {
  const { data: lanyard } = useUpdatingLanyard("331005037062914050", props.lanyard);

  const status = lanyard.discord_status ?? "offline";
  const activities = lanyard.activities ?? "";

  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>ayxn</title>
      </Head>

      <div className="w-full space-y-5">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-1 md:col-span-2">
            <Hero />
          </div>
          <Github />
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="w-full grid grid-cols-2 md:grid-cols-1 gap-5">
            <Twitter />
            <Instagram />
          </div>
          <div className="col-span-1 md:col-span-2">
            <About />
          </div>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-5">
          <Spotify lanyard={lanyard} />
          <Discord status={status} activities={activities} />
          <div className="col-span-2 md:col-span-1">
            <Skills />
          </div>
        </div>

        <div className="w-full p-10 bg-neutral-900 rounded-xl flex flex-col gap-10">
          <div>
            <h1 className="font-bold text-glow-neutral-500">guestbook</h1>
            <h1 className="text-xs text-glow-neutral-100">Leave a comment below to be on my guestbook forever! It could be literally anything, a joke, a quote or even a cool fact.</h1>
          </div>
          <Guestbook session={session} />
        </div>
      </div>
    </>
  )
}

export default Home;