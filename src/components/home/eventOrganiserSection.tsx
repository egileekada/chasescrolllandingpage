"use client";
import React, { useRef } from "react";
import useCustomTheme from "@/hooks/useTheme";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { LuMessageSquare, LuPercent, LuShieldCheck } from "react-icons/lu";

export default function EventOrganiserSection() {
    const { primaryColor } = useCustomTheme();
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    const perks = [
        {
            icon: LuMessageSquare,
            iconBg: "#EEF2FF",
            iconColor: "#4F46E5",
            title: "Proof of quality",
            desc: "Check any pro's work samples, client reviews, and account profile.",
        },
        {
            icon: LuPercent,
            iconBg: "#FFF1E8",
            iconColor: "#EA580C",
            title: "No cost only 3% Service fee",
            desc: "Connect with professionals, agree on rates, and approve payment only when you're satisfied with the completed work.",
        },
        {
            icon: LuShieldCheck,
            iconBg: "#EEF2FF",
            iconColor: "#4F46E5",
            title: "Safe and secure",
            desc: "Focus on your guests knowing we help protect your logistics and payments are secured with Paystack payment processing system. We're here with 24/7 support if you need it.",
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
            <Flex
                w={"full"}
                maxW={"1280px"}
                flexDir={["column", "column", "row"]}
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={["8", "10", "14"]}
            >
                {/* Left Side: Headline & 3 Perk Cards */}
                <Flex
                    ref={ref}
                    w={["full", "full", "54%"]}
                    flexDir={"column"}
                    gap={["5", "6", "6"]}
                >
                    {/* Title */}
                    <Box>
                        <Text
                            as="h2"
                            fontSize={["28px", "32px", "38px"]}
                            lineHeight={["120%", "125%", "125%"]}
                            fontWeight={"800"}
                            color={"#0F172A"}
                            letterSpacing={"-0.02em"}
                        >
                            Why event organizers turn to
                            <br />
                            <span style={{ color: primaryColor }}>Chasescroll.</span>
                        </Text>
                    </Box>

                    {/* Perks Cards */}
                    <Flex flexDir={"column"} gap={"3.5"}>
                        {perks.map((p, idx) => {
                            const IconC = p.icon;
                            return (
                                <Flex
                                    key={idx}
                                    p={["4", "4.5", "5"]}
                                    rounded={"18px"}
                                    bg={"white"}
                                    border={"1px solid"}
                                    borderColor={"#E2E8F0"}
                                    alignItems={"flex-start"}
                                    gap={"4"}
                                    boxShadow={"0 2px 10px rgba(0, 0, 0, 0.02)"}
                                    transition={"all 0.2s ease"}
                                    _hover={{
                                        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.05)",
                                        borderColor: "#CBD5E1",
                                    }}
                                >
                                    <Flex
                                        w={"42px"}
                                        h={"42px"}
                                        rounded={"12px"}
                                        bg={p.iconBg}
                                        color={p.iconColor}
                                        alignItems={"center"}
                                        justifyContent={"center"}
                                        flexShrink={"0"}
                                    >
                                        <IconC size={"20px"} />
                                    </Flex>
                                    <Flex flexDir={"column"} gap={"1"}>
                                        <Text fontSize={["15px", "16px", "16.5px"]} fontWeight={"700"} color={"#0F172A"}>
                                            {p.title}
                                        </Text>
                                        <Text fontSize={["12.5px", "13px", "13.5px"]} color={"#475569"} lineHeight={"155%"}>
                                            {p.desc}
                                        </Text>
                                    </Flex>
                                </Flex>
                            );
                        })}
                    </Flex>
                </Flex>

                {/* Right Side: Phone Mockup Container */}
                <Flex
                    w={["full", "full", "46%"]}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Box
                        w={"full"}
                        maxW={["360px", "420px", "460px"]}
                        bg={"#F4F6FE"}
                        rounded={["24px", "28px", "32px"]}
                        p={["5", "6", "8"]}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        boxShadow={"0 8px 30px rgba(84, 101, 224, 0.06)"}
                    >
                        <Image
                            src="/images/versax-phone-mockup.png"
                            alt="Chasescroll Versax mobile app preview"
                            w={["260px", "300px", "340px"]}
                            maxW={"100%"}
                            h={"auto"}
                            objectFit={"contain"}
                            transition={"transform 0.4s ease"}
                            _hover={{ transform: "scale(1.02)" }}
                        />
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
}
