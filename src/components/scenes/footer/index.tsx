const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          {/* <img alt="logo" src={Logo} /> */}
          <div className="flex flex-row w-auto items-center">
            <img alt="logo" src={"/assets/Logo/medlink.png"} className="h-10 w-13" />
            <p className="pl-3 basis-3/5 font-montserrat text-xl font-bold">
              MedLink
            </p>
          </div>

          <p className="my-5 max-w-[100%][3000px]">
            Our research successfully developed MedLink Smart, an Internet of medical things (IoMT) system that integrates MPX5050DP
            (blood pressure measurement), MLX90614 (body temperature measurement), ammd GY-MAX30102 (oxygen saturation and heart rate
            measurement) sensors with ESP32 module for automation in the healthcare sector.
          </p>
          <p>© MedLink All Rights Reserved.</p>
        </div>

        <div className="mt-200 max-w-[800px]basis-1/4 md:mt-0items-right">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5 ">Muhammad Akmal Indratma.</p>
          <p>+62 82157749916</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
