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
          McGill Aerial Design (MAD) is a student-led design team of over 130
          members dedicated to advancing aerial and vertical flight technologies
          at McGill University. Founded in 2021 and officially recognized by the
          Engineering Undergraduate Society, MAD has grown rapidly, doubling in
          size year after year as one of McGill’s newest and fastest-growing
          design teams. We strive to bridge the gap between industry and
          academia while inspiring the next generation for aerospace engineers
          and innovators by providing hands-on experience in aerial systems
          design, research, and competition.
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
          imageUrl={"/images/profile_images/Alex.png"}
          name={"Alex Lyakishev"}
          program={"Mechanical Engineering"}
          title={"Co-Captain"}
        />
        <ProfileCard
          imageUrl={"/images/profile_images/Ana.png"}
          name={"Ana Oyharcabal"}
          program={"Honours Physics"}
          title={"Co-Captain"}
        />
        <ProfileCard
          imageUrl={"/images/profile_images/Romain.png"}
          name={"Romain Tarayre"}
          title={"Avionics Lead"}
        />
        <ProfileCard
          imageUrl={"/images/profile_placeholder.jpg"}
          name={"Jiwoong Choi"}
          title={"Avionics Lead"}
        />
        <ProfileCard
          imageUrl={"/images/profile_placeholder.jpg"}
          name={"Alexander Kudinov"}
          program={"Software Engineering Coop"}
          title={"Avionics Lead"}
        />
        <ProfileCard
          imageUrl={"/images/profile_placeholder.jpg"}
          name={"Elliot Markovich"}
          title={"Avionics Lead"}
        />
        <ProfileCard
          imageUrl={"/images/profile_placeholder.jpg"}
          name={"Amaia Pelletier"}
          title={"Avionics Lead"}
        />
        <ProfileCard
          imageUrl={"/images/profile_placeholder.jpg"}
          name={"Junho Jun"}
          title={"Aerostructures Lead"}
        />
        <ProfileCard
          imageUrl={"/images/profile_placeholder.jpg"}
          name={"Emma Lyon"}
          title={"Aerostructures Lead"}
        />
        <ProfileCard
          imageUrl={"/images/profile_placeholder.jpg"}
          name={"Max Newman"}
          title={"Aerostructures Lead"}
        />
        <ProfileCard
          imageUrl={"/images/profile_placeholder.jpg"}
          name={"Ernest Lee"}
          title={"Aerostructures Lead"}
        />
        <ProfileCard
          imageUrl={"/images/profile_placeholder.jpg"}
          name={"Will Kalish"}
          porgram={"Honours Physics"}
          title={"Power Lead"}
        />
        <ProfileCard
          imageUrl={"/images/profile_placeholder.jpg"}
          name={"Muntasir Zaman"}
          title={"Power Lead"}
        />
        <ProfileCard
          imageUrl={"/images/profile_placeholder.jpg"}
          name={"Vidush Komarraju"}
          title={"Power Lead"}
        />
        <ProfileCard
          imageUrl={"/images/profile_placeholder.jpg"}
          name={"Dany Malaeb"}
          title={"Power Lead"}
        />
        <ProfileCard
          imageUrl={"/images/profile_placeholder.jpg"}
          name={"Logan Innes"}
          title={"VP Finance"}
        />
        <ProfileCard
          imageUrl={"/images/profile_placeholder.jpg"}
          name={"Scarbo Chan"}
          program={"Honours Quantitative Biology"}
          title={"Management Director"}
        />
        <ProfileCard
          imageUrl={"/images/profile_placeholder.jpg"}
          name={"Amy Wang"}
          program={"Honours Quantitative Biology"}
          title={"VP Communications"}
        />
        <ProfileCard
          imageUrl={"/images/profile_images/David.JPG"}
          name={"David Bard"}
          program={"Honours Computer Science"}
          title={"VP Website"}
        />
        <ProfileCard
          imageUrl={"/images/profile_placeholder.jpg"}
          name={"Edwin Kim"}
          program={"Honours Computer Science"}
          title={"VP Website"}
        />
      </div>
      <SubHeading text={"AWARDS AND ACHIEVEMENTS"} />

      <div className = "pl-1">
        <p className="font-tajawal text-black-500 text-xl p-3">2023: Design-Build-Vertical Flight Student Competition - 3rd Place</p>
        <p className="font-tajawal text-black-500 text-xl p-3">2024: Vertical Flight Society - Lichten Award Winner</p>
        <p className="font-tajawal text-black-500 text-xl p-3">2024: Aerial Evolution Association of Canada - 8th Place</p>
        <p className="font-tajawal text-black-500 text-xl p-3">2025: Aerial Evolution Association of Canada - 2nd Place (Bidder’s Presentation)</p>
        <p className="font-tajawal text-black-500 text-xl p-3">2025: Design-Build-Vertical Flight Student Competition - Perseverance Award</p>
      </div>

      <SubHeading text={"KEY DATES"} />

      <div className = "pl-1 pb-2">
        <p className="font-tajawal text-black-500 text-xl p-3">2021: Vertical Flight Society at McGill Founded</p>
        <p className="font-tajawal text-black-500 text-xl p-3">2023: Recognition on the International Stage at the DBVF Competition</p>
        <p className="font-tajawal text-black-500 text-xl p-3">2023: Rebrand to McGill Drones and Vertical Flight Society</p>
        <p className="font-tajawal text-black-500 text-xl p-3">2025: Rebrand to McGill Aerial Design</p>
      </div>

    </div>
  );
}
