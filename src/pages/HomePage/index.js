import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Image,
  Text,
  Stack,
  Button,
  List,
  Line,
} from "components";

const HomePagePage = () => {
  const navigate = useNavigate();

  function handleNavigate8() {
    navigate("/employeecapablitymapping");
  }
  function handleNavigate9() {
    navigate("/employeelist");
  }

  return (
    <>
      <Column className="bg-gray_100 font-segoeui items-center justify-start mx-[auto] lg:pb-[14px] xl:pb-[16px] pb-[19px] 3xl:pb-[22px] w-[100%]">
        <Row className="bg-white_A700 border border-bluegray_50 border-solid items-center justify-start lg:p-[10px] xl:p-[12px] p-[14px] 3xl:p-[16px] w-[100%]">
          <Image
            src={"images/img_image2_2.png"}
            className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] object-contain lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
            alt="image2"
          />
          <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[3px] lg:my-[3px] my-[4px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
            FrashTeam
          </Text>
        </Row>
        <Stack className="bg-white_A700 border border-indigo_50 border-solid font-sourcesanspro lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[98%]">
          <Row className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[95%]">
            <Text className="font-semibold lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-deep_purple_A200 w-[auto]">
              My DashBoard
            </Text>
            <Column className="bg-white_A700 border border-gray_200 border-solid items-start justify-start lg:ml-[448px] xl:ml-[512px] ml-[576px] 3xl:ml-[691px] xl:mt-[1px] lg:mt-[1px] mt-[2px] lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px] rounded-radius4 w-[7%]">
              <Text className="font-normal ml-[0] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-indigo_A200 w-[auto]">
                DashBoard
              </Text>
            </Column>
            <Column className="bg-white_A700 border border-gray_200 border-solid items-center justify-start xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px] rounded-radius4 w-[7%]">
              <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-indigo_A200 w-[auto]">
                Employee List
              </Text>
            </Column>
            <Column className="bg-white_A700 border border-gray_200 border-solid items-center justify-start lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] xl:mt-[3px] lg:mt-[3px] mt-[4px] lg:p-[4px] xl:p-[5px] p-[6px] 3xl:p-[7px] rounded-radius4 w-[6%]">
              <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-indigo_A200 w-[auto]">
                Capabilities
              </Text>
            </Column>
            <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[3%]">
              <div className="absolute bg-bluegray_900 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius2111 w-[100%]"></div>
              <Image
                src={"images/img_vector_8.png"}
                className="absolute lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] inset-[0] justify-center m-[auto] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                alt="Vector"
              />
            </Stack>
            <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] w-[3%]">
              <div className="absolute bg-white_A700 border border-gray_201 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius2111 w-[100%]"></div>
              <Image
                src={"images/img_vector_9.png"}
                className="absolute lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] inset-[0] justify-center m-[auto] object-contain w-[50%]"
                alt="Vector"
              />
            </Stack>
            <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] w-[3%]">
              <div className="absolute bg-white_A700 border border-gray_201 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius2111 w-[100%]"></div>
              <Image
                src={"images/img_vector_10.png"}
                className="absolute bottom-[5%] lg:h-[25px] xl:h-[28px] h-[31px] 2xl:h-[32px] 3xl:h-[38px] inset-x-[0] mx-[auto] object-contain w-[76%]"
                alt="Vector"
              />
            </Stack>
            <Stack className="bg-red_600 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] xl:my-[1px] lg:my-[1px] my-[2px] p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] rounded-radius19 w-[3%]">
              <Image
                src={"images/img_1_2.png"}
                className="absolute xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] inset-x-[0] mx-[auto] object-contain w-[33%]"
                alt="1"
              />
            </Stack>
            <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] w-[3%]">
              <div className="absolute bg-amber_100 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius2111 w-[100%]"></div>
              <Image
                src={"images/img_profilename_2.png"}
                className="absolute lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] inset-[0] justify-center m-[auto] object-contain w-[29%]"
                alt="ProfileName"
              />
            </Stack>
          </Row>
          <Row className="absolute bg-white_A700 border border-indigo_50 border-solid items-center justify-end lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] w-[100%]">
            <Text className="font-semibold lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-deep_purple_A200 w-[auto]">
              My DashBoard
            </Text>
            <Button className="bg-white_A700 border border-gray_200 border-solid font-normal lg:ml-[448px] xl:ml-[512px] ml-[576px] 3xl:ml-[691px] xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:py-[5px] xl:py-[6px] py-[7px] 3xl:py-[8px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-indigo_A200 w-[6%]">
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
                src={"images/img_vector_11.png"}
                className="absolute lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] inset-[0] justify-center m-[auto] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                alt="Vector"
              />
            </Stack>
            <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] w-[3%]">
              <div className="absolute bg-white_A700 border border-gray_201 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius2111 w-[100%]"></div>
              <Image
                src={"images/img_vector_12.png"}
                className="absolute lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] inset-[0] justify-center m-[auto] object-contain w-[50%]"
                alt="Vector"
              />
            </Stack>
            <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] w-[3%]">
              <div className="absolute bg-white_A700 border border-gray_201 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius2111 w-[100%]"></div>
              <Image
                src={"images/img_vector_13.png"}
                className="absolute bottom-[5%] lg:h-[25px] xl:h-[28px] h-[31px] 2xl:h-[32px] 3xl:h-[38px] inset-x-[0] mx-[auto] object-contain w-[76%]"
                alt="Vector"
              />
            </Stack>
            <Stack className="bg-red_600 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] xl:my-[1px] lg:my-[1px] my-[2px] p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] rounded-radius19 w-[3%]">
              <Image
                src={"images/img_1_3.png"}
                className="absolute xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] inset-x-[0] mx-[auto] object-contain w-[33%]"
                alt="1"
              />
            </Stack>
            <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] mr-[1px] w-[3%]">
              <div className="absolute bg-amber_100 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius2111 w-[100%]"></div>
              <Image
                src={"images/img_profilename_3.png"}
                className="absolute lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] inset-[0] justify-center m-[auto] object-contain w-[29%]"
                alt="ProfileName"
              />
            </Stack>
          </Row>
        </Stack>
        <List
          className="font-segoeui gap-[0] min-h-[auto] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[93%]"
          orientation="vertical"
        >
          <Row className="items-center justify-between xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
            <Column className="bg-white_A700 items-start lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] rounded-radius4 shadow-bs w-[49%]">
              <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                Candidte Funnel(All-time)
              </Text>
              <Stack className="lg:h-[201px] xl:h-[230px] h-[258px] 2xl:h-[259px] 3xl:h-[310px] lg:ml-[20px] xl:ml-[23px] ml-[26px] 3xl:ml-[31px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[91%]">
                <Row className="absolute items-center justify-evenly w-[100%]">
                  <Column className="items-start lg:pr-[132px] xl:pr-[151px] pr-[170px] 3xl:pr-[204px] w-[65%]">
                    <Row className="items-center justify-start w-[100%]">
                      <Column className="items-start w-[36%]">
                        <Text className="font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-blue_600 w-[auto]">
                          50%
                        </Text>
                        <Text className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
                          Screening
                        </Text>
                      </Column>
                      <Image
                        src={"images/img_line6.png"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:my-[10px] xl:my-[12px] my-[14px] 3xl:my-[16px] object-contain w-[57%]"
                        alt="Line6"
                      />
                    </Row>
                    <Row className="items-center justify-start lg:mt-[118px] xl:mt-[135px] mt-[152px] 3xl:mt-[182px] w-[100%]">
                      <Column className="items-start w-[36%]">
                        <Text className="font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-blue_600 w-[auto]">
                          50%
                        </Text>
                        <Text className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
                          Screening
                        </Text>
                      </Column>
                      <Image
                        src={"images/img_line9.png"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:my-[10px] xl:my-[12px] my-[14px] 3xl:my-[16px] object-contain w-[57%]"
                        alt="Line9"
                      />
                    </Row>
                  </Column>
                  <Column className="items-center w-[35%]">
                    <Row className="items-center justify-start lg:pr-[17px] xl:pr-[20px] pr-[23px] 3xl:pr-[27px] rotate-[-180deg] w-[100%]">
                      <Image
                        src={"images/img_line9_1.png"}
                        className="lg:h-[21px] xl:h-[25px] h-[27px] 2xl:h-[28px] 3xl:h-[33px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain w-[64%]"
                        alt="Line9"
                      />
                      <Column className="items-start xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] rotate-[-180deg] w-[29%]">
                        <Text className="font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-blue_600 w-[auto]">
                          20%
                        </Text>
                        <Text className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
                          Hire
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center justify-start lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] lg:pr-[17px] xl:pr-[20px] pr-[23px] 3xl:pr-[27px] w-[100%]">
                      <Line className="bg-bluegray_100 h-[110px] lg:mb-[18px] xl:mb-[21px] mb-[24px] 3xl:mb-[28px] lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] w-[64%]" />
                      <Column className="items-start xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[29%]">
                        <Text className="font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-blue_600 w-[auto]">
                          15%
                        </Text>
                        <Text className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
                          Offer
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[38px] xl:mt-[43px] mt-[49px] 3xl:mt-[58px] pr-[1px] rotate-[-180deg] w-[100%]">
                      <Image
                        src={"images/img_line9_2.png"}
                        className="lg:h-[21px] xl:h-[25px] h-[27px] 2xl:h-[28px] 3xl:h-[33px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain w-[57%]"
                        alt="Line9"
                      />
                      <Column className="items-start w-[37%]">
                        <Text className="font-bold xl:ml-[1px] lg:ml-[1px] ml-[2px] rotate-[-180deg] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-blue_600 w-[auto]">
                          15%
                        </Text>
                        <Text className="font-normal rotate-[-180deg] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
                          Interviews
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                </Row>
                <Image
                  src={"images/img_group190.png"}
                  className="absolute lg:h-[201px] xl:h-[230px] h-[258px] 2xl:h-[259px] 3xl:h-[310px] inset-x-[27%] object-contain lg:w-[200px] xl:w-[229px] w-[258px] 3xl:w-[309px]"
                  alt="Group190"
                />
              </Stack>
              <Row className="items-start justify-start lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:pr-[30px] xl:pr-[34px] pr-[39px] 3xl:pr-[46px] w-[100%]">
                <div className="bg-blue_600 lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius3 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
                <Text className="font-normal mb-[1px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  Scurcing
                </Text>
                <div className="bg-blue_300 lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[38px] xl:ml-[44px] ml-[50px] 3xl:ml-[60px] rounded-radius3 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
                <Text className="font-normal mb-[1px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  Screening
                </Text>
                <div className="bg-blue_200 lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[32px] xl:ml-[37px] ml-[42px] 3xl:ml-[50px] rounded-radius3 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
                <Text className="font-normal mb-[1px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  Interviews
                </Text>
                <div className="bg-blue_100 lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[30px] xl:ml-[34px] ml-[39px] 3xl:ml-[46px] rounded-radius3 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
                <Text className="font-normal mb-[1px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  Offer
                </Text>
                <div className="bg-blue_51 lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[54px] xl:ml-[62px] ml-[70px] 3xl:ml-[84px] rounded-radius3 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
                <Text className="font-normal mb-[1px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  Hire
                </Text>
              </Row>
            </Column>
            <Column className="bg-white_A700 lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] rounded-radius4 shadow-bs w-[49%]">
              <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mr-[209px] xl:mr-[239px] mr-[269px] 3xl:mr-[322px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                How many candidates were procesed last week?
              </Text>
              <Row className="items-start justify-start lg:mr-[6px] xl:mr-[7px] mr-[8px] 3xl:mr-[9px] lg:mt-[33px] xl:mt-[38px] mt-[43px] 3xl:mt-[51px] w-[99%]">
                <Text className="font-normal leading-[normal] mb-[105px] 3xl:mb-[126px] lg:mb-[81px] xl:mb-[93px] lg:mt-[55px] xl:mt-[63px] mt-[71px] 3xl:mt-[85px] rotate-[-90deg] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 text-left w-[3%]">
                  Total Candidates
                </Text>
                <Stack className="lg:h-[215px] xl:h-[246px] h-[276px] 2xl:h-[277px] 3xl:h-[332px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[95%]">
                  <Column className="absolute items-center justify-start pl-[1px] w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        60
                      </Text>
                      <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        50
                      </Text>
                      <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        40
                      </Text>
                      <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        30
                      </Text>
                      <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        20
                      </Text>
                      <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        10
                      </Text>
                      <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        00
                      </Text>
                      <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                    </Row>
                  </Column>
                  <Row className="absolute h-[max-content] inset-y-[0] items-end justify-start my-[auto] lg:px-[5px] xl:px-[6px] px-[7px] 3xl:px-[8px] right-[4%] w-[87%]">
                    <Column className="items-center justify-start lg:mt-[30px] xl:mt-[34px] mt-[39px] 3xl:mt-[46px] lg:pr-[39px] xl:pr-[45px] pr-[51px] 3xl:pr-[61px] w-[21%]">
                      <div className="bg-blue_600 lg:h-[151px] xl:h-[173px] h-[194px] 2xl:h-[195px] 3xl:h-[233px] w-[58%]"></div>
                      <Text className="font-semibold lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        Scurcing
                      </Text>
                    </Column>
                    <Column className="items-center justify-start lg:pr-[35px] xl:pr-[40px] pr-[46px] 3xl:pr-[55px] w-[22%]">
                      <div className="bg-blue_600 lg:h-[182px] xl:h-[208px] h-[233px] 2xl:h-[234px] 3xl:h-[280px] w-[52%]"></div>
                      <Text className="font-semibold lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        Screening
                      </Text>
                    </Column>
                    <Column className="items-center justify-start lg:mt-[60px] xl:mt-[69px] mt-[78px] 3xl:mt-[93px] lg:pr-[47px] xl:pr-[54px] pr-[61px] 3xl:pr-[73px] w-[25%]">
                      <div className="bg-blue_600 lg:h-[121px] xl:h-[138px] h-[155px] 2xl:h-[156px] 3xl:h-[187px] w-[49%]"></div>
                      <Text className="font-semibold lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        Interviews
                      </Text>
                    </Column>
                    <Column className="h-[110px] 2xl:h-[111px] 3xl:h-[133px] lg:h-[86px] xl:h-[98px] items-start justify-start lg:mt-[121px] xl:mt-[138px] mt-[156px] 3xl:mt-[187px] lg:pr-[59px] xl:pr-[68px] pr-[77px] 3xl:pr-[92px] w-[110px] 3xl:w-[132px] lg:w-[85px] xl:w-[97px]">
                      <div className="bg-blue_600 lg:h-[60px] xl:h-[69px] h-[77px] 2xl:h-[78px] 3xl:h-[93px] ml-[0] w-[97%]"></div>
                      <Text className="font-semibold lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        Offer
                      </Text>
                    </Column>
                    <Column className="items-center justify-start lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] w-[6%]">
                      <div className="bg-blue_600 lg:h-[168px] xl:h-[192px] h-[215px] 2xl:h-[216px] 3xl:h-[259px] w-[100%]"></div>
                      <Text className="font-semibold lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        Hire
                      </Text>
                    </Column>
                  </Row>
                </Stack>
              </Row>
              <Text className="font-normal lg:ml-[227px] xl:ml-[259px] ml-[292px] 3xl:ml-[350px] lg:mr-[233px] xl:mr-[266px] mr-[300px] 3xl:mr-[360px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                Stage
              </Text>
            </Column>
          </Row>
          <Row className="items-center justify-between xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
            <Column className="bg-white_A700 lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] rounded-radius4 shadow-bs w-[49%]">
              <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mr-[209px] xl:mr-[239px] mr-[269px] 3xl:mr-[322px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                How many candidates were procesed last week?
              </Text>
              <Row className="items-start justify-start lg:mr-[6px] xl:mr-[7px] mr-[8px] 3xl:mr-[9px] lg:mt-[33px] xl:mt-[38px] mt-[43px] 3xl:mt-[51px] w-[99%]">
                <Text className="font-normal leading-[normal] mb-[105px] 3xl:mb-[126px] lg:mb-[81px] xl:mb-[93px] lg:mt-[55px] xl:mt-[63px] mt-[71px] 3xl:mt-[85px] rotate-[-90deg] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 text-left w-[3%]">
                  Total Candidates
                </Text>
                <Stack className="lg:h-[215px] xl:h-[246px] h-[276px] 2xl:h-[277px] 3xl:h-[332px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[95%]">
                  <Column className="absolute items-center justify-start pl-[1px] w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        60
                      </Text>
                      <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        50
                      </Text>
                      <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        40
                      </Text>
                      <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        30
                      </Text>
                      <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        20
                      </Text>
                      <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        10
                      </Text>
                      <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        00
                      </Text>
                      <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                    </Row>
                  </Column>
                  <Row className="absolute h-[max-content] inset-y-[0] items-end justify-start my-[auto] lg:px-[5px] xl:px-[6px] px-[7px] 3xl:px-[8px] right-[4%] w-[87%]">
                    <Column className="items-center justify-start lg:mt-[30px] xl:mt-[34px] mt-[39px] 3xl:mt-[46px] lg:pr-[39px] xl:pr-[45px] pr-[51px] 3xl:pr-[61px] w-[21%]">
                      <div className="bg-blue_600 lg:h-[151px] xl:h-[173px] h-[194px] 2xl:h-[195px] 3xl:h-[233px] w-[58%]"></div>
                      <Text className="font-semibold lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        Scurcing
                      </Text>
                    </Column>
                    <Column className="items-center justify-start lg:pr-[35px] xl:pr-[40px] pr-[46px] 3xl:pr-[55px] w-[22%]">
                      <div className="bg-blue_600 lg:h-[182px] xl:h-[208px] h-[233px] 2xl:h-[234px] 3xl:h-[280px] w-[52%]"></div>
                      <Text className="font-semibold lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        Screening
                      </Text>
                    </Column>
                    <Column className="items-center justify-start lg:mt-[60px] xl:mt-[69px] mt-[78px] 3xl:mt-[93px] lg:pr-[47px] xl:pr-[54px] pr-[61px] 3xl:pr-[73px] w-[25%]">
                      <div className="bg-blue_600 lg:h-[121px] xl:h-[138px] h-[155px] 2xl:h-[156px] 3xl:h-[187px] w-[49%]"></div>
                      <Text className="font-semibold lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        Interviews
                      </Text>
                    </Column>
                    <Column className="h-[110px] 2xl:h-[111px] 3xl:h-[133px] lg:h-[86px] xl:h-[98px] items-start justify-start lg:mt-[121px] xl:mt-[138px] mt-[156px] 3xl:mt-[187px] lg:pr-[59px] xl:pr-[68px] pr-[77px] 3xl:pr-[92px] w-[110px] 3xl:w-[132px] lg:w-[85px] xl:w-[97px]">
                      <div className="bg-blue_600 lg:h-[60px] xl:h-[69px] h-[77px] 2xl:h-[78px] 3xl:h-[93px] ml-[0] w-[97%]"></div>
                      <Text className="font-semibold lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        Offer
                      </Text>
                    </Column>
                    <Column className="items-center justify-start lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] w-[6%]">
                      <div className="bg-blue_600 lg:h-[168px] xl:h-[192px] h-[215px] 2xl:h-[216px] 3xl:h-[259px] w-[100%]"></div>
                      <Text className="font-semibold lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        Hire
                      </Text>
                    </Column>
                  </Row>
                </Stack>
              </Row>
              <Text className="font-normal lg:ml-[227px] xl:ml-[259px] ml-[292px] 3xl:ml-[350px] lg:mr-[233px] xl:mr-[266px] mr-[300px] 3xl:mr-[360px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                Stage
              </Text>
            </Column>
            <Column className="bg-white_A700 lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] rounded-radius4 shadow-bs w-[49%]">
              <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mr-[209px] xl:mr-[239px] mr-[269px] 3xl:mr-[322px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                How many candidates were procesed last week?
              </Text>
              <Row className="items-start justify-start lg:mr-[6px] xl:mr-[7px] mr-[8px] 3xl:mr-[9px] lg:mt-[33px] xl:mt-[38px] mt-[43px] 3xl:mt-[51px] w-[99%]">
                <Text className="font-normal leading-[normal] mb-[105px] 3xl:mb-[126px] lg:mb-[81px] xl:mb-[93px] lg:mt-[55px] xl:mt-[63px] mt-[71px] 3xl:mt-[85px] rotate-[-90deg] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 text-left w-[3%]">
                  Total Candidates
                </Text>
                <Stack className="lg:h-[215px] xl:h-[246px] h-[276px] 2xl:h-[277px] 3xl:h-[332px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[95%]">
                  <Column className="absolute items-center justify-start pl-[1px] w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        60
                      </Text>
                      <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        50
                      </Text>
                      <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        40
                      </Text>
                      <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        30
                      </Text>
                      <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        20
                      </Text>
                      <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        10
                      </Text>
                      <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        00
                      </Text>
                      <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                    </Row>
                  </Column>
                  <Row className="absolute h-[max-content] inset-y-[0] items-end justify-start my-[auto] lg:px-[5px] xl:px-[6px] px-[7px] 3xl:px-[8px] right-[4%] w-[87%]">
                    <Column className="items-center justify-start lg:mt-[30px] xl:mt-[34px] mt-[39px] 3xl:mt-[46px] lg:pr-[39px] xl:pr-[45px] pr-[51px] 3xl:pr-[61px] w-[21%]">
                      <div className="bg-blue_600 lg:h-[151px] xl:h-[173px] h-[194px] 2xl:h-[195px] 3xl:h-[233px] w-[58%]"></div>
                      <Text className="font-semibold lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        Scurcing
                      </Text>
                    </Column>
                    <Column className="items-center justify-start lg:pr-[35px] xl:pr-[40px] pr-[46px] 3xl:pr-[55px] w-[22%]">
                      <div className="bg-blue_600 lg:h-[182px] xl:h-[208px] h-[233px] 2xl:h-[234px] 3xl:h-[280px] w-[52%]"></div>
                      <Text className="font-semibold lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        Screening
                      </Text>
                    </Column>
                    <Column className="items-center justify-start lg:mt-[60px] xl:mt-[69px] mt-[78px] 3xl:mt-[93px] lg:pr-[47px] xl:pr-[54px] pr-[61px] 3xl:pr-[73px] w-[25%]">
                      <div className="bg-blue_600 lg:h-[121px] xl:h-[138px] h-[155px] 2xl:h-[156px] 3xl:h-[187px] w-[49%]"></div>
                      <Text className="font-semibold lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        Interviews
                      </Text>
                    </Column>
                    <Column className="h-[110px] 2xl:h-[111px] 3xl:h-[133px] lg:h-[86px] xl:h-[98px] items-start justify-start lg:mt-[121px] xl:mt-[138px] mt-[156px] 3xl:mt-[187px] lg:pr-[59px] xl:pr-[68px] pr-[77px] 3xl:pr-[92px] w-[110px] 3xl:w-[132px] lg:w-[85px] xl:w-[97px]">
                      <div className="bg-blue_600 lg:h-[60px] xl:h-[69px] h-[77px] 2xl:h-[78px] 3xl:h-[93px] ml-[0] w-[97%]"></div>
                      <Text className="font-semibold lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        Offer
                      </Text>
                    </Column>
                    <Column className="items-center justify-start lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] w-[6%]">
                      <div className="bg-blue_600 lg:h-[168px] xl:h-[192px] h-[215px] 2xl:h-[216px] 3xl:h-[259px] w-[100%]"></div>
                      <Text className="font-semibold lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                        Hire
                      </Text>
                    </Column>
                  </Row>
                </Stack>
              </Row>
              <Text className="font-normal lg:ml-[227px] xl:ml-[259px] ml-[292px] 3xl:ml-[350px] lg:mr-[233px] xl:mr-[266px] mr-[300px] 3xl:mr-[360px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                Stage
              </Text>
            </Column>
          </Row>
        </List>
      </Column>
    </>
  );
};

export default HomePagePage;
