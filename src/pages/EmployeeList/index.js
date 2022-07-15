import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Image,
  Text,
  Button,
  Input,
  Stack,
  List,
} from "components";

const EmployeeListPage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/homepage");
  }
  function handleNavigate7() {
    navigate("/employeecapablitymapping");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_100 font-segoeui items-center justify-start mx-[auto] lg:pb-[17px] xl:pb-[20px] pb-[23px] 3xl:pb-[27px] w-[100%]">
        <Row className="bg-white_A700 border border-bluegray_50 border-solid items-center justify-start lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]">
          <Image
            src={"images/img_image2_3.png"}
            className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] object-contain lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
            alt="image2"
          />
          <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
            FrashTeam
          </Text>
        </Row>
        <Column className="font-sourcesanspro items-center justify-start 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[98%]">
          <Row className="bg-gray_101 border border-gray_300 border-solid items-center justify-end lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px] w-[100%]">
            <Button
              className="common-pointer bg-white_A700 border border-gray_200 border-solid font-bold xl:my-[1px] lg:my-[1px] my-[2px] lg:py-[5px] xl:py-[6px] py-[7px] 3xl:py-[8px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-gray_700 w-[6%]"
              onClick={handleNavigate1}
            >
              DashBoard
            </Button>
            <Button className="bg-white_A700 border border-gray_200 border-solid font-bold ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] xl:my-[1px] lg:my-[1px] my-[2px] lg:py-[5px] xl:py-[6px] py-[7px] 3xl:py-[8px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-gray_700 w-[7%]">
              Employee List
            </Button>
            <Button
              className="common-pointer bg-white_A700 border border-gray_200 border-solid font-bold ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] xl:my-[1px] lg:my-[1px] my-[2px] lg:py-[5px] xl:py-[6px] py-[7px] 3xl:py-[8px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-deep_purple_400 w-[11%]"
              onClick={handleNavigate7}
            >
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
                  src={"images/img_vector_6.png"}
                  className="cursor-pointer w-[20.01px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px] my-[auto]"
                  alt="Vector"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <Image
                    onClick={() => setInputvalue("")}
                    src={"images/close3.svg"}
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
          <Stack className="font-inter 3xl:h-[1026px] lg:h-[665px] xl:h-[760px] h-[854px] 2xl:h-[855px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[99%]">
            <Row className="absolute bg-white_A700 bottom-[1%] items-center justify-start lg:p-[19px] xl:p-[22px] p-[25px] 3xl:p-[30px] rounded-radius4 shadow-bs w-[100%]">
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
            <Column className="absolute bg-white_A700 border-bw05 border-gray_201 border-solid inset-x-[0] items-center justify-start mx-[auto] lg:pb-[280px] xl:pb-[321px] pb-[361px] 3xl:pb-[433px] w-[94%]">
              <List
                className="gap-[0] min-h-[auto] w-[100%]"
                orientation="vertical"
              >
                <Row className="items-center justify-evenly my-[0] w-[100%]">
                  <Image
                    src={"images/img_title.png"}
                    className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] object-contain w-[6%]"
                    alt="Title"
                  />
                  <Column className="bg-gray_50 border-bw05 border-gray_201 border-solid items-start lg:p-[10px] xl:p-[11px] p-[13px] 3xl:p-[15px] w-[16%]">
                    <Text className="font-bold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[auto]">
                      Name
                    </Text>
                  </Column>
                  <Button className="bg-gray_50 border-bw05 border-gray_201 border-solid font-bold lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-center tracking-ls1 w-[16%]">
                    Surname
                  </Button>
                  <Text className="bg-gray_50 border-bw05 border-gray_201 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                    Designation
                  </Text>
                  <Text className="bg-gray_50 border-bw05 border-gray_201 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                    official_email
                  </Text>
                  <Text className="bg-gray_50 border-bw05 border-gray_201 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                    Joining Date
                  </Text>
                  <Text className="bg-gray_50 border-bw05 border-gray_201 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                    Gender
                  </Text>
                </Row>
                <Row className="items-center justify-evenly my-[0] w-[100%]">
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
                  <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                    2400
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                    2022-02-21
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                    2022-02-21
                  </Text>
                </Row>
                <Row className="items-center justify-evenly my-[0] w-[100%]">
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
                  <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                    Pulvinar eu facilisis turpis imperdiet sed.
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                    1000
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                    2022-06-29
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                    2022-06-29
                  </Text>
                </Row>
                <Row className="items-center justify-evenly my-[0] w-[100%]">
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
                  <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                    consectetur adipiscing elit,
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                    consectetur adipiscing elit,
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                    0900
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                    2022-04-23
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                    2022-04-23
                  </Text>
                </Row>
                <Row className="items-center justify-evenly my-[0] w-[100%]">
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
                  <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                    sed do eiusmod tempor incididunt
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                    2100
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                    2022-02-22
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                    2022-02-22
                  </Text>
                </Row>
                <Row className="items-center justify-evenly my-[0] w-[100%]">
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
                  <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                    quis nostrud exercitation ullamco laboris
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                    0300
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                    2022-02-04
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                    2022-02-04
                  </Text>
                </Row>
                <Row className="items-center justify-evenly my-[0] w-[100%]">
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
                  <Button className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal not-italic py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-center tracking-ls1 w-[16%]">
                    sunt in culpa qui officia
                  </Button>
                  <Button className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal not-italic py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-center tracking-ls1 w-[16%]">
                    sunt in culpa qui officia
                  </Button>
                  <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                    1100
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                    2022-03-22
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                    2022-03-22
                  </Text>
                </Row>
                <Row className="items-center justify-evenly my-[0] w-[100%]">
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
                  <Button className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal not-italic py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-center tracking-ls1 w-[16%]">
                    Ut enim ad minim veniam
                  </Button>
                  <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                    1800
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                    2022-02-13
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                    2022-02-13
                  </Text>
                </Row>
              </List>
              <Row className="items-center justify-evenly w-[100%]">
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
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  Excepteur sint occaecat cupidatat non
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  0400
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  2022-01-16
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  2022-01-16
                </Text>
              </Row>
            </Column>
          </Stack>
        </Column>
      </Column>
    </>
  );
};

export default EmployeeListPage;
