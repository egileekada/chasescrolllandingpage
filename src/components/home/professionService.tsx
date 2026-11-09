"use client";
import React, { useRef } from "react";
import useCustomTheme from "@/hooks/useTheme";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import { CustomButton } from "../shared";

export default function ProfessionService() {
    const { primaryColor } = useCustomTheme();
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });
    const { push } = useRouter();

    const steps = [
        {
            num: "1",
            numColor: primaryColor,
            text: "Find opportunities for every stage of your entrepreneur journey",
            textColor: "#1E293B",
        },
        {
            num: "2",
            numColor: "#0F172A",
            text: "Control when, where, and how you work",
            textColor: primaryColor,
        },
        {
            num: "3",
            numColor: primaryColor,
            text: "Payments are made in full in your escrow before you render service.",
            textColor: "#1E293B",
        },
        {
            num: "4",
            numColor: "#0F172A",
            text: "Explore different ways to earn",
            textColor: primaryColor,
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
                {/* Left Side: Photo of Professional with Laptop */}
                <Flex
                    w={["full", "full", "45%"]}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Box
                        w={"full"}
                        maxW={["440px", "480px", "520px"]}
                        h={["300px", "380px", "440px"]}
                        rounded={["22px", "26px", "30px"]}
                        overflow={"hidden"}
                        boxShadow={"0 12px 36px rgba(0, 0, 0, 0.08)"}
                    >
                        <Image
                            src="/images/for-professionals.jpg"
                            alt="Professional working on laptop"
                            w={"full"}
                            h={"full"}
                            objectFit={"cover"}
                            transition={"transform 0.5s ease"}
                            _hover={{ transform: "scale(1.03)" }}
                        />
                    </Box>
                </Flex>

                {/* Right Side: Header + Divider + 3-col Grid + CTA */}
                <Flex
                    ref={ref}
                    w={["full", "full", "55%"]}
                    flexDir={"column"}
                    alignItems={"flex-start"}
                >
                    {/* Eyebrow */}
                    <Text
                        fontSize={["14px", "15px", "16px"]}
                        fontWeight={"600"}
                        color={primaryColor}
                    >
                        For professionals
                    </Text>

                    {/* Headline */}
                    <Text
                        as="h2"
                        fontSize={["28px", "34px", "40px"]}
                        lineHeight={["120%", "125%", "120%"]}
                        fontWeight={"800"}
                        color={"#0F172A"}
                        mt={"2"}
                        letterSpacing={"-0.02em"}
                    >
                        Find great work
                    </Text>

                    {/* Subtitle */}
                    <Text
                        fontSize={["14px", "15px", "16px"]}
                        color={"#475569"}
                        mt={"3"}
                        lineHeight={"160%"}
                        maxW={"560px"}
                    >
                        Meet customers you’re excited to work with and take your career or business to new heights.
                    </Text>

                    {/* Divider Line */}
                    <Box
                        w={"full"}
                        h={"1px"}
                        bg={"#E2E8F0"}
                        my={["5", "6", "7"]}
                    />

                    {/* 3-Column Numbered Points Grid */}
                    <Grid
                        w={"full"}
                        templateColumns={[
                            "repeat(1, 1fr)",
                            "repeat(2, 1fr)",
                            "repeat(3, 1fr)",
                        ]}
                        columnGap={["5", "6", "7"]}
                        rowGap={["5", "6", "6"]}
                    >
                        {steps.map((st) => (
                            <Flex
                                key={st.num}
                                flexDir={"column"}
                                alignItems={"flex-start"}
                                gap={"1.5"}
                            >
                                <Text
                                    fontSize={["22px", "24px", "26px"]}
                                    fontWeight={"800"}
                                    lineHeight={"110%"}
                                    color={st.numColor}
                                >
                                    {st.num}
                                </Text>
                                <Text
                                    fontSize={["13px", "13.5px", "14px"]}
                                    fontWeight={"500"}
                                    lineHeight={"145%"}
                                    color={st.textColor}
                                >
                                    {st.text}
                                </Text>
                            </Flex>
                        ))}
                    </Grid>

                    {/* CTA Button */}
                    <Box mt={["6", "7", "8"]} w={["full", "fit-content", "fit-content"]}>
                        <CustomButton
                            onClick={() => push("/auth?create=services")}
                            text={"Sign Up now for free"}
                            px={"7"}
                            height={"44px"}
                            fontSize={"14.5px"}
                            backgroundColor={primaryColor}
                            borderRadius={"999px"}
                            color={"white"}
                            width={["full", "fit-content", "fit-content"]}
                        />
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
}
