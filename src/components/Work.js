// src/components/Work.js

import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Work() {
    return (
        <section id="work" className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
              <CodeIcon className="mx-auto inline-block w-10 mb-4" />
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                Work Experience
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Here you can find out more about my work experience. As a data engineer I'm mostly
                working on data integration projects, extracting data from various data sources, transforming it 
                and loading to various data warehouse and data lake systems. 
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              {workexp.map((work) => (
                <a
                  key={work.image}
                  className="sm:w-1/2 w-100 p-4">
                  <div className="flex relative">
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                        {work.subtitle}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        {work.title}
                      </h1>
                      <p className="leading-relaxed">{work.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      );
}