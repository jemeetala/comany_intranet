import React from "react";

import { Column, Row, Image, Text, Button, Stack, List } from "components";

const EmployeeListPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-segoeui items-center justify-start mx-[auto] lg:pb-[21px] xl:pb-[24px] pb-[28px] 3xl:pb-[33px] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 border border-bluegray_50 border-solid items-center justify-start lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] w-[100%]">
            <Image
              src={"images/img_image2_3.png"}
              className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[26px] xl:ml-[30px] ml-[34px] 3xl:ml-[40px] xl:my-[3px] lg:my-[3px] my-[4px] object-contain lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
              alt="image2"
            />
            <Text className="cursor-pointer hover:font-semibold font-semibold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
              FrashTeam
            </Text>
            <Image
              src={"images/img_vector_17.png"}
              className="lg:h-[21px] xl:h-[24px] h-[26px] 2xl:h-[27px] 3xl:h-[32px] xl:ml-[1004px] ml-[1129px] 3xl:ml-[1355px] lg:ml-[878px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] object-contain w-[2%]"
              alt="Vector"
            />
            <Button className="bg-amber_100 flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">
              <Image
                src={"images/img_group99_3.png"}
                className="w-[72%] flex items-center justify-center"
                alt="Group99"
              />
            </Button>
          </Row>
        </header>
        <Stack className="font-inter 3xl:h-[1019px] lg:h-[660px] xl:h-[755px] h-[848px] 2xl:h-[849px] lg:mt-[58px] xl:mt-[66px] mt-[75px] 3xl:mt-[90px] w-[97%]">
          <Row className="absolute bg-white_A700 bottom-[0] items-center justify-start lg:p-[19px] xl:p-[22px] p-[25px] 3xl:p-[30px] rounded-radius4 shadow-bs w-[100%]">
            <Text className="font-segoeui font-semibold lg:mb-[596px] xl:mb-[682px] mb-[767px] 3xl:mb-[920px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
              Employee Details
            </Text>
            <Button className="border border-bluegray_900 border-solid font-normal font-sourcesanspro lg:mb-[589px] xl:mb-[674px] mb-[758px] 3xl:mb-[910px] 3xl:ml-[1047px] lg:ml-[678px] xl:ml-[775px] ml-[872px] mt-[0] not-italic lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 text-center w-[10%]">
              Sync All Employee
            </Button>
            <Button className="bg-bluegray_900 font-normal font-sourcesanspro lg:mb-[589px] xl:mb-[674px] mb-[758px] 3xl:mb-[910px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] mt-[0] not-italic lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[11%]">
              Add New Employee
            </Button>
          </Row>
          <Column className="absolute bg-white_A700 border-bw05 border-gray_201 border-solid items-center justify-start lg:pb-[280px] xl:pb-[321px] pb-[361px] 3xl:pb-[433px] w-[100%]">
            <Row className="items-center justify-start w-[100%]">
              <Image
                src={"images/img_title.png"}
                className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] object-contain w-[6%]"
                alt="Title"
              />
              <Text className="bg-gray_50 border-bw05 border-gray_201 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                Name
              </Text>
              <Button className="bg-gray_50 border-bw05 border-gray_201 border-solid font-bold lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-center tracking-ls1 w-[16%]">
                Surname
              </Button>
              <Text className="bg-gray_50 border-bw05 border-gray_201 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] ml-[0] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                Designation
              </Text>
              <Text className="bg-gray_50 border-bw05 border-gray_201 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                official_email
              </Text>
              <Text className="bg-gray_50 border-bw05 border-gray_201 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                Joining Date
              </Text>
              <Text className="bg-gray_50 border-bw05 border-gray_201 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] ml-[0] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                Gender
              </Text>
            </Row>
            <List
              className="gap-[0] min-h-[auto] w-[100%]"
              orientation="vertical"
            >
              <Row className="items-center justify-start my-[0] w-[100%]">
                <Image
                  src={"images/img_content.png"}
                  className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] object-contain w-[6%]"
                  alt="Content"
                />
                <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[16%]">
                  <Text className="font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[auto]">
                    Design
                  </Text>
                </Column>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] ml-[0] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  2400
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  2022-02-21
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] ml-[0] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  2022-02-21
                </Text>
              </Row>
              <Row className="items-center justify-start my-[0] w-[100%]">
                <Image
                  src={"images/img_content_1.png"}
                  className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] object-contain w-[6%]"
                  alt="Content"
                />
                <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[16%]">
                  <Text className="font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[auto]">
                    Prototype
                  </Text>
                </Column>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  Pulvinar eu facilisis turpis imperdiet sed.
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] ml-[0] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  Pulvinar eu facilisis turpis imperdiet sed.
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  1000
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  2022-06-29
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] ml-[0] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  2022-06-29
                </Text>
              </Row>
              <Row className="items-center justify-start my-[0] w-[100%]">
                <Image
                  src={"images/img_content_2.png"}
                  className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] object-contain w-[6%]"
                  alt="Content"
                />
                <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[16%]">
                  <Text className="font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[auto]">
                    Inspect
                  </Text>
                </Column>
                <Button className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal not-italic py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-center tracking-ls1 w-[16%]">
                  consectetur adipiscing elit,
                </Button>
                <Button className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal ml-[0] not-italic py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-center tracking-ls1 w-[16%]">
                  consectetur adipiscing elit,
                </Button>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  0900
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  2022-04-23
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] ml-[0] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  2022-04-23
                </Text>
              </Row>
              <Row className="items-center justify-start my-[0] w-[100%]">
                <Image
                  src={"images/img_content_3.png"}
                  className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] object-contain w-[6%]"
                  alt="Content"
                />
                <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[16%]">
                  <Text className="font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[auto]">
                    Content
                  </Text>
                </Column>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  sed do eiusmod tempor incididunt
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] ml-[0] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  sed do eiusmod tempor incididunt
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  2100
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  2022-02-22
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] ml-[0] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  2022-02-22
                </Text>
              </Row>
              <Row className="items-center justify-start my-[0] w-[100%]">
                <Image
                  src={"images/img_content_4.png"}
                  className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] object-contain w-[6%]"
                  alt="Content"
                />
                <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[16%]">
                  <Text className="font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[auto]">
                    Effects
                  </Text>
                </Column>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  quis nostrud exercitation ullamco laboris
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] ml-[0] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  quis nostrud exercitation ullamco laboris
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  0300
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  2022-02-04
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] ml-[0] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  2022-02-04
                </Text>
              </Row>
              <Row className="items-center justify-start my-[0] w-[100%]">
                <Image
                  src={"images/img_content_5.png"}
                  className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] object-contain w-[6%]"
                  alt="Content"
                />
                <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[16%]">
                  <Text className="font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[auto]">
                    Export
                  </Text>
                </Column>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  sunt in culpa qui officia
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] ml-[0] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  sunt in culpa qui officia
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  1100
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  2022-03-22
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] ml-[0] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  2022-03-22
                </Text>
              </Row>
              <Row className="items-center justify-start my-[0] w-[100%]">
                <Image
                  src={"images/img_content_6.png"}
                  className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] object-contain w-[6%]"
                  alt="Content"
                />
                <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[16%]">
                  <Text className="font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[auto]">
                    Auto layout
                  </Text>
                </Column>
                <Button className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal not-italic py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-center tracking-ls1 w-[16%]">
                  Ut enim ad minim veniam
                </Button>
                <Button className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal ml-[0] not-italic py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-center tracking-ls1 w-[16%]">
                  Ut enim ad minim veniam
                </Button>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  1800
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  2022-02-13
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] ml-[0] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  2022-02-13
                </Text>
              </Row>
            </List>
            <Row className="items-center justify-start w-[100%]">
              <Image
                src={"images/img_content_7.png"}
                className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] object-contain w-[6%]"
                alt="Content"
              />
              <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                Text
              </Text>
              <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                Excepteur sint occaecat cupidatat non
              </Text>
              <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] ml-[0] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                Excepteur sint occaecat cupidatat non
              </Text>
              <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                0400
              </Text>
              <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                2022-01-16
              </Text>
              <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] ml-[0] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                2022-01-16
              </Text>
            </Row>
          </Column>
        </Stack>
      </Column>
    </>
  );
};

export default EmployeeListPage;
