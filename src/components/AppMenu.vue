<template>
    <nav class="text-xl font-semibold leading-5 tracking-tight">
        <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
            <!-- Logo -->
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                <div class="flex items-center space-x-2">
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="logo 1">
                            <g id="Group">
                                <g id="Group_2">
                                    <path
                                        id="Vector"
                                        d="M31.5294 14.2118C31.5294 18.8819 28.7623 22.9082 24.7793 24.7351C26.4612 23.3496 27.5322 21.248 27.5322 18.896C27.5322 14.7642 24.2259 11.4042 20.112 11.3205C20.0574 11.3167 20.0075 11.3167 19.9529 11.3167C19.8983 11.3167 19.8485 11.3167 19.7939 11.3205C18.2673 11.4033 17.0588 12.6663 17.0588 14.2108V28.6814C17.0588 33.4748 13.1699 37.3638 8.37646 37.3638V14.2118C8.37646 7.81928 13.5605 2.63528 19.9529 2.63528C26.3454 2.63528 31.5294 7.81928 31.5294 14.2118Z"
                                        fill="black"
                                    />
                                    <path
                                        id="Vector_2"
                                        d="M21.9992 16.2582C23.1294 15.128 23.1294 13.2956 21.9992 12.1654C20.8689 11.0351 19.0365 11.0351 17.9063 12.1654C16.7761 13.2956 16.7761 15.128 17.9063 16.2582C19.0365 17.3884 20.8689 17.3884 21.9992 16.2582Z"
                                        fill="black"
                                    />
                                </g>
                            </g>
                        </g>
                    </svg>

                    <span class="font-bold">Demaxl</span>
                </div>
            </a>
            <div class="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
                <!-- Resume button -->
                <button
                    type="button"
                    class="hidden rounded-lg bg-black px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 md:inline-block"
                >
                    Resume
                </button>
                <!-- Dropdown button -->
                <button
                    data-collapse-toggle="navbar-cta"
                    type="button"
                    class="inline-flex items-center justify-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
                    aria-controls="navbar-cta"
                    aria-expanded="false"
                >
                    <span class="sr-only">Open main menu</span>

                    <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="36" height="36" fill="white" />
                        <path
                            d="M4.5 27V24H31.5V27H4.5ZM4.5 19.5V16.5H31.5V19.5H4.5ZM4.5 12V9H31.5V12H4.5Z"
                            fill="black"
                        />
                    </svg>
                </button>
            </div>
            <!-- Section menu -->
            <div
                class="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
                id="navbar-cta"
            >
                <ul
                    class="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse"
                >
                    <li>
                        <a
                            href="#"
                            class="block rounded px-3 py-4 pl-5 text-gray-900 hover:bg-gray-100"
                            >About Me</a
                        >
                    </li>
                    <li>
                        <a
                            href="#"
                            class="block rounded px-3 py-4 pl-5 text-gray-900 hover:bg-gray-100"
                            >Skills</a
                        >
                    </li>
                    <li>
                        <a
                            href="#"
                            class="block rounded px-3 py-4 pl-5 text-gray-900 hover:bg-gray-100"
                            >Project</a
                        >
                    </li>
                    <li>
                        <a
                            href="#"
                            class="block rounded px-3 py-4 pl-5 text-gray-900 hover:bg-gray-100"
                            >Contact Me</a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
