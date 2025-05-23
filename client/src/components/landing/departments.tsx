"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getDepartments } from "@/lib/features/department/actions";
import Image from "next/image";
import { useEffect } from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const Departments = () => {
  const dispatch = useAppDispatch();
  const { departments, error, loading } = useAppSelector(
    (state) => state.department
  );

  useEffect(() => {
    dispatch(getDepartments());
  }, []);

  const content =
    departments &&
    departments.data.map((department) => ({
      title: department.name,
      description: department.description,
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src={"http://localhost:1337" + department.avatar.url}
            alt={department.name}
            width={department.avatar.width}
            height={department.avatar.height}
          />
        </div>
      ),
    }));

  return (
    <div className="w-full">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="w-full py-4">
        {content && <StickyScroll content={content} />}
      </div>
    </div>
  );
};

export default Departments;
