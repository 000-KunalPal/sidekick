import { ProjectForm } from "@/modules/home/ui/components/project-form";
import { ProjectsList } from "@/modules/home/ui/components/project-list";
import Image from "next/image";

export default function Home() {
  return (
    <div className='flex flex-col max-w-5xl mx-auto w-full'>
      <section className='space-y-6 py-[16vh] 2xl:py-48'>
        <div className='flex flex-col items-center'>
          <Image
            src='/logo.png'
            alt='SideKick AI'
            width={200}
            height={200}
            className='hidden md:block'
          />
        </div>
        <h1 className='text-2xl md:text-5xl font-bold text-center'>
          Build something beautifull with SideKick AI.
        </h1>
        <p className='text-lg md:text-xl text-muted-foreground text-center'>
          Create apps and website with the help of AI.
        </p>
        <div className='max-w-3xl mx-auto w-full'>
          <ProjectForm />
        </div>
      </section>
      <ProjectsList />
    </div>
  );
}
