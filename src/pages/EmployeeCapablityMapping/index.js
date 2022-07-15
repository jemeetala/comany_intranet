import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Image, Text, Button, Input, List } from "components";

const EmployeeCapablityMappingPage = () => {
  const navigate = useNavigate();

  function handleNavigate5() {
    navigate("/employeelist");
  }
  function handleNavigate6() {
    navigate("/homepage");
  }

  const [inputvalue, setInputvalue] = React.useState("");

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
        <Column className="font-sourcesanspro items-center justify-start mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[98%]">
          <Row className="bg-gray_101 border border-gray_300 border-solid items-center justify-end lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px] w-[100%]">
            <Button
              className="common-pointer bg-white_A700 border border-gray_200 border-solid font-bold xl:my-[1px] lg:my-[1px] my-[2px] lg:py-[5px] xl:py-[6px] py-[7px] 3xl:py-[8px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-gray_700 w-[6%]"
              onClick={handleNavigate6}
            >
              DashBoard
            </Button>
            <Button
              className="common-pointer bg-white_A700 border border-gray_200 border-solid font-bold ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] xl:my-[1px] lg:my-[1px] my-[2px] lg:py-[5px] xl:py-[6px] py-[7px] 3xl:py-[8px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-gray_700 w-[7%]"
              onClick={handleNavigate5}
            >
              Employee List
            </Button>
            <Button className="bg-white_A700 border border-gray_200 border-solid font-bold ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] xl:my-[1px] lg:my-[1px] my-[2px] lg:py-[5px] xl:py-[6px] py-[7px] 3xl:py-[8px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_400 w-[11%]">
              Employee Capabiility
            </Button>
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="bg-transparent border-0 font-normal p-[0] px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_500 text-bluegray_500 w-[100%]"
              WrapClassName="3xl:ml-[655px] 3xl:pl-[12px] 3xl:pr-[26px] 3xl:py-[12px] border border-gray_400 border-solid flex lg:ml-[424px] lg:mt-[1px] lg:pl-[7px] lg:pr-[17px] lg:py-[7px] ml-[546px] mt-[2px] pl-[10px] pr-[22px] py-[10px] rounded-radius4 w-[25%] xl:ml-[485px] xl:mt-[1px] xl:pl-[8px] xl:pr-[19px] xl:py-[8px]"
              name="Group187"
              placeholder="Search.."
              prefix={
                <Image
                  src={"images/img_vector_4.png"}
                  className="cursor-pointer w-[20.01px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px] my-[auto]"
                  alt="Vector"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <Image
                    onClick={() => setInputvalue("")}
                    src={"images/close1.svg"}
                    className="cursor-pointer w-[20.01px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px] my-[auto]"
                    alt="Vector"
                  />
                ) : (
                  ""
                )
              }
            ></Input>
            <Button className="bg-bluegray_900 font-normal mb-[1px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mr-[17px] xl:mr-[20px] mr-[23px] 3xl:mr-[27px] xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[5%]">
              Search
            </Button>
          </Row>
          <Column className="bg-white_A700 font-inder items-start justify-start mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:p-[11px] xl:p-[13px] p-[15px] 3xl:p-[18px] rounded-radius4 shadow-bs w-[100%]">
            <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
              Employee Capability list
            </Text>
            <Column className="font-inter items-center justify-start lg:mb-[280px] xl:mb-[320px] mb-[360px] 3xl:mb-[432px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[30px] xl:mt-[34px] mt-[39px] 3xl:mt-[46px] outline outline-[1px] outline-gray_201 w-[99%]">
              <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-center justify-start w-[100%]">
                <Row className="items-center justify-evenly w-[100%]">
                  <Text className="bg-gray_50 border-bw05 border-gray_201 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_901 text-left tracking-ls1 w-[12%]">
                    Employees name
                  </Text>
                  <Text className="bg-gray_50 border-bw05 border-gray_201 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_901 text-left tracking-ls1 w-[12%]">
                    Tech. Strength Of Flutter
                  </Text>
                  <Text className="bg-gray_50 border-bw05 border-gray_201 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_901 text-left tracking-ls1 w-[12%]">
                    Tech. Strength Of React
                  </Text>
                  <Text className="bg-gray_50 border-bw05 border-gray_201 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_901 text-left tracking-ls1 w-[12%]">
                    Video Scripting
                  </Text>
                  <Text className="bg-gray_50 border-bw05 border-gray_201 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_901 text-left tracking-ls1 w-[12%]">
                    Blog Writing
                  </Text>
                  <Text className="bg-gray_50 border-bw05 border-gray_201 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_901 text-left tracking-ls1 w-[12%]">
                    Podcast
                  </Text>
                  <Text className="bg-gray_50 border-bw05 border-gray_201 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_901 text-left tracking-ls1 w-[12%]">
                    Live Webinar
                  </Text>
                  <Text className="bg-gray_50 border-bw05 border-gray_201 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_901 text-left tracking-ls1 w-[12%]">
                    Action
                  </Text>
                </Row>
                <List
                  className="gap-[0] min-h-[auto] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="items-center justify-evenly my-[0] w-[100%]">
                    <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_901 text-left tracking-ls1 w-[12%]">
                      Design
                    </Text>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-deep_orange_50 border-bw05 border-red_700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-red_700 tracking-ls1 w-[auto]">
                        Cancelled
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-light_green_50 border-bw05 border-light_green_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_green_A700 tracking-ls1 w-[auto]">
                        Approve
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                        Booked
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-orange_50 border-bw05 border-orange_800 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-orange_800 tracking-ls1 w-[auto]">
                        Pending
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-deep_orange_50 border-bw05 border-red_700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-red_700 tracking-ls1 w-[auto]">
                        Cancelled
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-light_green_50 border-bw05 border-light_green_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_green_A700 tracking-ls1 w-[auto]">
                        Approve
                      </Text>
                    </Column>
                    <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-light_blue_A700 tracking-ls1 w-[12%]">
                      Edit
                    </Text>
                  </Row>
                  <Row className="items-center justify-evenly my-[0] w-[100%]">
                    <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[12%]">
                      Prototype
                    </Text>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-orange_50 border-bw05 border-orange_800 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-orange_800 tracking-ls1 w-[auto]">
                        Pending
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-orange_50 border-bw05 border-orange_800 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-orange_800 tracking-ls1 w-[auto]">
                        Pending
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                        Booked
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                        Booked
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                        Booked
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                        Booked
                      </Text>
                    </Column>
                    <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-light_blue_A700 tracking-ls1 w-[12%]">
                      Edit
                    </Text>
                  </Row>
                  <Row className="items-center justify-evenly my-[0] w-[100%]">
                    <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[12%]">
                      Inspect
                    </Text>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-light_green_50 border-bw05 border-light_green_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_green_A700 tracking-ls1 w-[auto]">
                        Approve
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-light_green_50 border-bw05 border-light_green_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_green_A700 tracking-ls1 w-[auto]">
                        Approve
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-light_green_50 border-bw05 border-light_green_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_green_A700 tracking-ls1 w-[auto]">
                        Approve
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-light_green_50 border-bw05 border-light_green_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_green_A700 tracking-ls1 w-[auto]">
                        Approve
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-light_green_50 border-bw05 border-light_green_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_green_A700 tracking-ls1 w-[auto]">
                        Approve
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-light_green_50 border-bw05 border-light_green_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_green_A700 tracking-ls1 w-[auto]">
                        Approve
                      </Text>
                    </Column>
                    <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-light_blue_A700 tracking-ls1 w-[12%]">
                      Edit
                    </Text>
                  </Row>
                  <Row className="items-center justify-evenly my-[0] w-[100%]">
                    <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[12%]">
                      Content
                    </Text>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                        Booked
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                        Booked
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                        Booked
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                        Booked
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                        Booked
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                        Booked
                      </Text>
                    </Column>
                    <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-light_blue_A700 tracking-ls1 w-[12%]">
                      Edit
                    </Text>
                  </Row>
                  <Row className="items-center justify-evenly my-[0] w-[100%]">
                    <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[12%]">
                      Effects
                    </Text>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-deep_orange_50 border-bw05 border-red_700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-red_700 tracking-ls1 w-[auto]">
                        Cancelled
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-deep_orange_50 border-bw05 border-red_700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-red_700 tracking-ls1 w-[auto]">
                        Cancelled
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-deep_orange_50 border-bw05 border-red_700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-red_700 tracking-ls1 w-[auto]">
                        Cancelled
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-deep_orange_50 border-bw05 border-red_700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-red_700 tracking-ls1 w-[auto]">
                        Cancelled
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-deep_orange_50 border-bw05 border-red_700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-red_700 tracking-ls1 w-[auto]">
                        Cancelled
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-deep_orange_50 border-bw05 border-red_700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-red_700 tracking-ls1 w-[auto]">
                        Cancelled
                      </Text>
                    </Column>
                    <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-light_blue_A700 tracking-ls1 w-[12%]">
                      Edit
                    </Text>
                  </Row>
                  <Row className="items-center justify-evenly my-[0] w-[100%]">
                    <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[12%]">
                      Export
                    </Text>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-orange_50 border-bw05 border-orange_800 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-orange_800 tracking-ls1 w-[auto]">
                        Pending
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-orange_50 border-bw05 border-orange_800 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-orange_800 tracking-ls1 w-[auto]">
                        Pending
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-orange_50 border-bw05 border-orange_800 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-orange_800 tracking-ls1 w-[auto]">
                        Pending
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-orange_50 border-bw05 border-orange_800 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-orange_800 tracking-ls1 w-[auto]">
                        Pending
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-orange_50 border-bw05 border-orange_800 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-orange_800 tracking-ls1 w-[auto]">
                        Pending
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-orange_50 border-bw05 border-orange_800 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-orange_800 tracking-ls1 w-[auto]">
                        Pending
                      </Text>
                    </Column>
                    <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-light_blue_A700 tracking-ls1 w-[12%]">
                      Edit
                    </Text>
                  </Row>
                  <Row className="items-center justify-evenly my-[0] w-[100%]">
                    <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[12%]">
                      Auto layout
                    </Text>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-light_green_50 border-bw05 border-light_green_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_green_A700 tracking-ls1 w-[auto]">
                        Approve
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-light_green_50 border-bw05 border-light_green_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_green_A700 tracking-ls1 w-[auto]">
                        Approve
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-light_green_50 border-bw05 border-light_green_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_green_A700 tracking-ls1 w-[auto]">
                        Approve
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-light_green_50 border-bw05 border-light_green_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_green_A700 tracking-ls1 w-[auto]">
                        Approve
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-light_green_50 border-bw05 border-light_green_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_green_A700 tracking-ls1 w-[auto]">
                        Approve
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-light_green_50 border-bw05 border-light_green_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_green_A700 tracking-ls1 w-[auto]">
                        Approve
                      </Text>
                    </Column>
                    <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-light_blue_A700 tracking-ls1 w-[12%]">
                      Edit
                    </Text>
                  </Row>
                  <Row className="items-center justify-evenly my-[0] w-[100%]">
                    <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[12%]">
                      Text
                    </Text>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                        Booked
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                        Booked
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                        Booked
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                        Booked
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                        Booked
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                      <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                        Booked
                      </Text>
                    </Column>
                    <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-light_blue_A700 tracking-ls1 w-[12%]">
                      Edit
                    </Text>
                  </Row>
                </List>
              </Column>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default EmployeeCapablityMappingPage;
