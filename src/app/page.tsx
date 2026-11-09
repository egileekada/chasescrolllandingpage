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
import { LandingPageLayout } from "@/components/shared";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <LandingPageLayout>
      <Flex flexDir={"column"} color={"black"} w={"full"} overflow={"hidden"}>
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
    </LandingPageLayout>
  );
}
