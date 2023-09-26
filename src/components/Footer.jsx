import React from "react";

function Footer() {
  return (
    <>
      <div className="footer bg-[#171717]">
        <div className="wrap flex justify-between items-center px-12 text-white font-bold py-6 tl:px-4 tl:py-4 ">
          <h1 className="text-3xl">Folorunsho</h1>
          <div className="flex gap-4 cursor-pointer ">
          <a href="https://twitter.com/sunepafolksy" target="_blank">
              <i className="fa-brands fa-twitter border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>

           <a href="https://api.whatsapp.com/send?phone=08104941162" target="_blank">
            <i className="fa-brands fa-whatsapp border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
          </a>

          <a href="tel:08104941162">
            <i className="fa-solid fa-phone border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
          </a>


            <a href="https://www.instagram.com/akinlose_sunday" target="_blank">
              <i className="fa-brands fa-instagram border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a href="https://github.com/donfolksy" target="_blank">
              <i className="fa-brands fa-github border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
