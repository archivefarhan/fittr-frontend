import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header aria-label="Site Header" class="bg-white">
      <div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a class="block text-black" href="/">
          <span class="sr-only">Home</span>
          <img src="capstone.svg" alt="" />
        </a>

        <div class="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Site Nav" class="hidden md:block">
            <ul class="flex items-center gap-6 text-sm">
              <li>
                <a class="text-black transition hover:text-gray-500/75" href="/about">
                  About
                </a>
              </li>

              <li>
                <a class="text-black transition hover:text-gray-500/75" href="/closet">
                  My Closet
                </a>
              </li>

              <li>
                <a class="text-black transition hover:text-gray-500/75" href="/outfits">
                  Outfits
                </a>
              </li>
            </ul>
          </nav>

          <div class="flex items-center gap-4">
            <div class="sm:flex sm:gap-4">
              <a
                className="block rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-500"
                href="/login"
              >
                Login
              </a>

              <a
                className="block rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-500"
                href="/signup"
              >
                Signup
              </a>

              <LogoutLink />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
