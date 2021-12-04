// src/components/Education.js

import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Education() {
    return (
        <section id="work" className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
              <CodeIcon className="mx-auto inline-block w-10 mb-4" />
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                Education
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Here you can find out more about my education path. The ability to relate to others and to show them my support
                led me to the enrollment in Medical High School in Rijeka. Along the way I discovered my passion for data
                so I decided to pursue my career IT industry. Today I hold the title of professional Specialist of Information
                Science in Business Systems.
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              {educationexp.map((education) => (
                <a
                  className="sm:w-1/2 w-100 p-4">
                  <div className="flex relative">
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                        {education.subtitle}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        {education.title}
                      </h1>
                      <p className="leading-relaxed">{education.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      );
}