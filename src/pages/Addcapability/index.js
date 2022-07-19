import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Text, Button, Stack, Line, Input } from "components";

const AddcapabilityPage = () => {
  const navigate = useNavigate();

  function handleNavigate8() {
    navigate("/employeecapablitymapping");
  }
  function handleNavigate9() {
    navigate("/employeelist");
  }
  function handleNavigate10() {
    navigate("/homepage");
  }

  return (
    <>
      <Column className="bg-gray_100 font-segoeui items-center mx-[auto] lg:pb-[12px] xl:pb-[14px] pb-[16px] 3xl:pb-[19px] w-[100%]">
        <Row className="bg-white_A700 border border-bluegray_50 border-solid items-center lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]">
          <Img
            src="images/img_image2.png"
            className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
            alt="image2"
          />
          <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
            FrashTeam
          </Text>
        </Row>
        <Row className="bg-white_A700 border border-indigo_50 border-solid font-sourcesanspro justify-end mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] w-[98%]">
          <Text className="font-semibold mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-deep_purple_A200 w-[auto]">
            Employee Capabilities
          </Text>
          <Button className="bg-white_A700 border border-gray_200 border-solid font-normal lg:ml-[373px] xl:ml-[427px] ml-[480px] 3xl:ml-[576px] mt-[2px] not-italic lg:py-[5px] xl:py-[6px] py-[7px] 3xl:py-[8px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-indigo_A200 w-[6%]">
            DashBoard
          </Button>
          <Button className="bg-white_A700 border border-gray_200 border-solid font-normal mb-[2px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] not-italic lg:py-[5px] xl:py-[6px] py-[7px] 3xl:py-[8px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-indigo_A200 w-[7%]">
            Employee List
          </Button>
          <Button className="bg-white_A700 border border-gray_200 border-solid font-normal lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] mt-[4px] not-italic lg:py-[4px] xl:py-[5px] py-[6px] 3xl:py-[7px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-indigo_A200 w-[6%]">
            Capabilities
          </Button>
          <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[3%]">
            <div className="absolute bg-bluegray_900 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius2111 w-[100%]"></div>
            <Img
              src="images/img_vector_2.png"
              className="absolute lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] inset-[0] justify-center m-[auto] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
              alt="Vector"
            />
          </Stack>
          <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] w-[3%]">
            <div className="absolute bg-white_A700 border border-gray_201 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius2111 w-[100%]"></div>
            <Img
              src="images/img_vector_3.png"
              className="absolute lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] inset-[0] justify-center m-[auto] w-[50%]"
              alt="Vector"
            />
          </Stack>
          <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] w-[3%]">
            <div className="absolute bg-white_A700 border border-gray_201 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius2111 w-[100%]"></div>
            <Img
              src="images/img_vector_4.png"
              className="absolute bottom-[5%] lg:h-[25px] xl:h-[28px] h-[31px] 2xl:h-[32px] 3xl:h-[38px] inset-x-[0] mx-[auto] w-[76%]"
              alt="Vector"
            />
          </Stack>
          <Stack className="bg-red_600 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] my-[2px] px-[11px] 3xl:px-[13px] lg:px-[8px] xl:px-[9px] rounded-radius19 w-[3%]">
            <Img
              src="images/img_1.png"
              className="absolute bottom-[0] xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] inset-x-[0] mx-[auto] w-[33%]"
              alt="1"
            />
          </Stack>
          <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] mr-[1px] w-[3%]">
            <div className="absolute bg-amber_100 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius2111 w-[100%]"></div>
            <Img
              src="images/img_profilename.png"
              className="absolute lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] inset-[0] justify-center m-[auto] w-[29%]"
              alt="ProfileName"
            />
          </Stack>
        </Row>
        <Column className="bg-white_A700 font-actor items-center lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] rounded-radius4 shadow-bs w-[95%]">
          <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
            Add Capability
          </Text>
          <Line className="bg-gray_300 h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] w-[1104px]" />
          <Row className="items-center justify-center mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[22%]">
            <Text className="font-normal not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
              Name:
            </Text>
            <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
              Employee Name
            </Text>
          </Row>
          <Row className="items-center 3xl:mt-[100px] lg:mt-[65px] xl:mt-[74px] mt-[84px] w-[87%]">
            <Column className="lg:pr-[186px] xl:pr-[213px] pr-[240px] 3xl:pr-[288px] w-[60%]">
              <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
                Technical Knowledge of Flutter
              </Text>
              <Input
                className="bg-transparent border-0 font-normal not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-gray_301 text-gray_301 w-[100%]"
                wrapClassName="3xl:mt-[9px] border border-gray_400 border-solid lg:mt-[6px] mt-[8px] rounded-radius4 w-[100%] xl:mt-[7px]"
                name="Group216"
                placeholder="Technical Knowledge of Flutter"
              ></Input>
              <Text className="font-normal lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
                Video Scripting
              </Text>
              <Input
                className="bg-transparent border-0 font-normal not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-gray_301 text-gray_301 w-[100%]"
                wrapClassName="3xl:mt-[9px] border border-gray_400 border-solid lg:mt-[6px] mt-[8px] rounded-radius4 w-[100%] xl:mt-[7px]"
                name="Group216"
                placeholder="Video Scripting"
              ></Input>
              <Text className="font-normal lg:mt-[31px] xl:mt-[36px] mt-[41px] 3xl:mt-[49px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
                Live Webinar
              </Text>
              <Input
                className="bg-transparent border-0 font-normal not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-gray_301 text-gray_301 w-[100%]"
                wrapClassName="3xl:mt-[9px] border border-gray_400 border-solid lg:mt-[6px] mt-[8px] rounded-radius4 w-[100%] xl:mt-[7px]"
                name="Group216"
                placeholder="Live Webinar"
              ></Input>
            </Column>
            <Column className="w-[40%]">
              <Text className="font-normal ml-[2px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
                Technical Knowledge of React
              </Text>
              <Input
                className="bg-transparent border-0 font-normal not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-gray_301 text-gray_301 w-[100%]"
                wrapClassName="3xl:mt-[9px] border border-gray_400 border-solid lg:mt-[6px] ml-[2px] mt-[8px] rounded-radius4 w-[99%] xl:mt-[7px]"
                name="Group216"
                placeholder="Technical Knowledge of React"
              ></Input>
              <Text className="font-normal lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
                Blog Writing
              </Text>
              <Input
                className="bg-transparent border-0 font-normal not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-gray_301 text-gray_301 w-[100%]"
                wrapClassName="3xl:mt-[9px] border border-gray_400 border-solid lg:mt-[6px] mt-[8px] rounded-radius4 w-[99%] xl:mt-[7px]"
                name="Group216"
                placeholder="Blog Writing"
              ></Input>
              <Text className="font-normal ml-[3px] lg:mt-[31px] xl:mt-[36px] mt-[41px] 3xl:mt-[49px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
                Podcast
              </Text>
              <Input
                className="bg-transparent border-0 font-normal not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-gray_301 text-gray_301 w-[100%]"
                wrapClassName="3xl:mt-[9px] border border-gray_400 border-solid lg:mt-[6px] ml-[3px] mt-[8px] rounded-radius4 w-[99%] xl:mt-[7px]"
                name="Group216"
                placeholder="Podcast"
              ></Input>
            </Column>
          </Row>
          <Line className="bg-gray_300 h-[1px] lg:mt-[57px] xl:mt-[65px] mt-[74px] 3xl:mt-[88px] w-[37%]" />
          <Row className="font-sourcesanspro items-center justify-center lg:mb-[165px] xl:mb-[189px] mb-[213px] 3xl:mb-[255px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[12%]">
            <Button className="border border-bluegray_900 border-solid font-normal not-italic lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 text-center w-[47%]">
              Cancel
            </Button>
            <Button className="bg-bluegray_900 font-normal lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] not-italic lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[39%]">
              Save
            </Button>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default AddcapabilityPage;
