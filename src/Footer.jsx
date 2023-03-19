import React from "react"

export default function Footer() {
    return (
        <footer className="z-[200] w-[100vw] pb-2 flex justify-center">
            <div className="text-white">
                <small>&copy; Copyright {(new Date()).getFullYear()}, Aritra Kar</small>
            </div>
            {/* <canvas id="canvas2" className='z-[200]' width={Math.floor(window.innerWidth * 0.15)} height={Math.floor(window.innerWidth * 0.15)}></canvas> */}
        </footer>
    );
}
