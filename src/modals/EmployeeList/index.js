import React from "react";
import ModalProvider from "react-modal";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Text, Button, Stack, List } from "components";

const EmployeeListModal = (props) => {
  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/homepage");
  }
  function handleNavigate7() {
    navigate("/employeecapablitymapping");
  }

  return (
    <>
      <ModalProvider
        className="m-[auto] w-[100%]"
        overlayClassName="fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Row className="bg-white_A700 border border-bluegray_50 border-solid items-center lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]">
            <Img
              src="images/img_image2_3.png"
              className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
              alt="image2"
            />
            <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
              FrashTeam
            </Text>
          </Row>
          <Row className="bg-white_A700 border border-indigo_50 border-solid font-sourcesanspro justify-end lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] w-[98%]">
            <Text className="font-semibold mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-deep_purple_A200 w-[auto]">
              Employee Details
            </Text>
            <Button className="bg-white_A700 border border-gray_200 border-solid font-normal lg:ml-[406px] xl:ml-[464px] ml-[522px] 3xl:ml-[626px] mt-[2px] not-italic lg:py-[5px] xl:py-[6px] py-[7px] 3xl:py-[8px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-indigo_A200 w-[6%]">
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
                src="images/img_vector_14.png"
                className="absolute lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] inset-[0] justify-center m-[auto] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                alt="Vector"
              />
            </Stack>
            <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] w-[3%]">
              <div className="absolute bg-white_A700 border border-gray_201 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius2111 w-[100%]"></div>
              <Img
                src="images/img_vector_15.png"
                className="absolute lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] inset-[0] justify-center m-[auto] w-[50%]"
                alt="Vector"
              />
            </Stack>
            <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] w-[3%]">
              <div className="absolute bg-white_A700 border border-gray_201 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius2111 w-[100%]"></div>
              <Img
                src="images/img_vector_16.png"
                className="absolute bottom-[5%] lg:h-[25px] xl:h-[28px] h-[31px] 2xl:h-[32px] 3xl:h-[38px] inset-x-[0] mx-[auto] w-[76%]"
                alt="Vector"
              />
            </Stack>
            <Stack className="bg-red_600 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] my-[2px] px-[11px] 3xl:px-[13px] lg:px-[8px] xl:px-[9px] rounded-radius19 w-[3%]">
              <Img
                src="images/img_1_4.png"
                className="absolute bottom-[0] xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] inset-x-[0] mx-[auto] w-[33%]"
                alt="1"
              />
            </Stack>
            <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] mr-[1px] w-[3%]">
              <div className="absolute bg-amber_100 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius2111 w-[100%]"></div>
              <Img
                src="images/img_profilename_4.png"
                className="absolute lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] inset-[0] justify-center m-[auto] w-[29%]"
                alt="ProfileName"
              />
            </Stack>
          </Row>
          <Column className="bg-white_A700 font-sourcesanspro lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] lg:p-[17px] xl:p-[20px] p-[23px] 3xl:p-[27px] rounded-radius4 shadow-bs w-[97%]">
            <Row className="items-center justify-end ml-[auto] lg:mr-[31px] xl:mr-[36px] mr-[41px] 3xl:mr-[49px] w-[23%]">
              <Button className="border border-bluegray_900 border-solid font-normal not-italic lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 text-center w-[45%]">
                Sync All Employee
              </Button>
              <Button className="bg-bluegray_900 font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[47%]">
                Add New Employee
              </Button>
            </Row>
            <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid font-inter items-center lg:mb-[130px] xl:mb-[149px] mb-[168px] 3xl:mb-[201px] ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mr-[4px] xl:mr-[5px] mr-[6px] 3xl:mr-[7px] lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] pb-[103px] 3xl:pb-[123px] lg:pb-[80px] xl:pb-[91px] w-[99%]">
              <List
                className="gap-[0] min-h-[auto] w-[100%]"
                orientation="vertical"
              >
                <Row className="items-center justify-evenly my-[0] w-[100%]">
                  <Img
                    src="images/img_title.png"
                    className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] w-[6%]"
                    alt="Title"
                  />
                  <Column className="bg-gray_50 border-bw05 border-gray_202 border-solid lg:p-[10px] xl:p-[11px] p-[13px] 3xl:p-[15px] w-[16%]">
                    <Text className="font-bold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[auto]">
                      Name
                    </Text>
                  </Column>
                  <Button className="bg-gray_50 border-bw05 border-gray_202 border-solid font-bold lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-center tracking-ls1 w-[16%]">
                    Surname
                  </Button>
                  <Text className="bg-gray_50 border-bw05 border-gray_202 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                    Designation
                  </Text>
                  <Text className="bg-gray_50 border-bw05 border-gray_202 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                    official_email
                  </Text>
                  <Text className="bg-gray_50 border-bw05 border-gray_202 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                    Joining Date
                  </Text>
                  <Text className="bg-gray_50 border-bw05 border-gray_202 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                    Gender
                  </Text>
                </Row>
                <Row className="items-center justify-evenly my-[0] w-[100%]">
                  <Img
                    src="images/img_content.png"
                    className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] w-[6%]"
                    alt="Content"
                  />
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[16%]">
                    <Text className="font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[auto]">
                      Design
                    </Text>
                  </Column>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                    2400
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                    2022-02-21
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                    2022-02-21
                  </Text>
                </Row>
                <Row className="items-center justify-evenly my-[0] w-[100%]">
                  <Img
                    src="images/img_content_1.png"
                    className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] w-[6%]"
                    alt="Content"
                  />
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[16%]">
                    <Text className="font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[auto]">
                      Prototype
                    </Text>
                  </Column>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                    Pulvinar eu facilisis turpis imperdiet sed.
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                    Pulvinar eu facilisis turpis imperdiet sed.
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                    1000
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                    2022-06-29
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                    2022-06-29
                  </Text>
                </Row>
                <Row className="items-center justify-evenly my-[0] w-[100%]">
                  <Img
                    src="images/img_content_2.png"
                    className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] w-[6%]"
                    alt="Content"
                  />
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[16%]">
                    <Text className="font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[auto]">
                      Inspect
                    </Text>
                  </Column>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                    consectetur adipiscing elit,
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                    consectetur adipiscing elit,
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                    0900
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                    2022-04-23
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                    2022-04-23
                  </Text>
                </Row>
                <Row className="items-center justify-evenly my-[0] w-[100%]">
                  <Img
                    src="images/img_content_3.png"
                    className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] w-[6%]"
                    alt="Content"
                  />
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[16%]">
                    <Text className="font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[auto]">
                      Content
                    </Text>
                  </Column>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                    sed do eiusmod tempor incididunt
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                    sed do eiusmod tempor incididunt
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                    2100
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                    2022-02-22
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                    2022-02-22
                  </Text>
                </Row>
                <Row className="items-center justify-evenly my-[0] w-[100%]">
                  <Img
                    src="images/img_content_4.png"
                    className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] w-[6%]"
                    alt="Content"
                  />
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[16%]">
                    <Text className="font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[auto]">
                      Effects
                    </Text>
                  </Column>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                    quis nostrud exercitation ullamco laboris
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                    quis nostrud exercitation ullamco laboris
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                    0300
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                    2022-02-04
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                    2022-02-04
                  </Text>
                </Row>
                <Row className="items-center justify-evenly my-[0] w-[100%]">
                  <Img
                    src="images/img_content_5.png"
                    className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] w-[6%]"
                    alt="Content"
                  />
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[16%]">
                    <Text className="font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[auto]">
                      Export
                    </Text>
                  </Column>
                  <Button className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-center tracking-ls1 w-[16%]">
                    sunt in culpa qui officia
                  </Button>
                  <Button className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-center tracking-ls1 w-[16%]">
                    sunt in culpa qui officia
                  </Button>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                    1100
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                    2022-03-22
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                    2022-03-22
                  </Text>
                </Row>
                <Row className="items-center justify-evenly my-[0] w-[100%]">
                  <Img
                    src="images/img_content_6.png"
                    className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] w-[6%]"
                    alt="Content"
                  />
                  <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[16%]">
                    <Text className="font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[auto]">
                      Auto layout
                    </Text>
                  </Column>
                  <Button className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-center tracking-ls1 w-[16%]">
                    Ut enim ad minim veniam
                  </Button>
                  <Button className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-center tracking-ls1 w-[16%]">
                    Ut enim ad minim veniam
                  </Button>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                    1800
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                    2022-02-13
                  </Text>
                  <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                    2022-02-13
                  </Text>
                </Row>
              </List>
              <Row className="items-center justify-evenly w-[100%]">
                <Img
                  src="images/img_content_7.png"
                  className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] w-[6%]"
                  alt="Content"
                />
                <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                  Text
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                  Excepteur sint occaecat cupidatat non
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                  Excepteur sint occaecat cupidatat non
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                  0400
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                  2022-01-16
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                  2022-01-16
                </Text>
              </Row>
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default EmployeeListModal;
