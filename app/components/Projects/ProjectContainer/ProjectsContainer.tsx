'use client'

import { UsePostApi } from "../../../hooks/usePostApi";

import ProjectHeader from "./ProjectHeader";
import FilterContainer from "../Filter/FilterContainer";
import ProjectPosts from "./ProjectPosts";




export default function ProjectsContainer() {
  const { data: posts } = UsePostApi();
  

  return (
    <>
      <section className="py-20 px-6 bg-background" id="projects">
        <div className="container mx-auto space-y-12">
          <div className="space-y-4 animate-fade-in w-full">
            <ProjectHeader />
            <FilterContainer Posts={posts} />
          </div>
          <ProjectPosts />
        </div>
      </section>

    </>
  );
};
