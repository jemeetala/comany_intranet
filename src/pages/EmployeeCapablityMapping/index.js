import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Image, Text, Button, Stack, List } from "components";

const EmployeeCapablityMappingPage = () => {
  const navigate = useNavigate();

  function handleNavigate5() {
    navigate("/employeelist");
  }
  function handleNavigate6() {
    navigate("/homepage");
  }

  return (
    <>
      <Column className="bg-gray_100 font-segoeui items-center justify-start mx-[auto] lg:pb-[14px] xl:pb-[16px] pb-[19px] 3xl:pb-[22px] w-[100%]">
        <Row className="bg-white_A700 border border-bluegray_50 border-solid items-center justify-start lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]">
          <Image
            src={"images/img_image2_1.png"}
            className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] object-contain lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
            alt="image2"
          />
          <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
            FrashTeam
          </Text>
        </Row>
        <Row className="bg-white_A700 border border-gray_200 border-solid font-sourcesanspro items-start justify-end lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] w-[98%]">
          <Text className="font-semibold mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-deep_purple_A200 w-[auto]">
            Employee Capabilities
          </Text>
          <Button className="bg-white_A700 border border-gray_200 border-solid font-normal lg:ml-[373px] xl:ml-[427px] ml-[480px] 3xl:ml-[576px] xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:py-[5px] xl:py-[6px] py-[7px] 3xl:py-[8px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-indigo_A200 w-[6%]">
            DashBoard
          </Button>
          <Button className="bg-white_A700 border border-gray_200 border-solid font-normal xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] not-italic lg:py-[5px] xl:py-[6px] py-[7px] 3xl:py-[8px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-indigo_A200 w-[7%]">
            Employee List
          </Button>
          <Button className="bg-white_A700 border border-gray_200 border-solid font-normal lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:py-[4px] xl:py-[5px] py-[6px] 3xl:py-[7px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-indigo_A200 w-[6%]">
            Capabilities
          </Button>
          <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[3%]">
            <div className="absolute bg-bluegray_900 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius2111 w-[100%]"></div>
            <Image
              src={"images/img_vector_5.png"}
              className="absolute lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] inset-[0] justify-center m-[auto] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
              alt="Vector"
            />
          </Stack>
          <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] w-[3%]">
            <div className="absolute bg-white_A700 border border-gray_201 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius2111 w-[100%]"></div>
            <Image
              src={"images/img_vector_6.png"}
              className="absolute lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] inset-[0] justify-center m-[auto] object-contain w-[50%]"
              alt="Vector"
            />
          </Stack>
          <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] w-[3%]">
            <div className="absolute bg-white_A700 border border-gray_201 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius2111 w-[100%]"></div>
            <Image
              src={"images/img_vector_7.png"}
              className="absolute bottom-[5%] lg:h-[25px] xl:h-[28px] h-[31px] 2xl:h-[32px] 3xl:h-[38px] inset-x-[0] mx-[auto] object-contain w-[76%]"
              alt="Vector"
            />
          </Stack>
          <Stack className="bg-red_600 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] xl:my-[1px] lg:my-[1px] my-[2px] p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] rounded-radius19 w-[3%]">
            <Image
              src={"images/img_1_1.png"}
              className="absolute xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] inset-x-[0] mx-[auto] object-contain w-[33%]"
              alt="1"
            />
          </Stack>
          <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] mr-[1px] w-[3%]">
            <div className="absolute bg-amber_100 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius2111 w-[100%]"></div>
            <Image
              src={"images/img_profilename_1.png"}
              className="absolute lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] inset-[0] justify-center m-[auto] object-contain w-[29%]"
              alt="ProfileName"
            />
          </Stack>
        </Row>
        <Column className="bg-white_A700 font-inder items-start justify-start lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] lg:p-[11px] xl:p-[13px] p-[15px] 3xl:p-[18px] rounded-radius4 shadow-bs w-[98%]">
          <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
            Employee Capability list
          </Text>
          <Stack className="font-inter lg:h-[308px] xl:h-[353px] h-[396px] 2xl:h-[397px] 3xl:h-[476px] lg:mb-[259px] xl:mb-[297px] mb-[334px] 3xl:mb-[401px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[29px] xl:mt-[33px] mt-[38px] 3xl:mt-[45px] outline outline-[1px] outline-gray_202 w-[99%]">
            <div className="absolute bottom-[3%] lg:h-[298px] xl:h-[341px] h-[383px] 2xl:h-[384px] 3xl:h-[460px] outline outline-[1px] outline-gray_202 w-[100%]"></div>
            <Column className="absolute bg-white_A700 border-bw05 border-gray_202 border-solid items-center justify-start w-[100%]">
              <Row className="items-center justify-evenly w-[100%]">
                <Text className="bg-gray_50 border-bw05 border-gray_202 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_901 text-left tracking-ls1 w-[12%]">
                  Employees name
                </Text>
                <Text className="bg-gray_50 border-bw05 border-gray_202 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_901 text-left tracking-ls1 w-[12%]">
                  Tech. Strength Of Flutter
                </Text>
                <Text className="bg-gray_50 border-bw05 border-gray_202 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_901 text-left tracking-ls1 w-[12%]">
                  Tech. Strength Of React
                </Text>
                <Text className="bg-gray_50 border-bw05 border-gray_202 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_901 text-left tracking-ls1 w-[12%]">
                  Video Scripting
                </Text>
                <Text className="bg-gray_50 border-bw05 border-gray_202 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_901 text-left tracking-ls1 w-[12%]">
                  Blog Writing
                </Text>
                <Text className="bg-gray_50 border-bw05 border-gray_202 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_901 text-left tracking-ls1 w-[12%]">
                  Podcast
                </Text>
                <Text className="bg-gray_50 border-bw05 border-gray_202 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_901 text-left tracking-ls1 w-[12%]">
                  Live Webinar
                </Text>
                <Text className="bg-gray_50 border-bw05 border-gray_202 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_901 text-left tracking-ls1 w-[12%]">
                  Action
                </Text>
              </Row>
              <List
                className="gap-[0] min-h-[auto] w-[100%]"
                orientation="vertical"
              >
                <Row className="items-center justify-evenly my-[0] w-[100%]">
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_901 text-left tracking-ls1 w-[12%]">
                    Design
                  </Text>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-deep_orange_50 border-bw05 border-red_700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-red_700 tracking-ls1 w-[auto]">
                      Cancelled
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-light_green_50 border-bw05 border-light_green_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_green_A700 tracking-ls1 w-[auto]">
                      Approve
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                      Booked
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-orange_50 border-bw05 border-orange_800 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-orange_800 tracking-ls1 w-[auto]">
                      Pending
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-deep_orange_50 border-bw05 border-red_700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-red_700 tracking-ls1 w-[auto]">
                      Cancelled
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-light_green_50 border-bw05 border-light_green_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_green_A700 tracking-ls1 w-[auto]">
                      Approve
                    </Text>
                  </Column>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-light_blue_A700 tracking-ls1 w-[12%]">
                    Edit
                  </Text>
                </Row>
                <Row className="items-center justify-evenly my-[0] w-[100%]">
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[12%]">
                    Prototype
                  </Text>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-orange_50 border-bw05 border-orange_800 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-orange_800 tracking-ls1 w-[auto]">
                      Pending
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-orange_50 border-bw05 border-orange_800 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-orange_800 tracking-ls1 w-[auto]">
                      Pending
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                      Booked
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                      Booked
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                      Booked
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                      Booked
                    </Text>
                  </Column>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-light_blue_A700 tracking-ls1 w-[12%]">
                    Edit
                  </Text>
                </Row>
                <Row className="items-center justify-evenly my-[0] w-[100%]">
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[12%]">
                    Inspect
                  </Text>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-light_green_50 border-bw05 border-light_green_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_green_A700 tracking-ls1 w-[auto]">
                      Approve
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-light_green_50 border-bw05 border-light_green_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_green_A700 tracking-ls1 w-[auto]">
                      Approve
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-light_green_50 border-bw05 border-light_green_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_green_A700 tracking-ls1 w-[auto]">
                      Approve
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-light_green_50 border-bw05 border-light_green_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_green_A700 tracking-ls1 w-[auto]">
                      Approve
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-light_green_50 border-bw05 border-light_green_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_green_A700 tracking-ls1 w-[auto]">
                      Approve
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-light_green_50 border-bw05 border-light_green_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_green_A700 tracking-ls1 w-[auto]">
                      Approve
                    </Text>
                  </Column>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-light_blue_A700 tracking-ls1 w-[12%]">
                    Edit
                  </Text>
                </Row>
                <Row className="items-center justify-evenly my-[0] w-[100%]">
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[12%]">
                    Content
                  </Text>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                      Booked
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                      Booked
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                      Booked
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                      Booked
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                      Booked
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                      Booked
                    </Text>
                  </Column>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-light_blue_A700 tracking-ls1 w-[12%]">
                    Edit
                  </Text>
                </Row>
                <Row className="items-center justify-evenly my-[0] w-[100%]">
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[12%]">
                    Effects
                  </Text>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-deep_orange_50 border-bw05 border-red_700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-red_700 tracking-ls1 w-[auto]">
                      Cancelled
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-deep_orange_50 border-bw05 border-red_700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-red_700 tracking-ls1 w-[auto]">
                      Cancelled
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-deep_orange_50 border-bw05 border-red_700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-red_700 tracking-ls1 w-[auto]">
                      Cancelled
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-deep_orange_50 border-bw05 border-red_700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-red_700 tracking-ls1 w-[auto]">
                      Cancelled
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-deep_orange_50 border-bw05 border-red_700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-red_700 tracking-ls1 w-[auto]">
                      Cancelled
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-deep_orange_50 border-bw05 border-red_700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-red_700 tracking-ls1 w-[auto]">
                      Cancelled
                    </Text>
                  </Column>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-light_blue_A700 tracking-ls1 w-[12%]">
                    Edit
                  </Text>
                </Row>
                <Row className="items-center justify-evenly my-[0] w-[100%]">
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[12%]">
                    Export
                  </Text>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-orange_50 border-bw05 border-orange_800 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-orange_800 tracking-ls1 w-[auto]">
                      Pending
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-orange_50 border-bw05 border-orange_800 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-orange_800 tracking-ls1 w-[auto]">
                      Pending
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-orange_50 border-bw05 border-orange_800 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-orange_800 tracking-ls1 w-[auto]">
                      Pending
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-orange_50 border-bw05 border-orange_800 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-orange_800 tracking-ls1 w-[auto]">
                      Pending
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-orange_50 border-bw05 border-orange_800 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-orange_800 tracking-ls1 w-[auto]">
                      Pending
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-orange_50 border-bw05 border-orange_800 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-orange_800 tracking-ls1 w-[auto]">
                      Pending
                    </Text>
                  </Column>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-light_blue_A700 tracking-ls1 w-[12%]">
                    Edit
                  </Text>
                </Row>
                <Row className="items-center justify-evenly my-[0] w-[100%]">
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[12%]">
                    Auto layout
                  </Text>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-light_green_50 border-bw05 border-light_green_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_green_A700 tracking-ls1 w-[auto]">
                      Approve
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-light_green_50 border-bw05 border-light_green_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_green_A700 tracking-ls1 w-[auto]">
                      Approve
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-light_green_50 border-bw05 border-light_green_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_green_A700 tracking-ls1 w-[auto]">
                      Approve
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-light_green_50 border-bw05 border-light_green_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_green_A700 tracking-ls1 w-[auto]">
                      Approve
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-light_green_50 border-bw05 border-light_green_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_green_A700 tracking-ls1 w-[auto]">
                      Approve
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-light_green_50 border-bw05 border-light_green_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_green_A700 tracking-ls1 w-[auto]">
                      Approve
                    </Text>
                  </Column>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-light_blue_A700 tracking-ls1 w-[12%]">
                    Edit
                  </Text>
                </Row>
                <Row className="items-center justify-evenly my-[0] w-[100%]">
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[12%]">
                    Text
                  </Text>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                      Booked
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                      Booked
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                      Booked
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                      Booked
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                      Booked
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                    <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                      Booked
                    </Text>
                  </Column>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-light_blue_A700 tracking-ls1 w-[12%]">
                    Edit
                  </Text>
                </Row>
              </List>
            </Column>
          </Stack>
        </Column>
      </Column>
    </>
  );
};

export default EmployeeCapablityMappingPage;
