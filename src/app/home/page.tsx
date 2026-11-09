"use client";
import React from "react";
import {
  HeroSection,
  CuratedEventsSection,
  AboutEventSection,
  GetThingDone,
  EventOrganiserSection,
  ProfessionService,
  ServiceProvider,
  UserComment,
  FAQ,
} from "@/components/home";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex flexDir={"column"} color={"black"} w={"full"} overflowX={"hidden"}>
      <HeroSection />
      <CuratedEventsSection />
      <AboutEventSection />
      <GetThingDone />
      <EventOrganiserSection />
      <ProfessionService />
      <ServiceProvider />
      <UserComment />
      <FAQ />
    </Flex>
  );
}
