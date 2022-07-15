import React from "react";

import { Column, Row, Image, Text, Button, Input, Line } from "components";

const AddcapabilityPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_100 font-segoeui items-center justify-start mx-[auto] lg:pb-[54px] xl:pb-[62px] pb-[70px] 3xl:pb-[84px] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 border border-bluegray_50 border-solid items-center justify-start lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] w-[100%]">
            <Image
              src={"images/img_image2.png"}
              className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[26px] xl:ml-[30px] ml-[34px] 3xl:ml-[40px] xl:my-[3px] lg:my-[3px] my-[4px] object-contain lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
              alt="image2"
            />
            <Text className="cursor-pointer hover:font-semibold font-semibold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
              FrashTeam
            </Text>
            <Image
              src={"images/img_vector_2.png"}
              className="lg:h-[21px] xl:h-[24px] h-[26px] 2xl:h-[27px] 3xl:h-[32px] xl:ml-[1004px] ml-[1129px] 3xl:ml-[1355px] lg:ml-[878px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] object-contain w-[2%]"
              alt="Vector"
            />
            <Button className="bg-amber_100 flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">
              <Image
                src={"images/img_group99.png"}
                className="w-[72%] flex items-center justify-center"
                alt="Group99"
              />
            </Button>
          </Row>
        </header>
        <Row className="bg-gray_101 border border-gray_300 border-solid items-center justify-end lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] w-[100%]">
          <Image
            src={"images/img_vector_3.png"}
            className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:mb-[10px] xl:mb-[11px] mb-[13px] 3xl:mb-[15px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
            alt="Vector"
          />
          <Text className="font-segoeui font-semibold lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
            Dashboard
          </Text>
          <Image
            src={"images/img_vector_4.png"}
            className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] xl:mb-[10px] mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:ml-[28px] xl:ml-[32px] ml-[37px] 3xl:ml-[44px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] object-contain w-[1%]"
            alt="Vector"
          />
          <Text className="font-segoeui font-semibold lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
            Employee List
          </Text>
          <Image
            src={"images/img_vector_5.png"}
            className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] xl:mb-[10px] mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:ml-[29px] xl:ml-[33px] ml-[38px] 3xl:ml-[45px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] object-contain w-[1%]"
            alt="Vector"
          />
          <Text className="font-segoeui font-semibold lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
            Employee Capablity
          </Text>
          <Input
            value={inputvalue}
            onChange={(e) => setInputvalue(e?.target?.value)}
            className="bg-transparent border-0 font-normal font-sourcesanspro p-[0] px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_500 text-bluegray_500 w-[100%]"
            WrapClassName="3xl:ml-[489px] 3xl:pl-[12px] 3xl:pr-[26px] 3xl:py-[12px] border border-gray_400 border-solid flex lg:ml-[317px] lg:pl-[7px] lg:pr-[17px] lg:py-[7px] ml-[408px] pl-[10px] pr-[22px] py-[10px] rounded-radius4 w-[25%] xl:ml-[362px] xl:pl-[8px] xl:pr-[19px] xl:py-[8px]"
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
                  src={"images/close.svg"}
                  className="cursor-pointer w-[20.01px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px] my-[auto]"
                  alt="Vector"
                />
              ) : (
                ""
              )
            }
          ></Input>
          <Button className="bg-bluegray_900 font-normal font-sourcesanspro mb-[1px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mr-[32px] xl:mr-[37px] mr-[42px] 3xl:mr-[50px] not-italic lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[5%]">
            Search
          </Button>
        </Row>
        <Column className="bg-white_A700 justify-start lg:mt-[29px] xl:mt-[33px] mt-[38px] 3xl:mt-[45px] pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius4 shadow-bs w-[35%]">
          <Text className="font-actor font-normal lg:mr-[307px] xl:mr-[351px] mr-[395px] 3xl:mr-[474px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
            Add Capability
          </Text>
          <Line className="bg-gray_300 h-[1px] 3xl:h-[2px] 2xl:h-[2px] ml-[1px] lg:mr-[10px] xl:mr-[12px] mr-[14px] 3xl:mr-[16px] lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] w-[484px]" />
          <Text className="font-actor font-normal lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] lg:mr-[346px] xl:mr-[395px] mr-[445px] 3xl:mr-[534px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
            Name
          </Text>
          <Input
            className="bg-transparent border-0 font-normal font-sourcesanspro not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-black_900 text-black_900 w-[100%]"
            WrapClassName="3xl:ml-[15px] 3xl:mr-[40px] 3xl:mt-[9px] border border-gray_400 border-solid lg:ml-[10px] lg:mr-[26px] lg:mt-[6px] ml-[13px] mr-[34px] mt-[8px] rounded-radius4 w-[90%] xl:ml-[11px] xl:mr-[30px] xl:mt-[7px]"
            name="Group216"
            placeholder="Cameron"
          ></Input>
          <Text className="font-actor font-normal lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] lg:mr-[214px] xl:mr-[245px] mr-[276px] 3xl:mr-[331px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
            Technical Knowledge of Flutter
          </Text>
          <Input
            className="bg-transparent border-0 font-normal font-sourcesanspro not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-black_900 text-black_900 w-[100%]"
            WrapClassName="3xl:ml-[15px] 3xl:mr-[40px] 3xl:mt-[9px] border border-gray_400 border-solid lg:ml-[10px] lg:mr-[26px] lg:mt-[6px] ml-[13px] mr-[34px] mt-[8px] rounded-radius4 w-[90%] xl:ml-[11px] xl:mr-[30px] xl:mt-[7px]"
            name="Group216"
            placeholder="Williamson"
          ></Input>
          <Text className="font-actor font-normal lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] lg:mr-[220px] xl:mr-[251px] mr-[283px] 3xl:mr-[339px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
            Technical Knowledge of React
          </Text>
          <Input
            className="bg-transparent border-0 font-normal font-sourcesanspro not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-black_900 text-black_900 w-[100%]"
            WrapClassName="3xl:ml-[15px] 3xl:mr-[40px] 3xl:mt-[9px] border border-gray_400 border-solid lg:ml-[10px] lg:mr-[26px] lg:mt-[6px] ml-[13px] mr-[34px] mt-[8px] rounded-radius4 w-[90%] xl:ml-[11px] xl:mr-[30px] xl:mt-[7px]"
            name="Group216"
            placeholder="Williamson"
          ></Input>
          <Text className="font-actor font-normal lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] lg:mr-[297px] xl:mr-[340px] mr-[383px] 3xl:mr-[459px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
            Video Scripting
          </Text>
          <Input
            className="bg-transparent border-0 font-normal font-sourcesanspro not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-black_900 text-black_900 w-[100%]"
            WrapClassName="3xl:ml-[15px] 3xl:mr-[40px] 3xl:mt-[9px] border border-gray_400 border-solid lg:ml-[10px] lg:mr-[26px] lg:mt-[6px] ml-[13px] mr-[34px] mt-[8px] rounded-radius4 w-[90%] xl:ml-[11px] xl:mr-[30px] xl:mt-[7px]"
            name="Group216"
            placeholder="Williamson"
          ></Input>
          <Text className="font-actor font-normal lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] lg:mr-[311px] xl:mr-[356px] mr-[401px] 3xl:mr-[481px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
            Blog Writing
          </Text>
          <Input
            className="bg-transparent border-0 font-normal font-sourcesanspro not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-black_900 text-black_900 w-[100%]"
            WrapClassName="3xl:ml-[15px] 3xl:mr-[40px] 3xl:mt-[9px] border border-gray_400 border-solid lg:ml-[10px] lg:mr-[26px] lg:mt-[6px] ml-[13px] mr-[34px] mt-[8px] rounded-radius4 w-[90%] xl:ml-[11px] xl:mr-[30px] xl:mt-[7px]"
            name="Group216"
            placeholder="cameron@gmail.com"
          ></Input>
          <Text className="font-actor font-normal lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] lg:mr-[308px] xl:mr-[353px] mr-[397px] 3xl:mr-[476px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
            Live Webinar
          </Text>
          <Input
            className="bg-transparent border-0 font-normal font-sourcesanspro not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-black_900 text-black_900 w-[100%]"
            WrapClassName="3xl:ml-[15px] 3xl:mr-[40px] 3xl:mt-[9px] border border-gray_400 border-solid lg:ml-[10px] lg:mr-[26px] lg:mt-[6px] ml-[13px] mr-[34px] mt-[8px] rounded-radius4 w-[90%] xl:ml-[11px] xl:mr-[30px] xl:mt-[7px]"
            name="Group216"
            placeholder="1234567890"
          ></Input>
          <Text className="font-actor font-normal lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] lg:mr-[336px] xl:mr-[384px] mr-[432px] 3xl:mr-[518px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
            Podcast
          </Text>
          <Input
            className="bg-transparent border-0 font-normal font-sourcesanspro not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-black_900 text-black_900 w-[100%]"
            WrapClassName="3xl:ml-[15px] 3xl:mr-[40px] 3xl:mt-[9px] border border-gray_400 border-solid lg:ml-[10px] lg:mr-[26px] lg:mt-[6px] ml-[13px] mr-[34px] mt-[8px] rounded-radius4 w-[90%] xl:ml-[11px] xl:mr-[30px] xl:mt-[7px]"
            name="Group216"
            placeholder="1234567890"
          ></Input>
          <Line className="bg-gray_300 h-[1px] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] w-[97%]" />
          <Row className="font-sourcesanspro items-center justify-end mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] ml-[auto] lg:mr-[35px] xl:mr-[40px] mr-[45px] 3xl:mr-[54px] lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] w-[31%]">
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
