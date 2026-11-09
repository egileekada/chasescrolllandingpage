"use client";
import React from "react";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { IoStar, IoArrowForward } from "react-icons/io5";
import { FaHandHoldingHeart } from "react-icons/fa";
import { LuBuilding2, LuStore, LuHandshake } from "react-icons/lu";

export default function GetThingDone() {
    const router = useRouter();

    const hubCards = [
        {
            id: "fundraiser",
            isDark: true,
            bg: "#1D4ED8",
            icon: FaHandHoldingHeart,
            iconBg: "rgba(255, 255, 255, 0.18)",
            iconColor: "white",
            title: "Start a fundraiser and bring your dream event to life.",
            desc: "Crowdfund community galas, non-profit initiatives, and alumni homecomings with transparent real-time tracking.",
            linkText: "Fundraiser",
            linkColor: "white",
            link: "/home/fundraising",
        },
        {
            id: "kiosk",
            isDark: false,
            bg: "white",
            icon: LuStore,
            iconBg: "#FFF1E8",
            iconColor: "#EA580C",
            title: "Browse and buy from our Kiosk",
            desc: "Purchase coordinated wedding Aso Ebi fabrics, ceremonial souvenirs, and official event merchandise delivered right to guests.",
            linkText: "Aso Ebi & product Hub",
            linkColor: "#EA580C",
            link: "/home/kiosk",
        },
        {
            id: "rental",
            isDark: false,
            bg: "white",
            icon: LuBuilding2,
            iconBg: "#EEF2FF",
            iconColor: "#4F46E5",
            title: "Rent venues, apartments, and event essentials all in one place.",
            desc: "From high-capacity marquees in Victoria Island to intimate short-let apartments and audio-visual generators.",
            linkText: "Rental space",
            linkColor: "#4F46E5",
            link: "/home/rental",
        },
        {
            id: "service",
            isDark: false,
            bg: "white",
            icon: LuHandshake,
            iconBg: "#E6FFFA",
            iconColor: "#0D9488",
            title: "Create an event and hire top creative talent.",
            desc: "Book vetted MCs, mixologists, security details, and choreographers with verified reviews and escrow milestones.",
            linkText: "Talent marketplace",
            linkColor: "#0D9488",
            link: "/home/service",
        },
    ];

    return (
        <Flex
            w={"full"}
            bg={"white"}
            py={["12", "16", "20"]}
            px={["5", "6", "12"]}
            justifyContent={"center"}
            borderBottom={"1px solid"}
            borderColor={"#F1F5F9"}
        >
            <Flex w={"full"} maxW={"1280px"} flexDir={"column"} gap={["6", "8", "8"]}>
                {/* Header Section */}
                <Box maxW={"720px"}>
                    <Box
                        px={"3.5"}
                        py={"1"}
                        rounded={"full"}
                        bg={"#FFF1E8"}
                        color={"#E05D26"}
                        fontSize={"11px"}
                        fontWeight={"700"}
                        letterSpacing={"0.5px"}
                        w={"fit-content"}
                        textTransform={"uppercase"}
                    >
                        ALL-IN-ONE EVENT ECOSYSTEM
                    </Box>

                    <Text
                        as="h2"
                        fontSize={["28px", "34px", "40px"]}
                        lineHeight={["120%", "120%", "115%"]}
                        fontWeight={"800"}
                        color={"#0F172A"}
                        mt={"2"}
                        letterSpacing={"-0.02em"}
                    >
                        Get things done
                    </Text>

                    <Text
                        fontSize={["14px", "15px", "16px"]}
                        color={"#475569"}
                        mt={"2"}
                        lineHeight={"160%"}
                    >
                        Quick jobs or major overhauls—by working with top independent professionals across Nigeria and beyond.
                    </Text>
                </Box>

                {/* Directory Content: Left Hero Card + Right 2x2 Grid */}
                <Grid
                    templateColumns={[
                        "repeat(1, 1fr)",
                        "repeat(1, 1fr)",
                        "repeat(12, 1fr)",
                    ]}
                    gap={["5", "6", "6"]}
                    w={"full"}
                    alignItems={"stretch"}
                >
                    {/* Left: Featured Talent Profile Card */}
                    <Flex
                        gridColumn={["span 12", "span 12", "span 5"]}
                        bg={"white"}
                        rounded={"24px"}
                        overflow={"hidden"}
                        border={"1px solid #E2E8F0"}
                        boxShadow={"0 4px 20px rgba(0, 0, 0, 0.04)"}
                        flexDir={"column"}
                        justifyContent={"space-between"}
                        transition={"all 0.25s ease"}
                        _hover={{
                            transform: "translateY(-4px)",
                            boxShadow: "0 14px 32px rgba(0, 0, 0, 0.08)",
                            borderColor: "#CBD5E1",
                        }}
                    >
                        {/* Top Photo with Overlay */}
                        <Box w={"full"} h={["270px", "300px", "320px"]} pos={"relative"}>
                            <Image
                                src="/images/chinedu-photographer.jpg"
                                alt="Chinedu Okafor"
                                w={"full"}
                                h={"full"}
                                objectFit={"cover"}
                                objectPosition={"top center"}
                            />
                            {/* Dark Gradient Overlay */}
                            <Box
                                pos={"absolute"}
                                bottom={"0px"}
                                insetX={"0px"}
                                h={"140px"}
                                style={{
                                    background:
                                        "linear-gradient(to top, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.45) 55%, transparent 100%)",
                                }}
                            />
                            {/* Text inside overlay */}
                            <Flex
                                pos={"absolute"}
                                bottom={"4"}
                                left={"4"}
                                right={"4"}
                                flexDir={"column"}
                                gap={"1"}
                                zIndex={"2"}
                            >
                                <Box
                                    px={"2.5"}
                                    py={"0.5"}
                                    rounded={"full"}
                                    bg={"#3B82F6"}
                                    color={"white"}
                                    fontSize={"10.5px"}
                                    fontWeight={"700"}
                                    letterSpacing={"0.5px"}
                                    w={"fit-content"}
                                >
                                    TOP-RATED TALENT
                                </Box>
                                <Text fontSize={"20px"} fontWeight={"800"} color={"white"} lineHeight={"120%"} mt={"1"}>
                                    Chinedu Okafor
                                </Text>
                                <Text fontSize={"12px"} color={"rgba(255, 255, 255, 0.9)"} fontWeight={"500"}>
                                    Executive Producer &amp; Cinematic Videographer • Lagos &amp; Abuja
                                </Text>
                            </Flex>
                        </Box>

                        {/* Middle Content */}
                        <Flex flexDir={"column"} p={"5"} gap={"3"}>
                            {/* Stats Row */}
                            <Flex justifyContent={"space-between"} alignItems={"center"}>
                                <Flex alignItems={"center"} gap={"1.5"}>
                                    <IoStar color={"#D97706"} size={"15px"} />
                                    <Text fontWeight={"800"} fontSize={"14px"} color={"#0F172A"}>
                                        4.98
                                    </Text>
                                    <Text fontSize={"13px"} color={"#64748B"}>
                                        (184 completed gigs)
                                    </Text>
                                </Flex>
                                <Text fontSize={"14px"} fontWeight={"700"} color={"#3B82F6"}>
                                    From ₦150k
                                </Text>
                            </Flex>

                            {/* Quote */}
                            <Text fontSize={"13px"} color={"#475569"} lineHeight={"155%"} mt={"1"}>
                                &ldquo;Chasescroll handled our escrow with Babcock Alumni Gala smoothly. Equipment rentals arrived on time, and payouts were seamless.&rdquo;
                            </Text>
                        </Flex>

                        {/* Bottom Action Pill */}
                        <Box p={"5"} pt={"0"}>
                            <Flex
                                as="button"
                                onClick={() => router.push("/home/service")}
                                w={"full"}
                                py={"3"}
                                px={"5"}
                                rounded={"full"}
                                border={"1px solid #E2E8F0"}
                                bg={"white"}
                                color={"#3B82F6"}
                                fontWeight={"600"}
                                fontSize={"13.5px"}
                                justifyContent={"space-between"}
                                alignItems={"center"}
                                cursor={"pointer"}
                                transition={"all 0.2s ease"}
                                _hover={{
                                    bg: "#F8FAFC",
                                    borderColor: "#CBD5E1",
                                }}
                            >
                                <Text>See other creators</Text>
                                <IoArrowForward size={"16px"} />
                            </Flex>
                        </Box>
                    </Flex>

                    {/* Right: 2x2 Services & Ecosystem Grid */}
                    <Grid
                        gridColumn={["span 12", "span 12", "span 7"]}
                        templateColumns={[
                            "repeat(1, 1fr)",
                            "repeat(2, 1fr)",
                            "repeat(2, 1fr)",
                        ]}
                        gap={["4", "5", "5"]}
                    >
                        {hubCards.map((c) => {
                            const IconC = c.icon;
                            if (c.isDark) {
                                return (
                                    <Flex
                                        key={c.id}
                                        onClick={() => router.push(c.link)}
                                        cursor={"pointer"}
                                        flexDir={"column"}
                                        justifyContent={"space-between"}
                                        p={["5", "6", "6"]}
                                        rounded={"24px"}
                                        bg={c.bg}
                                        color={"white"}
                                        transition={"all 0.25s ease"}
                                        boxShadow={"0 8px 24px rgba(29, 78, 216, 0.25)"}
                                        _hover={{
                                            transform: "translateY(-4px)",
                                            boxShadow: "0 14px 32px rgba(29, 78, 216, 0.35)",
                                        }}
                                        minH={["210px", "230px", "250px"]}
                                    >
                                        <Flex
                                            w={"44px"}
                                            h={"44px"}
                                            rounded={"12px"}
                                            bg={c.iconBg}
                                            alignItems={"center"}
                                            justifyContent={"center"}
                                        >
                                            <IconC size={"20px"} color={c.iconColor} />
                                        </Flex>

                                        <Box my={"2"}>
                                            <Text fontSize={["16px", "17px", "18px"]} fontWeight={"700"} lineHeight={"135%"}>
                                                {c.title}
                                            </Text>
                                            <Text fontSize={"12.5px"} opacity={"0.85"} mt={"2"} lineHeight={"150%"}>
                                                {c.desc}
                                            </Text>
                                        </Box>

                                        <Flex alignItems={"center"} gap={"1.5"} fontSize={"13.5px"} fontWeight={"600"}>
                                            <Text>{c.linkText}</Text>
                                            <IoArrowForward size={"15px"} />
                                        </Flex>
                                    </Flex>
                                );
                            }

                            return (
                                <Flex
                                    key={c.id}
                                    onClick={() => router.push(c.link)}
                                    cursor={"pointer"}
                                    flexDir={"column"}
                                    justifyContent={"space-between"}
                                    p={["5", "6", "6"]}
                                    rounded={"24px"}
                                    bg={"white"}
                                    border={"1px solid #E2E8F0"}
                                    transition={"all 0.25s ease"}
                                    boxShadow={"0 4px 18px rgba(0, 0, 0, 0.03)"}
                                    _hover={{
                                        transform: "translateY(-4px)",
                                        boxShadow: "0 14px 30px rgba(0, 0, 0, 0.07)",
                                        borderColor: "#CBD5E1",
                                    }}
                                    minH={["210px", "230px", "250px"]}
                                >
                                    <Flex
                                        w={"44px"}
                                        h={"44px"}
                                        rounded={"12px"}
                                        bg={c.iconBg}
                                        color={c.iconColor}
                                        alignItems={"center"}
                                        justifyContent={"center"}
                                    >
                                        <IconC size={"20px"} />
                                    </Flex>

                                    <Box my={"2"}>
                                        <Text fontSize={["16px", "17px", "18px"]} fontWeight={"700"} color={"#0F172A"} lineHeight={"135%"}>
                                            {c.title}
                                        </Text>
                                        <Text fontSize={"12.5px"} color={"#64748B"} mt={"2"} lineHeight={"150%"}>
                                            {c.desc}
                                        </Text>
                                    </Box>

                                    <Flex alignItems={"center"} gap={"1.5"} fontSize={"13.5px"} fontWeight={"600"} color={c.linkColor}>
                                        <Text>{c.linkText}</Text>
                                        <IoArrowForward size={"15px"} />
                                    </Flex>
                                </Flex>
                            );
                        })}
                    </Grid>
                </Grid>
            </Flex>
        </Flex>
    );
}
