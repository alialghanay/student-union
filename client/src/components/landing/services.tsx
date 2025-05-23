"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getServices } from "@/lib/features/service/actions";
import Image from "next/image";
import { use, useEffect } from "react";

const Services = () => {
  const dispatch = useAppDispatch();

  const { services, error, loading } = useAppSelector((state) => state.service);
  useEffect(() => {
    dispatch(getServices());
  }, []);

  return (
    <div className="m-8 flex flex-col items-center justify-center">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="mb-4">
        <h1 className="text-4xl font-bold">خدماتنا</h1>
        <p>خدمات الموقع الالكترونية</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {services &&
          services.data.map((service) => (
            <div key={service.id} className="mb-4">
              <h1 className="text-2xl font-bold">{service.title}</h1>
              <p>{service.description}</p>
              <Image
                src={"http://localhost:1337" + service.icon.url}
                alt={service.title}
                width={service.icon.width}
                height={service.icon.height}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Services;
