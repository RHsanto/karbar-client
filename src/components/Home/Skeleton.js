import React from "react";

const Skeleton = () => {
  return (
    // Write Skelton animation
    <div className="flex gap-5">
      <div>
        <div className=" border border-blue-300 shadow rounded-2xl p-3 max-w-sm w-80 mx-auto h">
          <div className="animate-pulse">
            <div className="flex-1 space-y-6 py-1">
              <div className="h-80 bg-slate-200 rounded-2xl"></div>
              <div className="space-y-3">
                <div className="h-3 bg-slate-200 rounded w-3/5"></div>
                <div className="h-2 bg-slate-200 rounded w-2/5"></div>
              </div>

              <div className="flex justify-between items-center">
                <div className="h-10 bg-slate-200 rounded w-1/3"></div>
                <div className="h-3 bg-slate-200 rounded w-2/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" border border-blue-300 shadow rounded-2xl p-3 max-w-sm w-80 mx-auto ">
          <div className="animate-pulse">
            <div className="flex-1 space-y-6 py-1">
              <div className="h-80 bg-slate-200 rounded-2xl"></div>
              <div className="space-y-3">
                <div className="h-3 bg-slate-200 rounded w-3/5"></div>
                <div className="h-2 bg-slate-200 rounded w-2/5"></div>
              </div>

              <div className="flex justify-between items-center">
                <div className="h-10 bg-slate-200 rounded w-1/3"></div>
                <div className="h-3 bg-slate-200 rounded w-2/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" border border-blue-300 shadow rounded-2xl p-3 max-w-sm w-80 mx-auto ">
          <div className="animate-pulse">
            <div className="flex-1 space-y-6 py-1">
              <div className="h-80 bg-slate-200 rounded-2xl"></div>
              <div className="space-y-3">
                <div className="h-3 bg-slate-200 rounded w-3/5"></div>
                <div className="h-2 bg-slate-200 rounded w-2/5"></div>
              </div>

              <div className="flex justify-between items-center">
                <div className="h-10 bg-slate-200 rounded w-1/3"></div>
                <div className="h-3 bg-slate-200 rounded w-2/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
