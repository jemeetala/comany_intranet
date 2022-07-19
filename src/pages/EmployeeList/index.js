import React from "react";

import { useNavigate } from "react-router-dom";
import { getEmployees } from "service/api";
import { Column, Row, Img, Text, Button, Stack, List } from "components";

const EmployeeListPage = () => {
  const [apiData, setapiData] = React.useState();
  React.useEffect(() => {
    callApi();
  }, []);
  const navigate = useNavigate();

  function callApi() {
    const req = {};
    getEmployees(req)
      .then((res) => {
        setapiData(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleNavigate3() {
    navigate("/homepage");
  }
  function handleNavigate4() {
    navigate("/employeecapablitymapping");
  }
  function handleNavigate7() {
    navigate("/homepage");
  }
  function handleNavigate13() {
    navigate("/employeecapablitymapping");
  }

  return (
    <>
      <Column className="bg-gray_100 font-inter items-center mx-[auto] lg:pb-[17px] xl:pb-[20px] pb-[23px] 3xl:pb-[27px] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 border border-indigo_50 border-solid justify-end lg:p-[22px] xl:p-[25px] p-[29px] 3xl:p-[34px] w-[100%]">
            <Img
              src="images/img_image2_3.png"
              className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] mt-[0] lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
              alt="image2"
            />
            <Text className="font-segoeui font-semibold mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] mt-[4px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
              FrashTeam
            </Text>
            <Button
              className="common-pointer bg-white_A700 border border-gray_200 border-solid font-normal font-sourcesanspro lg:ml-[455px] xl:ml-[521px] ml-[586px] 3xl:ml-[703px] mt-[3px] not-italic lg:py-[4px] xl:py-[5px] py-[6px] 3xl:py-[7px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-indigo_A200 w-[6%]"
              onClick={handleNavigate3}
            >
              DashBoard
            </Button>
            <Button className="bg-white_A700 border border-gray_200 border-solid font-normal font-sourcesanspro lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] my-[1px] not-italic lg:py-[4px] xl:py-[5px] py-[6px] 3xl:py-[7px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-indigo_A200 w-[7%]">
              Employee List
            </Button>
            <Button
              className="common-pointer bg-white_A700 border border-gray_200 border-solid font-normal font-sourcesanspro lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:py-[3px] xl:py-[4px] py-[5px] 3xl:py-[6px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-indigo_A200 w-[6%]"
              onClick={handleNavigate4}
            >
              Capabilities
            </Button>
            <Stack className="lg:h-[29px] xl:h-[33px] h-[37px] 2xl:h-[38px] 3xl:h-[45px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] w-[3%]">
              <div className="absolute bg-bluegray_900 lg:h-[29px] xl:h-[33px] h-[37px] 2xl:h-[38px] 3xl:h-[45px] rounded-radius2111 w-[100%]"></div>
              <Img
                src="images/img_vector_14.png"
                className="absolute lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] inset-[0] justify-center m-[auto] w-[38%]"
                alt="Vector"
              />
            </Stack>
            <Stack className="lg:h-[29px] xl:h-[33px] h-[37px] 2xl:h-[38px] 3xl:h-[45px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] mt-[1px] w-[3%]">
              <div className="absolute bg-white_A700 border border-gray_201 border-solid lg:h-[29px] xl:h-[33px] h-[37px] 2xl:h-[38px] 3xl:h-[45px] rounded-radius2111 w-[100%]"></div>
              <Img
                src="images/img_vector_15.png"
                className="absolute lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] inset-[0] justify-center m-[auto] w-[50%]"
                alt="Vector"
              />
            </Stack>
            <Stack className="lg:h-[29px] xl:h-[33px] h-[37px] 2xl:h-[38px] 3xl:h-[45px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] mt-[1px] w-[3%]">
              <div className="absolute bg-white_A700 border border-gray_201 border-solid lg:h-[29px] xl:h-[33px] h-[37px] 2xl:h-[38px] 3xl:h-[45px] rounded-radius2111 w-[100%]"></div>
              <Img
                src="images/img_vector_16.png"
                className="absolute bottom-[5%] lg:h-[23px] xl:h-[26px] h-[29px] 2xl:h-[30px] 3xl:h-[35px] inset-x-[0] mx-[auto] w-[76%]"
                alt="Vector"
              />
            </Stack>
            <Stack className="lg:h-[26px] xl:h-[30px] h-[33px] 2xl:h-[34px] 3xl:h-[40px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] my-[2px] w-[3%]">
              <div className="absolute bg-red_600 lg:h-[26px] xl:h-[30px] h-[33px] 2xl:h-[34px] 3xl:h-[40px] rounded-radius19 w-[100%]"></div>
              <Img
                src="images/img_1_4.png"
                className="absolute bottom-[30%] h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-x-[0] mx-[auto] w-[14%]"
                alt="1"
              />
            </Stack>
            <Stack className="lg:h-[29px] xl:h-[33px] h-[37px] 2xl:h-[38px] 3xl:h-[45px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] mr-[1px] mt-[1px] w-[3%]">
              <div className="absolute bg-amber_100 lg:h-[29px] xl:h-[33px] h-[37px] 2xl:h-[38px] 3xl:h-[45px] rounded-radius2111 w-[100%]"></div>
              <Img
                src="images/img_profilename_4.png"
                className="absolute lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] inset-[0] justify-center m-[auto] w-[29%]"
                alt="ProfileName"
              />
            </Stack>
          </Row>
        </header>
        <Column className="bg-white_A700 items-center lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] lg:p-[20px] xl:p-[23px] p-[26px] 3xl:p-[31px] rounded-radius4 shadow-bs w-[97%]">
          <Row className="items-center w-[94%]">
            <Text className="font-inder font-normal not-italic lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
              Employee list
            </Text>
            <Button className="border border-bluegray_900 border-solid font-normal font-sourcesanspro lg:ml-[605px] xl:ml-[692px] ml-[779px] 3xl:ml-[935px] not-italic lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 text-center w-[11%]">
              Sync All Employee
            </Button>
            <Button className="bg-bluegray_900 font-normal font-sourcesanspro lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[11%]">
              Add New Employee
            </Button>
          </Row>
          <Column className="items-center lg:mb-[154px] xl:mb-[176px] mb-[198px] 3xl:mb-[237px] lg:mt-[35px] xl:mt-[40px] mt-[46px] 3xl:mt-[55px] w-[99%]">
            <Row className="items-center justify-evenly w-[100%]">
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
            <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-center lg:pb-[148px] xl:pb-[169px] pb-[191px] 3xl:pb-[229px] w-[100%]">
              <List
                className="gap-[0] min-h-[auto] w-[100%]"
                orientation="vertical"
              >
                {apiData?.map((apiDataResponseEle) => {
                  return (
                    <Row className="items-center justify-evenly my-[0] w-[100%]">
                      <Img
                        src="images/img_content.png"
                        className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] w-[6%]"
                        alt="Content"
                      />
                      <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[16%]">
                        <Text className="font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[auto]">
                          {apiDataResponseEle?.first_name}
                        </Text>
                      </Column>
                      <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                        {apiDataResponseEle?.last_name}
                      </Text>
                      <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                        {apiDataResponseEle?.designation}
                      </Text>
                      <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                        {apiDataResponseEle?.official_email}
                      </Text>
                      <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                        {apiDataResponseEle?.joining_date}
                      </Text>
                      <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                        {apiDataResponseEle?.gender}
                      </Text>
                    </Row>
                  );
                })}
              </List>
              <Row className="items-center justify-evenly w-[100%]">
                <Img
                  src="images/img_content_6.png"
                  className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] w-[6%]"
                  alt="Content"
                />
                <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[16%]">
                  Auto layout
                </Text>
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
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default EmployeeListPage;
