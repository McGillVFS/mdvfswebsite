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

      <div className="md:flex items-center justify-center mx-3">
        <p className="font-tajawal text-black-500 text-xl p-8">
          McGill Aerial Design (MAD) is a student-led design team of over 130 members dedicated to advancing aerial and vertical flight technologies at McGill University. Founded in 2021 and officially recognized by the Engineering Undergraduate Society, MAD has grown rapidly, doubling in size year after year as one of McGill’s newest and fastest-growing design teams. We strive to bridge the gap between industry and academia while inspiring the next generation for aerospace engineers and innovators by providing hands-on experience in aerial systems design, research, and competition. 
        </p>
        <img
          className="m-8 w-100 rounded-lg border-2 border-black"
          src="/images/aboutus.jpg"
          alt="group of members"
        />
      </div>

      <SubHeading text={"OUR TEAM"} />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-0 gap-x-2">
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
