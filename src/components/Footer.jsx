import React from "react";

function Footer() {
  return (
    <>
      <div className="footer bg-[#171717]">
        <div className="wrap flex justify-between items-center px-12 text-white font-bold py-6 tl:px-4 tl:py-4 ">
          <h1 className="text-3xl">Tifeh</h1>
          <div className="flex gap-4 cursor-pointer ">
          <a href="https://twitter.com/Kvngtifeh01" target="_blank">
              <i className="fa-brands fa-twitter border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>

           <a href="https://api.whatsapp.com/send?phone=09162484365" target="_blank">
            <i className="fa-brands fa-whatsapp border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
          </a>

          <a href="tel:09162484365">
            <i className="fa-solid fa-phone border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
          </a>




            <a href="https://www.instagram.com/kvng_tifeh_" target="_blank">
              <i className="fa-brands fa-instagram border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a href="https://github.com/tifeh13" target="_blank">
              <i className="fa-brands fa-github border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
