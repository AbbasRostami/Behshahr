import React from "react";
import { HeaderDashbord } from "../common/HeaderDashbord/HeaderDashbord";
import { Form, Field, Formik } from "formik";
import { MainDashbord } from "../common/MainDashbord/mainDashbord";

import profileHeader from "../../assets/profileHeader.svg";

const EditProfile = () => {
  return (
    <>
      <HeaderDashbord />

      <div className="flex mx-[1rem] rtl gap-11">

        <MainDashbord />

        <div className="w-[71rem] h-[56.5rem] my-[1rem] gap-2 flex justify-center border-[1px] bg-[#ffff] rounded-2xl shadow-2xl mr-[10rem]">
          <div className="flex flex-col">
            <div className="w-[17rem] h-[18rem] bg-[#FBF6F6] rounded-xl shadow-2xl border-[1px] my-[1.5rem] mr-[0.5rem]">
              <div className="text-nowrap text-[#22445D] text-[8px] text-lg text-center bg-[#A4F6DE] h-[3.7rem] rounded-xl border-[1px]">
                <h1 className="mt-[0.5rem]">عکس پروفایل</h1>
              </div>

              <img
                className="h-[7.5rem] mx-[4.5rem] my-[1.5rem]"
                src={profileHeader}
                alt=""
              />

              <button className="rounded-full bg-[#12926C] mx-[4rem] w-[8rem] h-[2.5rem] text-nowrap text-[#fff]">
                ویرایش عکس
              </button>
            </div>

            <div className="w-[17rem] h-[18rem] bg-[#FBF6F6] rounded-xl shadow-2xl border-[1px] mr-[0.5rem]">
              <div className="text-nowrap text-[#22445D] text-[8px] text-lg text-center bg-[#A4F6DE] h-[3.7rem] rounded-xl border-[1px]">
                <h1 className="mt-[0.5rem]">امنیت</h1>
              </div>
            </div>
          </div>

          <div className="w-[51rem] h-[54rem] bg-[#FBF6F6] rounded-xl shadow-2xl border-[1px] my-[1.5rem] ml-[1rem]">
            <div className="text-nowrap text-[#22445D] text-[8px] text-lg text-center bg-[#A4F6DE] h-[3.7rem] rounded-xl border-[1px]">
              <h1 className="mt-[0.5rem]">مشخصات کاربر</h1>
            </div>

            <div className="grid grid-cols-2 grid-rows-8 gap-1">
              <div>
                <Formik>
                  <Form>
                    <Field
                      type="text"
                      placeholder="     نام"
                      className="w-[22rem] h-[3.8rem] mt-[2rem] mr-[3rem] text-[#158B68] border-[2px] border-[#158B68] bg-[#ffff] rounded-lg"
                    ></Field>
                  </Form>
                </Formik>
              </div>

              <div>
                <Formik>
                  <Form>
                    <Field
                      type="text"
                      placeholder="     نام خانوادگی"
                      className="w-[22rem] h-[3.8rem] mt-[2rem] text-[#158B68] border-[2px] border-[#158B68] bg-[#ffff] rounded-lg"
                    ></Field>
                  </Form>
                </Formik>
              </div>

              <div className="col-span-2">
                <Formik>
                  <Form>
                    <Field
                      type="text"
                      placeholder="     شماره همراه"
                      className="w-[44.7rem] h-[3.8rem] mt-[1.8rem] mr-[3rem] text-[#158B68] border-[2px] border-[#158B68] bg-[#ffff] rounded-lg"
                    ></Field>
                  </Form>
                </Formik>
              </div>

              <div>
                <Formik>
                  <Form>
                    <Field
                      type="text"
                      placeholder="     شماره ملی"
                      className="w-[22rem] h-[3.8rem] mt-[1.7rem] mr-[3rem] text-[#158B68] border-[2px] border-[#158B68] bg-[#ffff] rounded-lg"
                    ></Field>
                  </Form>
                </Formik>
              </div>

              <div>
                <Formik>
                  <Form>
                    <Field
                      type="text"
                      placeholder="     تاریخ تولد"
                      className="w-[22rem] h-[3.8rem] mt-[1.7rem] text-[#158B68] border-[2px] border-[#158B68] bg-[#ffff] rounded-lg"
                    ></Field>
                  </Form>
                </Formik>
              </div>

              <div className="col-span-2">
                <Formik>
                  <Form>
                    <Field
                      type="text"
                      placeholder="     درباره من"
                      className="w-[44.7rem] h-[3.8rem] mt-[1.6rem] mr-[3rem] text-[#158B68] border-[2px] border-[#158B68] bg-[#ffff] rounded-lg"
                    ></Field>
                  </Form>
                </Formik>
              </div>

              <div>
                <Formik>
                  <Form>
                    <Field
                      type="text"
                      placeholder="     ایمیل"
                      className="w-[34rem] h-[3.8rem] mt-[1.6rem] mr-[3rem] text-[#158B68] border-[2px] border-[#158B68] bg-[#ffff] rounded-lg"
                    ></Field>
                  </Form>
                </Formik>
              </div>

              <div>
                <Formik>
                  <Form>
                    <Field
                      type="text"
                      placeholder="   جنسیت"
                      className="w-[10rem] h-[3.8rem] mt-[1.6rem] mr-[12rem] text-[#158B68] border-[2px] border-[#158B68] bg-[#ffff] rounded-lg"
                    ></Field>
                  </Form>
                </Formik>

                <select
                  name="sexual"
                  id="pet-select"
                  className="bg-[#fff] text-[#000] border-[2px] border-[#158B68] rounded-lg absolute left-[6.5rem] bottom-[5.5rem]"
                >
                  <option value="مرد">مرد</option>
                  <option value="زن">زن</option>
                </select>
              </div>

              <div className="col-span-2">
                <Formik>
                  <Form>
                    <Field
                      type="text"
                      placeholder="     درباره من"
                      className="w-[44.7rem] h-[3.8rem] mt-[1.6rem] mr-[3rem] text-[#158B68] border-[2px] border-[#158B68] bg-[#ffff] rounded-lg"
                    ></Field>
                  </Form>
                </Formik>
              </div>

              <div>
                <Formik>
                  <Form>
                    <Field
                      type="text"
                      placeholder="     لینک تلگرام"
                      className="w-[22rem] h-[3.8rem] mt-[1.6rem] mr-[3rem] text-[#158B68] border-[2px] border-[#158B68] bg-[#ffff] rounded-lg"
                    ></Field>
                  </Form>
                </Formik>
              </div>

              <div>
                <Formik>
                  <Form>
                    <Field
                      type="text"
                      placeholder="     پروفایل لینکدین"
                      className="w-[22rem] h-[3.8rem] mt-[1.6rem] text-[#158B68] border-[2px] border-[#158B68] bg-[#ffff] rounded-lg"
                    ></Field>
                  </Form>
                </Formik>
              </div>

              <div className="w-[44.7rem] h-[3.8rem] mt-[1.6rem] mr-[3rem] text-nowrap text-center border-[2px] bg-[#158B68] rounded-lg">
                <button className="w-[44.7rem] h-[3.8rem] text-lg text-[#fff] bg-[#158B68]">
                  ثبت تغییرات
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { EditProfile };
