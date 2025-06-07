"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Title from "../ui/Title";
import SubHeading from "../ui/SubHeading";
import ProfileCard from "../ui/ProfileCard";

export default function About() {
  return (
    <div>
      <Title text={"ABOUT US"} />

      <SubHeading text={"WHO WE ARE"} />

      <div className="flex items-center justify-center mx-3">
        <p className="font-tajawal text-black-500 text-xl p-8">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. <br />
          <br /> Neque porro quisquam est, qui dolorem ipsum quia dolor sit
          amet, consectetur, adipisci velit, sed quia non numquam eius modi
          tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
          ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
          consequatur?
        </p>
        <img
          className="m-8 w-100 rounded-lg border-2 border-black"
          src="/images/aboutus.jpg"
          alt="group of members"
        />
      </div>

      <SubHeading text={"OUR TEAM"} />

      <div className="grid grid-cols-4 gap-y-0 gap-x-2">
        <ProfileCard
          imageUrl={"/images/profile_placeholder.jpg"}
          name={"Elliot Markovich"}
          title={"Lead Source Designer"}
        />
        <ProfileCard
          imageUrl={"/images/profile_placeholder.jpg"}
          name={"Elliot Markovich"}
          title={"Lead Source Designer"}
        />
        <ProfileCard
          imageUrl={"/images/profile_placeholder.jpg"}
          name={"Elliot Markovich"}
          title={"Lead Source Designer"}
        />
        <ProfileCard
          imageUrl={"/images/profile_placeholder.jpg"}
          name={"Elliot Markovich"}
          title={"Lead Source Designer"}
        />
        <ProfileCard
          imageUrl={"/images/profile_placeholder.jpg"}
          name={"Elliot Markovich"}
          title={"Lead Source Designer"}
        />
        <ProfileCard
          imageUrl={"/images/profile_placeholder.jpg"}
          name={"Elliot Markovich"}
          title={"Lead Source Designer"}
        />
        <ProfileCard
          imageUrl={"/images/profile_placeholder.jpg"}
          name={"Elliot Markovich"}
          title={"Lead Source Designer"}
        />
        <ProfileCard
          imageUrl={"/images/profile_placeholder.jpg"}
          name={"Elliot Markovich"}
          title={"Lead Source Designer"}
        />
    
      </div>
      <SubHeading text={"AWARDS AND ACHIEVEMENTS"} />
      <SubHeading text={"KEY DATES"} />
    </div>
  );
}
