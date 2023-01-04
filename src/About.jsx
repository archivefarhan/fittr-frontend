export function About() {
  return (
    <div className="h-screen">
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div class="max-w-3xl">
            <h2 class="text-3xl font-bold sm:text-4xl">fittr</h2>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img src="capstone.svg" class="absolute inset-0 h-full w-full object-contain" />
            </div>

            <div class="lg:py-16">
              <article class="space-y-4 text-gray-600">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis eius quos ea
                  neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
                  Ipsum dolor sit amet consectetur, adipisicing elit. Dolorum explicabo quidem voluptatum voluptas illo
                  accusantium ipsam quis, vel mollitia? Vel provident culpa dignissimos possimus, perferendis
                  consectetur odit accusantium dolorem amet voluptates aliquid, ducimus tempore incidunt quas. Veritatis
                  molestias tempora distinctio voluptates sint! Itaque quasi corrupti, sequi quo odit illum impedit!
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
