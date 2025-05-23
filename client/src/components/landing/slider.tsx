"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import Carousel from "@/components/ui/carousel";
import { getFeed } from "@/lib/features/feed/actions";
import Image from "next/image";
import { useEffect } from "react";

const Slider = () => {
  const dispatch = useAppDispatch();
  const { feeds, error, loading } = useAppSelector((state) => state.feed);

  useEffect(() => {
    dispatch(getFeed());
  }, [dispatch]);

  const slideData =
    feeds?.data?.map((feed) => ({
      title: feed.headline,
      button: "عرض المزيد",
      src: "http://localhost:1337" + feed.poster.url,
    })) || [];

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {
        <div className="relative overflow-hidden w-full h-full py-20" dir="ltr">
          <Carousel slides={slideData} />
        </div>
      }
    </div>
  );
};

export default Slider;
