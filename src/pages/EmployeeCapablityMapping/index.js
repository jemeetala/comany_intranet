import React from "react";

import { Column, Row, Image, Text, Button, Input, List } from "components";

const EmployeeCapablityMappingPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_100 font-sourcesanspro items-center justify-start mx-[auto] lg:pb-[14px] xl:pb-[16px] pb-[19px] 3xl:pb-[22px] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 border border-bluegray_50 border-solid items-center justify-start lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] w-[100%]">
            <Image
              src={"images/img_image2_1.png"}
              className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[26px] xl:ml-[30px] ml-[34px] 3xl:ml-[40px] xl:my-[3px] lg:my-[3px] my-[4px] object-contain lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
              alt="image2"
            />
            <Text className="hover:bg-white_A700 cursor-pointer font-segoeui hover:font-semibold font-semibold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
              FrashTeam
            </Text>
            <Text className="bg-white_A700 border border-gray_200 border-solid cursor-pointer font-bold hover:font-semibold font-sourcesanspro xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[552px] xl:ml-[631px] ml-[710px] 3xl:ml-[852px] lg:pl-[6px] xl:pl-[7px] pl-[8px] 3xl:pl-[9px] lg:py-[5px] xl:py-[6px] py-[7px] 3xl:py-[8px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] hover:text-black_900 text-gray_700 w-[auto]">
              Employee List
            </Text>
            <Image
              src={"images/img_vector_7.png"}
              className="lg:h-[21px] xl:h-[24px] h-[26px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[221px] xl:ml-[253px] ml-[285px] 3xl:ml-[342px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] object-contain w-[2%]"
              alt="Vector"
            />
            <Button className="bg-amber_100 flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">
              <Image
                src={"images/img_group99_1.png"}
                className="w-[72%] flex items-center justify-center"
                alt="Group99"
              />
            </Button>
          </Row>
        </header>
        <Column className="items-center justify-start mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[98%]">
          <Row className="bg-gray_101 border border-gray_300 border-solid items-center justify-end lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px] w-[100%]">
            <Button
              className="3xl:pl-[14px] 3xl:pr-[21px] 3xl:py-[8px] bg-white_A700 border border-gray_200 border-solid flex items-center justify-between lg:my-[1px] lg:pl-[9px] lg:pr-[14px] lg:py-[5px] my-[2px] pl-[12px] pr-[18px] py-[7px] rounded-radius4 text-center w-[9%] xl:my-[1px] xl:pl-[10px] xl:pr-[16px] xl:py-[6px]"
              leftIcon={
                <Image
                  src={"images/img_vector_8.png"}
                  className="w-[16px] h-[16px] text-center lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px]"
                  alt="Vector"
                />
              }
            >
              <div className="bg-transparent font-bold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_700">
                DashBoard
              </div>
            </Button>
            <Button
              className="3xl:ml-[9px] 3xl:pl-[10px] 3xl:pr-[13px] 3xl:py-[8px] bg-white_A700 border border-gray_200 border-solid flex items-center justify-between lg:ml-[6px] lg:my-[1px] lg:pl-[7px] lg:pr-[8px] lg:py-[5px] ml-[8px] my-[2px] pl-[9px] pr-[11px] py-[7px] rounded-radius4 text-center w-[10%] xl:ml-[7px] xl:my-[1px] xl:pl-[8px] xl:pr-[9px] xl:py-[6px]"
              leftIcon={
                <Image
                  src={"images/img_vector_9.png"}
                  className="w-[21.97px] text-center lg:w-[17px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[26px]"
                  alt="Vector"
                />
              }
            >
              <div className="bg-transparent font-bold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_700">
                Employee List
              </div>
            </Button>
            <Button
              className="3xl:ml-[8px] 3xl:pl-[12px] 3xl:pr-[13px] 3xl:py-[8px] bg-white_A700 border border-gray_200 border-solid flex items-center justify-between lg:ml-[5px] lg:my-[1px] lg:pl-[7px] lg:pr-[8px] lg:py-[5px] ml-[7px] my-[2px] pl-[10px] pr-[11px] py-[7px] rounded-radius4 text-center w-[13%] xl:ml-[6px] xl:my-[1px] xl:pl-[8px] xl:pr-[9px] xl:py-[6px]"
              leftIcon={
                <Image
                  src={"images/img_vector_10.png"}
                  className="w-[20px] text-center lg:w-[15px] xl:w-[17px] 3xl:w-[24px]"
                  alt="Vector"
                />
              }
            >
              <div className="bg-transparent font-bold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-deep_purple_400">
                Employee Capabiility
              </div>
            </Button>
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="bg-transparent border-0 font-normal p-[0] px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_500 text-bluegray_500 w-[100%]"
              WrapClassName="3xl:ml-[519px] 3xl:pl-[12px] 3xl:pr-[26px] 3xl:py-[12px] border border-gray_400 border-solid flex lg:ml-[336px] lg:mt-[1px] lg:pl-[7px] lg:pr-[17px] lg:py-[7px] ml-[433px] mt-[2px] pl-[10px] pr-[22px] py-[10px] rounded-radius4 w-[25%] xl:ml-[385px] xl:mt-[1px] xl:pl-[8px] xl:pr-[19px] xl:py-[8px]"
              name="Group187"
              placeholder="Search.."
              prefix={
                <Image
                  src={"images/img_vector_11.png"}
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
