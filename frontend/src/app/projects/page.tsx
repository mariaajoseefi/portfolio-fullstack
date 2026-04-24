import Navbar from "@/components/Navbar";
import Image from "next/image";

// data-driven projects
const projects = [
  {
    title: "Real-time patient and population analytics in healthcare",
    description: "Case study / UX / Dashboard",
    image: "/images/home/project1.png",
    bg: "bg-dusty-rose",
    blobColor: "fill-navy-blue",
  },
  {
    title: "Reimagining how users navigate and fill their passwords on websites",
    description: "Case study / UX / Application",
    image: "/images/home/project2.png",
    bg: "bg-butter-yellow",
    blobColor: "fill-burgundy",
  },
  {
    title: "Transforming how customers merge duplicate assets and resolve risks",
    description: "Case study / UX / Dashboard",
    image: "/images/home/project3.png",
    bg: "bg-lavender-blue",
    blobColor: "fill-olive-brown",
  },
];

export default function Projects() {
  return (
    <main className="w-full">
      <Navbar />
      {/* hero section */}
      <section className="py-20 px-6 flex flex-col items-center">
        <div className="flex items-center justify-center gap-3 mb-16">
            <Image
                src="/images/ui/star-outline.png"
                alt=""
                aria-hidden="true"
                width={50}
                height={50}
                className="rotate-21"
            />
            <h1 className="text-5xl text-center">
                Stuff I've been{" "}
                <span className="font-imperial text-7xl italic">working on!</span>
            </h1>
        </div>

        {/* macbook mockup with arrows */}
        <div className="relative w-full max-w-5xl mx-auto">
            {/* left arrow */}
            <div className="absolute -left-16 top-4 -translate-y-1/2 scale-x-[-1] hidden lg:block">
              <Image
                src="/images/ui/arrow.png"
                alt=""
                width={120}
                height={120}
              />
            </div>

            <Image
              src="/images/projects/mockup.png"
              alt=""
              width={1200}
              height={700}
              className="w-full h-auto"
              priority
            />

            {/* right arrow */}
            <div className="absolute -right-16 top-4 -translate-y-1/2 hidden lg:block">
              <Image
                src="/images/ui/arrow.png"
                alt=""
                width={120}
                height={120}
              />
            </div>
          </div>

          <div className="text-xl text-center mt-12">
            <p className="mb-2">*:･ﾟ✧*:･ﾟ</p>
            <p>[Scroll down!]</p>
          </div>
        </section>

        {/* projects section */}
        <section className="py-4 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col gap-32">
                {projects.map((project, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div
                            key={project.title}
                            className={`flex flex-row items-center gap-16 ${
                                !isEven ? "flex-row-reverse" : ""
                            }`}
                        >
                            {/* image with colored rectangle behind */}
                            <div className="relative w-1/2 shrink-0 pt-10 pl-10 group cursor-pointer">
                                {/* colored background rectangle offset */}
                                <div
                                    className={`absolute top-0 left-0 right-0 bottom-0 ${project.bg}`}
                                />
                                {/* image */}
                                <div className="relative z-10 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={600}
                                        height={400}
                                        className="object-cover w-full h-auto transition-transform duration-500 ease-out group-hover:scale-105"
                                    />
                                </div>
                            </div>

                            {/* text side */}
                            <div className="w-1/2 flex flex-col gap-6">
                                {/* blob SVG */}
                                <svg
                                    width="50"
                                    height="50"
                                    viewBox="0 0 58 60"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M27.7476 1.98249C28.7207 -0.716503 32.5637 -0.640839 33.4298 2.09436L35.7252 9.34303C36.2211 10.9091 37.8842 11.7851 39.4562 11.3082L46.6431 9.12776C49.0444 8.39925 51.2256 10.7652 50.3048 13.0994L49.297 15.654C48.587 17.454 49.7414 19.4454 51.6563 19.7237L54.9339 20.2C57.6734 20.5981 58.4578 24.1781 56.1357 25.6853L51.4151 28.7492C50.1058 29.599 49.6669 31.3108 50.4057 32.6857L56.2454 43.5526C57.5278 45.939 55.2404 48.6683 52.6666 47.8228L43.3596 44.7657C41.6735 44.2118 39.8778 45.2347 39.4943 46.9675L38.0718 53.3936C37.5111 55.9267 34.2168 56.6019 32.7048 54.4935L30.3691 51.2366C29.2754 49.7114 27.0657 49.5537 25.7664 50.908L18.7121 58.2608C16.841 60.2111 13.5473 58.8867 13.5473 56.1839V50.7274C13.5473 49.0706 12.2042 47.7274 10.5473 47.7274H7.80188C5.18254 47.7274 3.84495 44.584 5.66117 42.6966C7.28868 41.0053 6.40447 38.1834 4.10283 37.7233L2.41259 37.3855C-0.487124 36.8058 -0.887849 32.8238 1.83822 31.678L5.89804 29.9716C7.87597 29.1403 8.36716 26.5617 6.83341 25.0614L2.9688 21.2811C0.996201 19.3515 2.45536 16.0067 5.21157 16.14L12.9091 16.5124C14.9128 16.6093 16.4453 14.7503 15.9679 12.8019L14.9885 8.80501C14.3977 6.39401 16.8237 4.34958 19.0997 5.34036L22.5939 6.86139C24.1828 7.55307 26.0256 6.75848 26.6134 5.12825L27.7476 1.98249Z"
                                        className={project.blobColor}
                                    />
                                </svg>
                                <h2 className="text-4xl font-bold leading-tight">
                                    {project.title}
                                </h2>
                                <p className="text-lg opacity-70">{project.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
      </section>
    </main>
  );
}