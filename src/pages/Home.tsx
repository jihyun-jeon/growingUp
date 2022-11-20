import React, { ReactNode, useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "react-intersection-observer-hook";
import { TypeAnimation } from "react-type-animation";
import tw from "twin.macro";
import styled from "styled-components";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import About from "./About";
import Projects from "./Projects/Projects";
// import Scene from "../3d/Scene";

const Scene = React.lazy(() => import("../3d/Scene"));

function Home() {
  return (
    <>
      <header tw="h-[100vh]">
        <Nav />
        <section>
          <Suspense
            fallback={
              <h1 tw="w-10 h-2/3 bg-slate-600">Lazy... Lazy... Lazy...</h1>
            }
          >
            {/* <Scene /> */}
            <div tw="w-full pt-[10vh] h-[50vh] bg-red-200" />
          </Suspense>
        </section>
        <section tw="mx-auto max-w-6xl flex items-center h-[40%]">
          <h1 tw="font-bold text-6xl leading-relaxed">
            <div>
              <div>
                안녕하세요!
                <br /> 프론트엔드 개발자
                <span tw="text-orange-400 px-3">전지현</span>
                입니다. 🎉
              </div>
              <div tw="text-orange-400">
                <TypeAnimation
                  sequence={[
                    "기본기가 탄탄해요 💪",
                    1000,
                    "꼼꼼해요 🧐",
                    1000,
                    "능동적이에요 🏃",
                    1000,
                  ]}
                  wrapper="span"
                  repeat={Infinity}
                  cursor={true}
                />
              </div>
            </div>
          </h1>
        </section>
      </header>
      <main tw="mx-auto max-w-6xl">
        <About />
        {/* <div tw="h-32" /> */}
        {/* <h1 tw="pt-36 text-center text-3xl font-bold">Projects</h1> */}
        <Projects />
        <h1>toy</h1>
      </main>
    </>
  );
}

export default Home;
