export default function Variant4() {
  return (
    <section
      className="bg-zinc-950 py-16 lg:py-24"
      aria-labelledby="page-heading"
    >
      <div className="container px-6 mx-auto">
        <div className="flex flex-col gap-6 lg:gap-8 flex-1 max-w-xl">
          <div className="flex flex-col gap-4 lg:gap-5">
            <p
              className="text-white/80 text-sm lg:text-base font-semibold"
              aria-hidden="true"
            >
              Header section
            </p>
            <h1
              id="page-heading"
              className="text-white text-3xl md:text-5xl font-bold"
            >
              Short engaging headline
            </h1>
            <p
              className="text-white/80 text-base lg:text-lg"
              aria-label="page description"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum
              hendrerit ex vitae sodales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
