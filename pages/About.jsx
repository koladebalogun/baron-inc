import Layout from "@/components/Layout";
import React, { useRef } from "react";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";

export default function Test2() {
  return (
    <div>
      <Layout>
        <AboutMe />
        <Projects />
      </Layout>
    </div>
  );
}
