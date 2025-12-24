import ExploreBtn from '@/components/ExploreBtn';
import React from 'react';

const Page = () => {
  return (
    <section>
      <h1 className="text-center">
        The Hub for Every Dev <br />
        Event You Cant&apos;t Miss
      </h1>
      <p className="text-center mt-5">
        Hackathons, Meetups, and Conferences, All in One Place
      </p>

      <ExploreBtn />
    </section>
  );
};

export default Page;
