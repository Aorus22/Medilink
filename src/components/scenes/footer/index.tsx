const Footer = () => {
  return (
    <footer className="bg-primary-100">
      <div className="justify-content mx-auto gap-16 md:flex flex px-16 py-12">
        <div className="flex-1 w-full">
          <div className="flex flex-col w-auto">
            <div>
              <img alt="logo" src={"/assets/Logo/medlink.png"} className="h-10 w-13" />
              <p className="font-montserrat block text-xl font-bold">
                MedLink
              </p>
            </div>
            <p className="my-5 max-w-[100%][3000px]">
              Our research successfully developed MedLink Smart, an Internet of medical things (IoMT) system that integrates MPX5050DP
              (blood pressure measurement), MLX90614 (body temperature measurement), ammd GY-MAX30102 (oxygen saturation and heart rate
              measurement) sensors with ESP32 module for automation in the healthcare sector.
            </p>
            <p>© MedLink All Rights Reserved.</p>
            <div className="mt-2 font-bold">
              Sponsorship
              <div>
                <img className="h-12" src={"/assets/dynatech logo.png"}/>
              </div>
            </div>
          </div>

        </div>
        {/* <div className="md:mt-0 w-full flex-1 flex flex-col">

        </div> */}

        <div className="w-64 flex flex-col items-end">
          <div>
            <h4 className="font-bold">Contact Us</h4>
            <p className="my-5 ">Muhammad Akmal Indratma.</p>
            <p>+62 82157749916</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
