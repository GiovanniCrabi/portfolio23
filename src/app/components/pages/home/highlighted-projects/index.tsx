import { HorizontalDivider } from '@/app/components/divider/horizontal';
import { SectionTitle } from '@/app/components/section-title';
import { ProjectCard } from './project-card';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from '@/app/components/link';
import { Project } from '@/app/types/projects';

type HighlightedProjectsProps = {
  projects: Project[];
};

export const HighlightedProjects = ({ projects }: HighlightedProjectsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="Featured Projects" title="Featured Projects" />
      <HorizontalDivider className="mb-16" />

      <div>
        {projects?.map((project) => (
          <div key={project.slug}>
            <ProjectCard project={project} />
            <HorizontalDivider className="my-16" />
          </div>
        ))}
        <button className="m-auto flex items-center justify-center h-11 w-11/12 md:w-1/5 rounded-lg mt-6 md:mt-8 border-2 border-emerald-400 hover:shadow-button transition-all">
          <Link
            href="/projects"
            className="inline-flex font-bold text-emerald-400"
          >
            See all projects
            <HiArrowNarrowRight />
          </Link>
        </button>
      </div>
    </section>
  );
};
