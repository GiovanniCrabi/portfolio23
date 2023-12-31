import { ProjectDetails } from '@/app/components/pages/project/project-details';
import { ProjectSections } from '@/app/components/pages/project/project-sections';
import { ProjectPageData, ProjectsPageStaticData } from '@/app/types/page-info';
import { fetchHygraphQuery } from '@/app/utils/fetch-hygraph-query';
import { notFound } from 'next/navigation';

type ProjectProps = {
  params: {
    slug: string;
  };
};

const getProjectDetails = async (slug: string): Promise<ProjectPageData> => {
  const query = `
  query ProjectQuery() {
    project(where: {slug: "${slug}"}) {
      pageThumbnail {
        url
      }
      thumbnail {
        url
      }
      sections {
        title
        image {
          url
        }
      }
      title
      shortDescription
      description {
        raw
        text
      }
      technologies {
        name
      }
      liveProjectUrl
      githubUrl
    }
  }
  `;
  const data = fetchHygraphQuery<ProjectPageData>(
    query,
    60
  );

  return data;
};

export default async function Project({ params: { slug } }: ProjectProps) {
  const { project } = await getProjectDetails(slug);

  if (!project?.title) return notFound();

  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSections sections={project.sections} />
    </>
  );
}

export async function generateStaticParams() {
  const query = `
    query ProjectsSlugsQuery() {
      projects(first: 100) {
        slug
      }
    }
  `;
  const { projects } = await fetchHygraphQuery<ProjectsPageStaticData>(query);

  return projects;
}

