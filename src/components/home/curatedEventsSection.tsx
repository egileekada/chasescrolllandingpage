"use client";
import React from "react";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { IoCalendarOutline, IoLocationOutline, IoCheckmarkCircle } from "react-icons/io5";

interface EventItem {
    id: string;
    title: string;
    category: string;
    statusBadge: string;
    statusBg: string;
    date: string;
    location: string;
    hostName: string;
    hostAvatar: string;
    priceLabel: string;
    price: string;
    priceSub?: string;
    priceColor?: string;
    buttonText: string;
    buttonBg: string;
    buttonColor: string;
    image: string;
}

export default function CuratedEventsSection() {
    const router = useRouter();

    const events: EventItem[] = [
        {
            id: "1",
            title: "Island Soundwaves: Afrobeats & Amapiano All-Night",
            category: "Concerts & Afrobeats",
            statusBadge: "42 LEFT",
            statusBg: "#EA580C",
            date: "Sat, 14 Dec 2025 • 7:00 PM WAT",
            location: "Eko Atlantic Promenade, Lagos",
            hostName: "Live Nation NG",
            hostAvatar: "LN",
            priceLabel: "PRICE",
            price: "₦15,000",
            buttonText: "Buy Ticket",
            buttonBg: "#5465E0",
            buttonColor: "white",
            image: "/images/events/afrobeats-concert.jpg",
        },
        {
            id: "2",
            title: "LinkedIn Local Lagos: Founders & Diaspora Match",
            category: "Tech & Business",
            statusBadge: "RSVP OPEN",
            statusBg: "#059669",
            date: "Fri, 20 Dec 2025 • 5:30 PM WAT",
            location: "The Wheatbaker Hotel, Ikoyi",
            hostName: "LinkedIn Local Team",
            hostAvatar: "LL",
            priceLabel: "ADMISSION",
            price: "FREE / RSVP",
            priceColor: "#059669",
            buttonText: "Claim Seat",
            buttonBg: "#EEF2FF",
            buttonColor: "#4F46E5",
            image: "/images/events/linkedin-rooftop.jpg",
        },
        {
            id: "3",
            title: "The Grand Lagos Owambe Ball & Fabric Showcase",
            category: "Weddings & Aso Ebi",
            statusBadge: "18 TABLES LEFT",
            statusBg: "#B45309",
            date: "Sun, 29 Dec 2025 • 4:00 PM WAT",
            location: "Balmoral Hall, Federal Palace Hotel",
            hostName: "Luxe Owambe Collective",
            hostAvatar: "LO",
            priceLabel: "PACKAGE TIER",
            price: "₦50,000",
            priceSub: "+ Aso Ebi",
            buttonText: "Buy Ticket",
            buttonBg: "#5465E0",
            buttonColor: "white",
            image: "/images/events/owambe-ball.jpg",
        },
    ];

    return (
        <Flex
            w={"full"}
            bg={"white"}
            py={["12", "14", "18"]}
            px={["5", "6", "12"]}
            justifyContent={"center"}
            borderBottom={"1px solid"}
            borderColor={"#F1F5F9"}
        >
            <Flex w={"full"} maxW={"1280px"} flexDir={"column"} gap={["6", "8", "8"]}>
                {/* Header Row */}
                <Flex
                    w={"full"}
                    justifyContent={"space-between"}
                    alignItems={["flex-start", "flex-end", "flex-end"]}
                    flexDir={["column", "row", "row"]}
                    gap={"4"}
                >
                    <Box maxW={"720px"}>
                        <Text
                            as="h2"
                            fontSize={["24px", "28px", "32px"]}
                            lineHeight={["120%", "120%", "115%"]}
                            fontWeight={"800"}
                            color={"#0F172A"}
                            letterSpacing={"-0.02em"}
                        >
                            Curated Events in Lagos, Abuja & Diaspora
                        </Text>
                        <Text
                            fontSize={["13px", "14px", "15px"]}
                            color={"#64748B"}
                            mt={"1.5"}
                            fontWeight={"400"}
                        >
                            Strict escrow protection. Funds released to host only after successful check-in.
                        </Text>
                    </Box>

                    <Flex
                        as="button"
                        onClick={() => router.push("/home/event")}
                        alignItems={"center"}
                        justifyContent={"center"}
                        px={"4"}
                        py={"1.5"}
                        rounded={"full"}
                        border={"1px solid #E2E8F0"}
                        bg={"white"}
                        color={"#334155"}
                        fontWeight={"600"}
                        fontSize={"13px"}
                        cursor={"pointer"}
                        transition={"all 0.2s ease"}
                        _hover={{ bg: "#F8FAFC", borderColor: "#CBD5E1" }}
                    >
                        See all
                    </Flex>
                </Flex>

                {/* Event Cards Grid */}
                <Grid
                    templateColumns={[
                        "repeat(1, 1fr)",
                        "repeat(2, 1fr)",
                        "repeat(3, 1fr)",
                    ]}
                    gap={["5", "6", "6"]}
                    w={"full"}
                >
                    {events.map((item) => (
                        <Flex
                            key={item.id}
                            flexDir={"column"}
                            bg={"white"}
                            rounded={"22px"}
                            overflow={"hidden"}
                            border={"1px solid #E2E8F0"}
                            boxShadow={"0 4px 18px rgba(0, 0, 0, 0.04)"}
                            transition={"all 0.25s ease"}
                            _hover={{
                                transform: "translateY(-4px)",
                                boxShadow: "0 12px 28px rgba(0, 0, 0, 0.08)",
                                borderColor: "#CBD5E1",
                            }}
                        >
                            {/* Card Image with Badges */}
                            <Box w={"full"} h={["200px", "210px", "225px"]} pos={"relative"} overflow={"hidden"}>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    w={"full"}
                                    h={"full"}
                                    objectFit={"cover"}
                                    transition={"transform 0.4s ease"}
                                    _hover={{ transform: "scale(1.04)" }}
                                />

                                {/* Category Badge (Top Left) */}
                                <Box
                                    pos={"absolute"}
                                    top={"3.5"}
                                    left={"3.5"}
                                    px={"3.5"}
                                    py={"1"}
                                    rounded={"full"}
                                    bg={"rgba(255, 255, 255, 0.95)"}
                                    backdropFilter={"blur(6px)"}
                                    color={"#0F172A"}
                                    fontSize={"12px"}
                                    fontWeight={"600"}
                                    boxShadow={"0 2px 8px rgba(0, 0, 0, 0.12)"}
                                >
                                    {item.category}
                                </Box>

                                {/* Urgency / Status Badge (Top Right) */}
                                <Box
                                    pos={"absolute"}
                                    top={"3.5"}
                                    right={"3.5"}
                                    px={"3"}
                                    py={"1"}
                                    rounded={"full"}
                                    bg={item.statusBg}
                                    color={"white"}
                                    fontSize={"11px"}
                                    fontWeight={"700"}
                                    letterSpacing={"0.5px"}
                                    boxShadow={"0 2px 8px rgba(0, 0, 0, 0.2)"}
                                >
                                    {item.statusBadge}
                                </Box>
                            </Box>

                            {/* Card Body */}
                            <Flex flexDir={"column"} p={"5"} flex={"1"} justifyContent={"space-between"} gap={"3.5"}>
                                <Flex flexDir={"column"} gap={"2"}>
                                    {/* Date & Time */}
                                    <Flex alignItems={"center"} gap={"2"} color={"#4F46E5"}>
                                        <IoCalendarOutline size={"15px"} />
                                        <Text fontSize={"13px"} fontWeight={"600"}>
                                            {item.date}
                                        </Text>
                                    </Flex>

                                    {/* Event Title */}
                                    <Text
                                        fontSize={["16px", "17px", "17.5px"]}
                                        fontWeight={"700"}
                                        lineHeight={"135%"}
                                        color={"#0F172A"}
                                        minH={["auto", "auto", "46px"]}
                                    >
                                        {item.title}
                                    </Text>

                                    {/* Location */}
                                    <Flex alignItems={"center"} gap={"1.5"} color={"#64748B"}>
                                        <IoLocationOutline size={"15px"} />
                                        <Text fontSize={"13px"} fontWeight={"400"}>
                                            {item.location}
                                        </Text>
                                    </Flex>

                                    {/* Host Row with Escrow Badge */}
                                    <Flex alignItems={"center"} gap={"2.5"} mt={"1"}>
                                        <Flex
                                            w={"24px"}
                                            h={"24px"}
                                            rounded={"full"}
                                            bg={"#EEF2FF"}
                                            color={"#4F46E5"}
                                            alignItems={"center"}
                                            justifyContent={"center"}
                                            fontSize={"10px"}
                                            fontWeight={"700"}
                                            flexShrink={"0"}
                                        >
                                            {item.hostAvatar}
                                        </Flex>
                                        <Text fontSize={"13px"} fontWeight={"500"} color={"#334155"}>
                                            {item.hostName}
                                        </Text>
                                        <Flex
                                            alignItems={"center"}
                                            gap={"1"}
                                            px={"2"}
                                            py={"0.5"}
                                            rounded={"md"}
                                            bg={"#ECFDF5"}
                                            color={"#059669"}
                                            fontSize={"11px"}
                                            fontWeight={"600"}
                                        >
                                            <IoCheckmarkCircle size={"12px"} />
                                            <Text>Escrow Verified</Text>
                                        </Flex>
                                    </Flex>
                                </Flex>

                                {/* Bottom Price & Action Row */}
                                <Flex
                                    pt={"3.5"}
                                    borderTop={"1px solid"}
                                    borderColor={"#F1F5F9"}
                                    alignItems={"center"}
                                    justifyContent={"space-between"}
                                >
                                    <Flex flexDir={"column"}>
                                        <Text fontSize={"10.5px"} fontWeight={"700"} color={"#94A3B8"} letterSpacing={"0.5px"}>
                                            {item.priceLabel}
                                        </Text>
                                        <Flex alignItems={"baseline"} gap={"1"}>
                                            <Text
                                                fontSize={["16px", "17px", "18px"]}
                                                fontWeight={"800"}
                                                color={item.priceColor || "#0F172A"}
                                            >
                                                {item.price}
                                            </Text>
                                            {item.priceSub && (
                                                <Text fontSize={"12px"} color={"#64748B"} fontWeight={"400"}>
                                                    {item.priceSub}
                                                </Text>
                                            )}
                                        </Flex>
                                    </Flex>

                                    <Flex
                                        as="button"
                                        onClick={() => router.push("/home/event")}
                                        alignItems={"center"}
                                        justifyContent={"center"}
                                        bg={item.buttonBg}
                                        color={item.buttonColor}
                                        px={"5"}
                                        py={"2"}
                                        rounded={"full"}
                                        fontSize={"13px"}
                                        fontWeight={"600"}
                                        cursor={"pointer"}
                                        transition={"all 0.2s ease"}
                                        _hover={{
                                            opacity: 0.9,
                                            transform: "scale(1.02)",
                                        }}
                                    >
                                        {item.buttonText}
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    ))}
                </Grid>
            </Flex>
        </Flex>
    );
}
