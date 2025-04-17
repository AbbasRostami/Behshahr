import { ErrorMessage, Field, Form, Formik } from "formik";
import { useAtomValue } from "jotai";
import { profileAtom } from "../../../context/jotai/ProfileProvider";
import { DateObject } from "react-multi-date-picker";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import { editApi } from "../../../core/api/api";
import { ApiResponse } from "../../../components/CoursesDetailsForm";
import { toast } from "react-toastify";
import transition from "react-element-popper/animations/transition";
interface ProfileEditFormProps {
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
}
interface ProfileFormValues {
  FName: string;
  LName: string;
  UserAbout: string;
  LinkdinProfile: string;
  TelegramLink: string;
  HomeAdderess: string;
  phoneNumber: string;
  NationalCode: string;
  email: string;
  Gender: boolean;
  BirthDay: string;
}

const ProfileEditForm = ({ isEditing, setIsEditing }: ProfileEditFormProps) => {
  const data = useAtomValue(profileAtom);

  const miladiDate = data?.birthDay;

  const shamsiDate = new DateObject({
    date: miladiDate ? new Date(miladiDate) : new Date(),
    calendar: persian,
    locale: persian_fa,
  });

  const editProfileInfo = async (values: ProfileFormValues): Promise<void> => {
    const formData = new FormData();

    const data: ProfileFormValues = {
      FName: values.FName,
      LName: values.LName,
      UserAbout: values.UserAbout,
      LinkdinProfile: values.LinkdinProfile,
      TelegramLink: values.TelegramLink,
      HomeAdderess: values.HomeAdderess,
      phoneNumber: values.phoneNumber,
      NationalCode: values.NationalCode,
      email: values.email,
      Gender: values.Gender,
      BirthDay: values.BirthDay,
    };

    Object.entries(data).forEach(([key, value]) => formData.append(key, value));

    formData.forEach((value, key) => {
      console.log(key, ":", value);
    });

    const path = `/SharePanel/UpdateProfileInfo`;
    const body = formData;
    console.log(body);
    const response = (await editApi({ path, body })) as ApiResponse;
    console.log(response);

    if (response?.data.success) {
      toast.success(response?.data.message);
    }
  };
  return (
    <div
      className={`transition-all duration-[2500ms] ease-in-out overflow-hidden ${
        isEditing ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      {isEditing && (
        <div className="w-full mt-6 mb-7 bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <Formik
            enableReinitialize={true}
            initialValues={{
              Gender: data?.gender || false,
              FName: data?.fName || "",
              LName: data?.lName || "",
              UserAbout: data?.userAbout || "",
              LinkdinProfile: data?.linkdinProfile || "http://linkden.com/",
              TelegramLink: data?.telegramLink || "http://t.me/",
              HomeAdderess: data?.homeAdderess || "",
              phoneNumber: data?.phoneNumber || "",
              NationalCode: data?.nationalCode || "",
              email: data?.email || "",
              BirthDay: shamsiDate.format("YYYY/MM/DD") || "",
            }}
            onSubmit={editProfileInfo}
          >
            <Form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                  نام
                </label>
                <Field type="text" name="FName" className="form-input w-full" />
                <ErrorMessage
                  name="FName"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                  نام خانوادگی
                </label>
                <Field type="text" name="LName" className="form-input w-full" />
                <ErrorMessage
                  name="LName"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                  ایمیل
                </label>
                <Field
                  type="email"
                  name="email"
                  className="form-input w-full"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                  شماره تلفن
                </label>
                <Field
                  type="text"
                  name="phoneNumber"
                  className="form-input w-full"
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                  کد ملی
                </label>
                <Field
                  type="text"
                  name="NationalCode"
                  className="form-input w-full"
                />
              </div>

              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                  تاریخ تولد
                </label>
                <Field name="BirthDay">
                  {({ form }: any) => (
                    <DatePicker
                      animations={[transition({ duration: 800, from: 35 })]}
                      calendar={persian}
                      locale={persian_fa}
                      containerClassName="!block"
                      format="YYYY/MM/DD"
                      calendarPosition="bottom-right"
                      value={form.values.BirthDay}
                      onChange={(date) => {
                        form.setFieldValue("BirthDay", date);
                      }}
                      inputClass="w-full form-input rtl"
                    />
                  )}
                </Field>
              </div>

              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                  جنسیت
                </label>
                <Field
                  as="select"
                  name="Gender"
                  className="form-input w-full rtl"
                >
                  <option value="">انتخاب کنید</option>
                  <option value="true">مرد</option>
                  <option value="false">زن</option>
                </Field>
              </div>

              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                  آدرس خانه
                </label>
                <Field
                  type="text"
                  name="HomeAdderess"
                  className="form-input w-full"
                />
              </div>

              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                  لینک تلگرام
                </label>
                <Field
                  type="text"
                  name="TelegramLink"
                  className="form-input w-full"
                />
              </div>

              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                  لینک لینکدین
                </label>
                <Field
                  type="text"
                  name="LinkdinProfile"
                  className="form-input w-full"
                />
              </div>

              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                  درباره من
                </label>
                <Field
                  as="textarea"
                  name="UserAbout"
                  rows={1}
                  className="form-input w-full"
                />
              </div>

              <div className="col-span-full">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300"
                >
                  ذخیره تغییرات
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      )}
    </div>
  );
};

export default ProfileEditForm;
