import { Field, Form, Formik } from "formik";
import { BiHome, BiPhoneCall } from "react-icons/bi";
import { MdMarkEmailRead } from "react-icons/md";

const aboutData = {
  title: "با ما در ارتباط باشید",
  desc: "لورم ایپسوم بسیار فراگیر است زیرا بسیار همه‌کاره است. تعداد پاراگراف‌هایی را که می‌خواهید انتخاب کنید، کپی کنید.",
  address: "آدرس و ساعت کاری",
  addressDesc:
    "ساری، بلوار خزر، ششصد دستگاه، آموزشگاه بحر، دوشنبه تا جمعه 8:00 - 18:00",
  phone: "شماره تماس",
  phoneNumber: "011-33883358",
  email: "آدرس ایمیل",
  emailAddress: "bahr_academy@gmail.com",
};

const inputClassName =
  "w-full h-12 rounded-xl border border-green-200 bg-white px-4 text-right text-sm text-green-950 outline-none transition placeholder:text-green-900/40 focus:border-green-500 focus:ring-2 focus:ring-green-100 dark:border-green-800 dark:bg-gray-700 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-green-500 dark:focus:ring-green-900/30";

const textareaClassName =
  "w-full min-h-[150px] resize-none rounded-xl border border-green-200 bg-white px-4 py-3 text-right text-sm text-green-950 outline-none transition placeholder:text-green-900/40 focus:border-green-500 focus:ring-2 focus:ring-green-100 dark:border-green-800 dark:bg-gray-700 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-green-500 dark:focus:ring-green-900/30";

const contactItems = [
  {
    title: aboutData.address,
    desc: aboutData.addressDesc,
    icon: BiHome,
    valueDir: "rtl" as const,
    valueClassName: "text-right",
  },
  {
    title: aboutData.phone,
    desc: aboutData.phoneNumber,
    icon: BiPhoneCall,
    valueDir: "ltr" as const,
    valueClassName: "text-left",
  },
  {
    title: aboutData.email,
    desc: aboutData.emailAddress,
    icon: MdMarkEmailRead,
    valueDir: "ltr" as const,
    valueClassName: "text-left",
  },
];

const AboutForm: React.FC = () => {
  return (
    <section dir="rtl" className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col-reverse gap-8 lg:flex-row-reverse lg:items-start lg:gap-12">
        <div className="w-full lg:w-1/2">
          <Formik
            initialValues={{
              fname: "",
              email: "",
              phone: "",
              text: "",
            }}
            onSubmit={(values) => console.log(values)}
          >
            <Form className="rounded-[1.5rem] bg-[#FBF6F6] p-5 shadow-[0_12px_30px_rgba(21,128,61,0.08)] dark:bg-gray-800 sm:p-6 lg:p-8">
              <div className="space-y-4">
                <Field
                  className={inputClassName}
                  placeholder="نام و نام خانوادگی"
                  name="fname"
                  autoComplete="name"
                />

                <Field
                  className={inputClassName}
                  placeholder="آدرس ایمیل"
                  name="email"
                  type="email"
                  autoComplete="email"
                />

                <Field
                  className={inputClassName}
                  placeholder="شماره تماس"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                />

                <Field
                  as="textarea"
                  className={textareaClassName}
                  placeholder="متن پیام..."
                  name="text"
                />
              </div>

              <button
                type="submit"
                className="mt-5 h-12 w-full rounded-xl bg-green-100 text-sm font-medium text-green-900 transition hover:bg-green-200 dark:bg-green-900/30 dark:text-green-100 dark:hover:bg-green-900/50"
              >
                ارسال
              </button>
            </Form>
          </Formik>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="text-right">
            <h2 className="text-2xl font-bold text-green-950 dark:text-white sm:text-3xl">
              {aboutData.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-green-900/70 dark:text-slate-300 sm:text-base">
              {aboutData.desc}
            </p>
          </div>

          <div className="mt-6 space-y-4">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex flex-row items-start gap-4 rounded-2xl bg-green-50/70 p-4 dark:bg-gray-800/70"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-green-700 shadow-sm shadow-green-100 dark:bg-gray-700 dark:text-green-400">
                    <Icon className="text-[1.75rem]" />
                  </div>

                  <div className="min-w-0 flex-1 text-right">
                    <p className="text-base font-semibold text-green-950 dark:text-white">
                      {item.title}
                    </p>

                    <p
                      dir={item.valueDir}
                      className={`mt-1 text-sm leading-7 text-green-900/70 dark:text-slate-300 ${item.valueClassName}`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutForm };
