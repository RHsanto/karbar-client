import React from "react";
import useSWR from "swr";
import useFirebase from "../../../../hooks/useFirebase";
const fetcher = (...args) => fetch(...args).then(res => res.json());

const UserInfo = () => {
  const { user } = useFirebase();
  const { data } = useSWR(`http://localhost:8000/user/${user.email}`, fetcher);
  console.log(data);
  return (
    <div className="bg-white">
      <h4 className="text-center bg-blue text-white p-3">Personal Info</h4>
      <div className="flex flex-col  p-10 ">
        <li className="bg-slate-200 flex gap-6  p-5">
          <h5 className="">Name :</h5>
          <span>
            {data?.firstName ? (
              <>
                {data?.firstName}
                {data?.lastName}{" "}
              </>
            ) : (
              <> {data?.displayName}</>
            )}
          </span>
        </li>
        <li className="bg-slate-100 flex gap-6   p-5">
          <h5 className="">Email :</h5>
          <span>{data?.email}</span>
        </li>
        <li className="bg-slate-200 flex gap-6  p-5">
          <h5 className="">Country :</h5>
          <span>{data?.country ? data?.country : " N/A"}</span>
        </li>
        <li className="bg-slate-100  flex gap-6    p-5">
          <h5 className="">City :</h5>
          <span>{data?.city ? data?.city : " N/A"}</span>
        </li>
        <li className="bg-slate-200 flex gap-6  p-5">
          <h5 className="">Address :</h5>
          <span>{data?.address ? data?.address : " N/A"}</span>
        </li>
        <li className="bg-slate-100  flex gap-6   p-5">
          <h5 className="">Phone :</h5>
          <span>{data?.phoneNo ? data?.phoneNo : " N/A"}</span>
        </li>
        <li className="bg-slate-200  flex gap-6   p-5">
          <h5 className="">Alternative No :</h5>
          <span>{data?.alternative ? data?.alternative : " N/A"}</span>
        </li>
        <li className="bg-slate-100 flex gap-6 p-5 ">
          <h5 className="">Gender :</h5>
          <span>{data?.gender ? data?.gender : " N/A"}</span>
        </li>
      </div>
    </div>
  );
};

export default UserInfo;
