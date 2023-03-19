import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const LinkIcon = () => {
  // return (<svg width="2500" height="2500" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="h-6 w-6" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>)
  return (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-box-arrow-up-right h-7 w-7 opacity-80 hover:opacity-100 transition duration-300" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"></path><path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"></path></svg>)
}

function isImage(str) {
  const EXTENSIONS = ["png", "jpg", "jpeg", "gif"];
  var split = str.split(".");
  const ext = split[split.length - 1]

  for (let i = 0; i < EXTENSIONS.length; ++i) {
    if (EXTENSIONS[i] == ext) {
      return true;
    }
  }
  return false;
}

export default function Card(props) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  
  const [linkEffect, setLinkEffect] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleLink = () => {
    setLinkEffect(true);
    window.open(`/posts/${props.date}`, "_blank");
    setTimeout(() => setLinkEffect(false), 100);
  };

  let body = props.body;
  const maxStringDisplayLength = 140;
  if (body && body.length > maxStringDisplayLength) {
    body = body.slice(0, maxStringDisplayLength);
  }

  return (
    <React.Fragment>
      {/* Card */}
      <div
        className="w-[19rem] h-[14rem] bg-[rgb(253,209,170)] rounded-3xl 
        overflow-hidden shadow-lg m-4 hover:scale-[1.015] hover:cursor-pointer
        transition duration-200 relative"
        // bg-[rgb(159,241,255)]
      >
        <div className="absolute w-[19rem] h-full" onClick={() => setShowModal(true)}>
          <div className="flex justify-between h-full px-4 pt-4 bg-black bg-opacity-30 hover:bg-opacity-50 transition duration-300">
            <div className="text-slate-200 w-[60%] font-bold text-xl  text-left font-sans">
              {props.title}
            </div>

            <div className="flex flex-row">
              {(props.demo != "") && 
                (
                  <a
                    className={`w-[2rem] h-[2rem] ${
                      linkEffect && "animate-beat"
                    } mr-4 hover:scale-[1.05] transition duration-100`}
                    href={props.demo}
                    target="_blank"
                  >
                    {/* <img src="/LinkIcon.svg" alt="Demo"/> */}
                    {LinkIcon()}
                  </a>
                )
              }

              {(props.github != "") &&
                (
                  <a
                  className={`${linkEffect && "animate-beat"}`}
                  href={props.github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src="/github-24.png" className="m-auto w-[1.7rem] hover:scale-[1.05] transition duration-100"/>
                </a>
                )
              }
            </div>
          </div>
        </div>

        <img
        className={`w-full h-60 object-cover ${
            !loaded && "animate-pulse"
        } `}
        src={props.coverImage}
        alt={props.title}
        onLoad={() => {
            setLoaded(true);
        }}
        />

      </div>

      {/* Modal */}
      <Transition.Root show={showModal} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-50 inset-0 overflow-y-auto"
          open={showModal}
          onClose={() => setShowModal(false)}
        >
          <div
            className="flex items-end justify-center min-h-screen
            pt-4 px-4 pb-20 text-center sm:block sm:p-0"
          >
            {/* Overlay (background) */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div
                className="bg-[rgb(180,242,255)] inline-block justify-between align-bottom rounded-lg 
                text-center overflow-hidden shadow-xl transform transition-all
                sm:my-8 sm:align-middle w-[65vw] px-6" 
                //  bg-[rgb(30,215,248)] h-[80vh] min-h-[50vh]
                // sm:max-w-lg sm:w-full
              >
                <div className="dark:bg-slate-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 items-center">
                  <div className="sm:flex sm:items-start">
                    <div className="w-full  font-sans">
                      <Dialog.Title
                        // ref={titleRef}
                        as="h3"
                        className="mb-5 text-2xl leading-5 font-bold text-[rgb(15,74,93)] dark:text-white not-sr-only"
                      >
                        {props.title}
                      </Dialog.Title>

                      <div className="flex flex-row items-center justify-center">
                        {/* {props.media_type === "image" ? (
                          <img
                            className={`w-[45rem] h-[25rem] object-cover ${
                              !loaded && "animate-pulse"
                            } bg-gray-500`}
                            src={props.coverImage}
                            alt={props.title}
                            onLoad={() => {
                              setLoaded(true);
                            }}
                          />
                        ) : (
                          <div
                            className="relative overflow-hidden w-full"
                          >
                            <iframe
                              title={props.title}
                              src={props.coverImage}
                              // frameBorder={0}
                              allowFullScreen
                              className={`absolute ${
                                !loaded && "animate-pulse"
                              } bg-gray-500 rounded-t-2xl top-0 left-0 w-[45rem] h-[30rem] object-cover`}
                              // Not sure what the dimensions should be. Square? Rectangle?
                              onLoad={() => setLoaded(true)}
                            />
                          </div>
                        )} */}

                        <div className="w-[50%] mb-1">
                          <Slider {...sliderSettings}>
                            {props.modalMedia.map((item, key) => {
                              return (<div key={key}>
                                {
                                  isImage(item) ? 
                                  <img src={item} alt={item} className={`w-[45rem] h-[25rem] object-contain ${
                                    !loaded && "animate-pulse"
                                  } bg-gray-500`}/> :
                                  <iframe src={item} alt={item} className={`w-[27rem] h-[20rem] transform scale-100 origin-top-left ${
                                    !loaded && "animate-pulse"
                                  } `} autoPlay muted loop
                                  onLoad={() => setLoaded(true)} />
                                }
                              </div>)
                            })}
                          </Slider>
                        </div>

                        <br />

                        {/* Project text */}
                        <div className="flex flex-col justify-between w-[50%]">
                            {props.text.map((item, key) => {
                              return (
                                <p key={key} className="ml-5 p-4 text-lg text-[rgb(15,74,93)] font-lightfont dark:text-white not-sr-only">
                                  ⚡{item}
                                </p>
                              )
                            })}
                          <h3 className="ml-5 p-4 text-base text-[rgb(15,74,93)] font-lightfont dark:text-white not-sr-only "><b>Made with:</b> {props.footer}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="dark:bg-[#00142e] px-4 py-3 sm:px-6 sm:flex sm:flex-row">
                  {/* Modal: Open in new tab button */}
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border 
                    border-gray-300 shadow-sm px-4 py-2 bg-[rgb(18,55,86)] text-base font-medium 
                    hover:bg-[rgb(49,109,153)] focus:outline-none focus:ring-2 
                    focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={handleLink}
                  >
                    <div className="">{LinkIcon()}</div>
                  </button>

                  {/* Modal: Close button */}
                  <div className="sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border 
                      items-center
                      border-gray-300 shadow-sm px-4 py-2 bg-[rgb(18,55,86)] text-base font-medium 
                      text-slate-200 hover:bg-[rgb(49,109,153)] focus:outline-none focus:ring-2 
                      focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </React.Fragment>
  );
}