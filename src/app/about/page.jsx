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
      <SubHeading text={"OUR TEAM"} />
      <SubHeading text={"AWARDS AND ACHIEVEMENTS"} />
      <SubHeading text={"KEY DATES"} />
      <ProfileCard
        title={"Mentoring"}
        description={"Each new member is assigned a project lead, where they can be mentored to learn the technical aspects of each project. You’ll have the opportunity to work with other new members of the team and socialize with people with the same interests as you!"}
      />
    </div>
  );
}
