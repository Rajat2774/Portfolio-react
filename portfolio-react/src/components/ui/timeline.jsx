import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../../context/ThemeContext";

export const Timeline = ({
  data
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent font-sans md:px-10"
      ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div
              className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div
                className={`h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center ${
                  isDark ? 'bg-neutral-950' : 'bg-white shadow-sm border border-sky-100'
                }`}>
                <div
                  className={`h-4 w-4 rounded-full border p-2 ${
                    isDark ? 'bg-neutral-800 border-neutral-700' : 'bg-sky-100 border-sky-400'
                  }`} />
              </div>
              <h3
                className={`hidden md:block text-xl md:pl-20 md:text-5xl font-bold ${
                  isDark ? 'text-neutral-500' : 'text-sky-500'
                }`}>
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3
                className={`md:hidden block text-2xl mb-4 text-left font-bold ${
                  isDark ? 'text-neutral-500' : 'text-sky-500'
                }`}>
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className={`absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] ${
            isDark ? 'via-neutral-700' : 'via-sky-200'
          } to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]`}>
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className={`absolute inset-x-0 top-0 w-[2px] rounded-full ${
              isDark
                ? 'bg-gradient-to-t from-purple-500 via-fuchsia-500 to-transparent from-[0%] via-[10%]'
                : 'bg-gradient-to-t from-sky-500 via-cyan-400 to-transparent from-[0%] via-[10%]'
            }`} />
        </div>
      </div>
    </div>
  );
};
