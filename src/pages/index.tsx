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

  return (
    <>
      <Head>
        <title>ayxn</title>
      </Head>

      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-2">
            <Hero />
          </div>
          <Github />

          <div className="space-y-5">
            <Twitter />
            <Instagram />
          </div>
          <div className="col-span-2">
            <About />
          </div>

          <Spotify lanyard={lanyard} />
          <Discord status={status} activities={activities} />
          <Skills />
        </div>
      </div>
    </>
  )
}

export default Home;