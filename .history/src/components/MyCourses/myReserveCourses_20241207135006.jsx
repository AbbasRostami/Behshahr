import React, { useEffect, useState } from "react";
import recycle from "../../assets/recycle.svg";
import nest from "../../assets/nest.svg";
import { deleteApi, getApi } from "../../core/api/api";
import moment from "jalali-moment";
import { toast } from "react-toastify";

const MyReserveCourses = () => {
  const [data, setData] = useState([]);
  const getMyCourses = async () => {
    const path = `/SharePanel/GetMyCoursesReserve`;
    const response = await getApi({ path });
    console.log(response.data);
    setData(response?.data);
  };
  useEffect(() => {
    getMyCourses();
  }, []);


  const deleteCoursesReserve = async (reserveId) => {

    console.log(reserveId);
    
    const body = {id:reserveId};

    const path = `/CourseReserve/`;
    const response = await deleteApi({ path , body});

    console.log("Delete:", response);
    if(response.data.success){
      toast.success(response.data.message)
    }
    getMyCourses();
  };
  return (
    <>
      <div className="w-[45rem] lg:w-[70rem] h-[43rem] my-[1rem] border-[1px] bg-[#ffff] dark:bg-slate-800 rounded-2xl shadow-2xl">
        <div className="w-[43rem] lg:w-[66rem] h-[40.5rem] mx-auto my-[1.3rem] bg-[#FBF6F6] dark:bg-slate-700 border-[1px] rounded-lg shadow-2xl">
          <div className=" text-nowrap text-[#22445D] dark:text-white text-[5px] text-xs lg:text-sm bg-[#A4F6DE] dark:bg-slate-900 h-[4.5rem] flex justify-evenly rtl gap-14 lg:gap-40 py-[1.5rem] px-[3rem]">
            <h1 className="">نام دوره</h1>
            <h1 className="mr-5">تاریخ شروع</h1>
            <h1 className="">وضعیت تایید</h1>
            <h1 className="">حذف</h1>
          </div>
          <br></br>
          {data?.map((item) => {
            return (
              <div className="hover:bg-orange-100 mt-2 text-nowrap text-[#22445D] dark:text-white text-[12px] bg-[#ffff] dark:bg-slate-700 max-w-[80rem] lg:w-[64rem] h-[3.5rem] rounded-2xl flex justify-evenly rtl gap-24 lg:gap-28 shadow-sm border-[1px] py-[1.2rem] px-[1rem] mx-auto">

                <h2 className="w-[20rem] truncate mr-16"> {item?.courseName}</h2>
                <p className="w-[20rem]">{moment(item?.reserverDate).locale("fa").format("YYYY/MM/DD")}</p>
                <h2 className="w-[20rem]"> {item?.accept ? "تایید شده" : "تایید نشده"}</h2>

                <button onClick={() => deleteCoursesReserve(item.reserveId)} className="rounded-2xl w-[10rem] h-[2rem] mt-[-0.5rem]">
                  <img
                    className="text-[#22445D]  h-[1.5rem] lg:mr-[0.2rem]"
                    src={recycle}
                    alt=""
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export { MyReserveCourses };


// <TableContainer >
// <Table sx={{ minWidth: 650 }} aria-label="simple table" className="">
//   <TableHead className="bg-[#A4F6DE]  ">
//     <TableRow className="rounded-2xl">
//       <TableCell align="center">نام دوره</TableCell>
//       <TableCell align="center">تاریخ شروع</TableCell>
//       <TableCell align="center">وضعیت دوره</TableCell>
//       <TableCell align="center">حذف دوره</TableCell>
//     </TableRow>
//   </TableHead>
//   <TableBody>
//     {data?.map((row) => (
//       <TableRow
//         key={row.name}
//         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//       >
//         <TableCell align="center">{row.courseName}</TableCell>
//         <TableCell align="center">{row.courseName}</TableCell>
//         <TableCell align="center">{row.courseName}</TableCell>
//         <TableCell align="center">{row.courseName}</TableCell>
//       </TableRow>
//     ))}
//   </TableBody>
// </Table>
// </TableContainer>