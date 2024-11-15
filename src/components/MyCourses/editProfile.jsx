import React from "react";
import { HeaderDashbord } from "../common/HeaderDashbord/HeaderDashbord";
import { Form, Field, Formik } from "formik";
import { MainDashbord } from "../common/MainDashbord/mainDashbord";

import profileHeader from "../../assets/profileHeader.svg";
import { editApi } from "../../core/api/api";

const EditProfile = () => {
  const editHandler = async (values) => {
    console.log(values);
    const path = `/SharePanel/UpdateProfileIn `;
    const body = values;

    const response = await editApi({ path, body });
    console.log(response);
    // if (response?.data?.success) {
    //   localStorage.setItem("token", response?.data?.token);
    //   toast.success("شما با موفقیت وارد شدید.");
    //   navigate("/");
    // } else {
    //   alert("koooft");
    // }
  };
  return (
    <div className="w-[45rem] lg:w-[70rem] my-[1rem] flex justify-center gap-3 border-[1px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl">
      <div className="flex flex-col">
        <div className="w-[17rem] h-[18rem] bg-[#FBF6F6] dark:bg-gray-700 rounded-xl shadow-2xl border-[1px] my-[1.5rem] mr-[0.5rem]">
          <div className="text-nowrap text-[#22445D] dark:text-white text-[8px] text-lg text-center bg-[#A4F6DE] dark:bg-gray-900 h-[3.7rem] rounded-xl border-[1px]">
            <h1 className="mt-[0.5rem]">عکس پروفایل</h1>
          </div>

          <img
            className="h-[7.5rem] mx-[4.5rem] my-[1.5rem]"
            src={profileHeader}
            alt=""
          />

          <button className="rounded-full bg-[#12926C] dark:bg-gray-800 mx-[4rem] w-[8rem] h-[2.5rem] text-nowrap text-[#fff]">
            ویرایش عکس
          </button>
        </div>

        <div className="w-[17rem] h-[18rem] bg-[#FBF6F6] dark:bg-gray-700 rounded-xl shadow-2xl border-[1px] mr-[0.5rem]">
          <div className="text-nowrap text-[#22445D] dark:text-white text-[8px] text-lg text-center bg-[#A4F6DE] dark:bg-gray-900 h-[3.7rem] rounded-xl border-[1px]">
            <h1 className="mt-[0.5rem]">امنیت</h1>
          </div>
        </div>
      </div>

      <div className="w-[51rem] h-[54rem] bg-[#FBF6F6] dark:bg-gray-800 rounded-xl shadow-2xl border-[1px] my-[1.5rem] ml-[1rem]">
        <div className="text-nowrap text-[#22445D] dark:text-white text-[8px] text-lg text-center bg-[#A4F6DE] dark:bg-gray-900 h-[3.7rem] rounded-xl border-[1px]">
          <h1 className="mt-[0.5rem]">مشخصات کاربر</h1>
        </div>

        <div>
          <Formik
            onSubmit={editHandler}
            initialValues={{
              LName: "",
              FName: "",
              UserAbout: "",
              LinkdinProfile: "",
              TelegramLink: "",
              ReceiveMessageEvent: true,
              HomeAdderess: "",
              NationalCode: "",
              Gender: true,
              BirthDay: Date,
              Latitude: "",
              rememberMe: true,
            }}
          >
            <Form>
              <div className="grid gap-2 lg:gap-8 mt-8 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                  <Field
                    name="LName"
                    type="text"
                    placeholder="نام"
                    className=" h-[3.8rem] px-8 text-[#158B68] border-[2px] border-[#158B68] bg-[#ffff] dark:bg-gray-700 rounded-lg"
                  ></Field>

                  <Field
                    name="FName"
                    type="text"
                    placeholder="نام خانوادگی"
                    className=" h-[3.8rem] px-8 text-[#158B68] border-[2px] border-[#158B68] bg-[#ffff] dark:bg-gray-700 rounded-lg"
                  ></Field>
                </div>

                <Field
                  name="UserAbout"
                  type="text"
                  placeholder="شماره همراه"
                  className="w-full h-[3.8rem] px-8 text-[#158B68] border-[2px] border-[#158B68] bg-[#ffff] dark:bg-gray-700 rounded-lg"
                ></Field>

                <div className="grid grid-cols-2 gap-2">
                  <Field
                    name="LinkdinProfile"
                    type="text"
                    placeholder="شماره ملی"
                    className=" h-[3.8rem] px-8 text-[#158B68] border-[2px] border-[#158B68] bg-[#ffff] dark:bg-gray-700 rounded-lg"
                  ></Field>

                  <Field
                    name="TelegramLink"
                    type="text"
                    placeholder="تاریخ تولد"
                    className=" h-[3.8rem] px-8 text-[#158B68] border-[2px] border-[#158B68] bg-[#ffff] dark:bg-gray-700 rounded-lg"
                  ></Field>
                </div>

                <Field
                  name="ReceiveMessageEvent"
                  type="text"
                  placeholder="درباره من"
                  className="w-full h-[3.8rem] px-8 text-[#158B68] border-[2px] border-[#158B68] bg-[#ffff] dark:bg-gray-700 rounded-lg"
                ></Field>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                  <Field
                    name="HomeAdderess"
                    type="text"
                    placeholder="ایمیل"
                    className="w-[100%] lg:w-[153%] h-[3.8rem] px-8 text-[#158B68] border-[2px] border-[#158B68] bg-[#ffff] dark:bg-gray-700 rounded-lg"
                  ></Field>

                  <select
                    name="NationalCode"
                    id="pet-select"
                    className="w-[100%] lg:w-[46%] h-[3.8rem] mr-0 lg:mr-52 px-8 text-[#158B68] border-[2px] border-[#158B68] bg-[#ffff] dark:bg-gray-700 rounded-lg"
                  >
                    <option value="مرد">مرد</option>
                    <option value="زن">زن</option>
                  </select>
                </div>

                <Field
                  name="Gender"
                  type="text"
                  placeholder="درباره من"
                  className="w-full h-[3.8rem] px-8 text-[#158B68] border-[2px] border-[#158B68] bg-[#ffff] dark:bg-gray-700 rounded-lg"
                ></Field>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                  <Field
                    name="BirthDay"
                    type="text"
                    placeholder="لینک تلگرام"
                    className=" h-[3.8rem] px-8 text-[#158B68] border-[2px] border-[#158B68] bg-[#ffff] dark:bg-gray-700 rounded-lg"
                  ></Field>

                  <Field
                    name="Latitude"
                    type="text"
                    placeholder="پروفایل لینکدین"
                    className=" h-[3.8rem] px-8 text-[#158B68] border-[2px] border-[#158B68] bg-[#ffff] dark:bg-gray-700 rounded-lg"
                  ></Field>
                </div>

                <div className=" text-nowrap text-center border-[2px] rounded-lg">
                  <button
                    type="submit"
                    className="w-full h-[3.8rem] text-lg text-[#fff] bg-[#158B68] dark:bg-gray-800"
                  >
                    ثبت تغییرات
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export { EditProfile };
