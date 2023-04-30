import React from "react";

const FAQ = () => {
  return (
    // <div className="bg-black text-white mx-auto">
    //   <div className="max-w-[90%] mx-auto">
    //     <h1 className="font-bold text-4xl">
    //       3 Easy Step to Create & Selling Your NFTs.
    //       <span>
    //         <img src="/images/title-icon2.png" alt="" className="inline" />
    //       </span>
    //     </h1>
    //     <div className="flex">
    //       <div>
    //         <h2></h2>
    //       </div>
    //       <div>
    //         <video className="" controls>
    //           <source src="/images/faqVideo.mp4" type="video/mp4" />
    //           Your browser does not support the video tag.
    //         </video>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="flex flex-col items-center bg-black text-white py-20">
      <div className="w-[90%]">
        <div className="pb-4">
          <h1 className="font-bold text-4xl w-[40%] leading-snug">
            3 Easy Step to Create &amp; Selling Your NFTs.
            <span>
              <img
                decoding="async"
                className="inline"
                src="https://themexriver.com/appilo-theme/nft/wp-content/uploads/sites/60/2022/03/title-icon2.png"
              />
            </span>
          </h1>
        </div>
        {/* <div className="flex justify-between items-start mt-10">
          <div>
            <div>
              <div>
                <div className="mb-5 flex items-center gap-6">
                  <span>01</span>
                  <button className="bg-[#131923] pt-7 px-6 pb-5 rounded">
                    Create your Account &amp; Add wallet
                    <span className="ml-10">▼</span>
                  </button>
                </div>
                <div className="hidden">
                  <div>
                    As a pleasant surprise for crypto fans, a unique “Cola Can”
                    is capturing the attention of guests at the acclaimed Art
                    Now Event staged at the historic Raffles Arcade, Singapore.
                    Art Now is a Can you imagine a DogeCola giant piece of art?
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-5 flex items-center gap-6 ">
                  <span>02</span>
                  <button className="bg-[#131923] pt-7 px-6 pb-5 rounded">
                    Create your NFT's &amp; List them for Sale
                    <span className="ml-3">▼</span>
                  </button>
                </div>
                <div className="hidden">
                  <div>
                    As a pleasant surprise for crypto fans, a unique “Cola Can”
                    is capturing the attention of guests at the acclaimed Art
                    Now Event staged at the historic Raffles Arcade, Singapore.
                    Art Now is a Can you imagine a DogeCola giant piece of art?{" "}
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-5 flex items-center gap-6">
                  <span>03</span>
                  <button className="bg-[#131923] pt-7 px-6 pb-5 rounded">
                    Now Sale your items &amp; Earn Rewards{" "}
                    <span className="ml-3">▼</span>
                  </button>
                </div>
                <div>
                  <div className="hidden">
                    As a pleasant surprise for crypto fans, a unique “Cola Can”
                    is capturing the attention of guests at the acclaimed Art
                    Now Event staged at the historic Raffles Arcade, Singapore.
                    Art Now is a Can you imagine a DogeCola giant piece of art?{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div>
                <img
                  decoding="async"
                  src="https://themexriver.com/appilo-theme/nft/wp-content/uploads/sites/60/2022/03/video.png"
                  alt=""
                />
              </div>
              <div>
                <a href="https://www.youtube.com/watch?v=NNQLJcJEzv0">
                  <i></i>
                </a>
              </div>
            </div>
          </div>
        </div> */}
        <div
          className="p-4  rounded-lg md:p-8  flex justify-between"
          id="faq"
          role="tabpanel"
          aria-labelledby="faq-tab"
        >
          <div
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classes="bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            data-inactive-classes="text-gray-500 dark:text-gray-400"
          >
            <h2 id="accordion-flush-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                data-accordion-target="#accordion-flush-body-1"
                aria-expanded="true"
                aria-controls="accordion-flush-body-1"
              >
                <span>What is Flowbite?</span>
                <svg
                  data-accordion-icon
                  className="w-6 h-6 rotate-180 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-1"
              className="hidden"
              aria-labelledby="accordion-flush-heading-1"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components
                  built on top of Tailwind CSS including buttons, dropdowns,
                  modals, navbars, and more.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to{" "}
                  <a
                    href="/docs/getting-started/introduction/"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    get started
                  </a>{" "}
                  and start developing websites even faster with components on
                  top of Tailwind CSS.
                </p>
              </div>
            </div>
            <h2 id="accordion-flush-heading-2">
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                data-accordion-target="#accordion-flush-body-2"
                aria-expanded="false"
                aria-controls="accordion-flush-body-2"
              >
                <span>Is there a Figma file available?</span>
                <svg
                  data-accordion-icon
                  className="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-2"
              className="hidden"
              aria-labelledby="accordion-flush-heading-2"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is first conceptualized and designed using the Figma
                  software so everything you see in the library has a design
                  equivalent in our Figma file.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out the{" "}
                  <a
                    href="https://flowbite.com/figma/"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Figma design system
                  </a>{" "}
                  based on the utility classes from Tailwind CSS and components
                  from Flowbite.
                </p>
              </div>
            </div>
            <h2 id="accordion-flush-heading-3">
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                data-accordion-target="#accordion-flush-body-3"
                aria-expanded="false"
                aria-controls="accordion-flush-body-3"
              >
                <span>
                  What are the differences between Flowbite and Tailwind UI?
                </span>
                <svg
                  data-accordion-icon
                  className="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-3"
              className="hidden"
              aria-labelledby="accordion-flush-heading-3"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  The main difference is that the core components from Flowbite
                  are open source under the MIT license, whereas Tailwind UI is
                  a paid product. Another difference is that Flowbite relies on
                  smaller and standalone components, whereas Tailwind UI offers
                  sections of pages.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  However, we actually recommend using both Flowbite, Flowbite
                  Pro, and even Tailwind UI as there is no technical reason
                  stopping you from using the best of two worlds.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Learn more about these technologies:
                </p>
                <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                  <li>
                    <a
                      href="https://flowbite.com/pro/"
                      className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Flowbite Pro
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindui.com/"
                      rel="nofollow"
                      className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Tailwind UI
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <img
                  decoding="async"
                  src="https://themexriver.com/appilo-theme/nft/wp-content/uploads/sites/60/2022/03/video.png"
                  alt=""
                />
              </div>
              <div>
                <a href="https://www.youtube.com/watch?v=NNQLJcJEzv0">
                  <i></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
