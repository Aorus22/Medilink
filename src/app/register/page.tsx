import Link from "next/link";

const Register = () => {
  return (
    <div className="flex flex-row font-manrope">
      <div className="w-1/2 h-screen bg-primary-100"></div>
      <div className="flex flex-row w-1/2 h-screen">
        <div className="w-10 h-screen">
          {/* <Link to="/login"> */}
          {/*   <div className="rounded-md hover:bg-text-box m-5 p-2 w-fit"> */}
          {/*     <FontAwesomeIcon icon={faAnglesLeft} size="2xl" /> */}
          {/*   </div> */}
          {/* </Link> */}
        </div>
        <div className="w-full h-screen">
          <div className="flex flex-col justify-center items-center w-full h-full px-10">
            {/* <div className="flex self-center py-10"> */}
            {/*   <img src={logo} alt="salma" className=" w-52" /> */}
            {/* </div> */}
            <div className="flex flex-col justify-center w-2/3 h-3/4">
              <h1 className="font-semibold text-lg text-gray-400">
                Let's sign in!
              </h1>
              <h1 className="font-bold text-3xl">Create your account</h1>
              <form
                // onSubmit={handleSubmit}
                className="flex flex-col pt-10"
                autoComplete="off"
              >
                <label className="pb-2 text-md">Name</label>
                <input
                  className={`w-full h-10 pl-2 border-2 bg-text-box rounded-md text-md `}
                  // value={values.username}
                  // onChange={handleChange}
                  // id="username"
                  // type="username"
                  // placeholder="Enter your name"
                  // onBlur={handleBlur}
                />
                {/* {errors.username && touched.username && ( */}
                {/*   <p className="text-red-500 pt-1">{errors.username}</p> */}
                {/* )} */}

                <label className="pt-5 pb-2 text-md">E-mail</label>
                <input
                  className={`w-full h-10 pl-2 border-2 bg-text-box rounded-md text-md `}
                  // value={values.email}
                  // onChange={handleChange}
                  // id="email"
                  // type="email"
                  // placeholder="Enter your email"
                  // onBlur={handleBlur}
                />
                {/* {errors.email && touched.email && ( */}
                {/*   <p className="text-red-500 pt-1">{errors.email}</p> */}
                {/* )} */}
                <label className="pt-5 pb-2 text-md">Password</label>
                <input
                  className={`w-full h-10 pl-2 border-2 bg-text-box rounded-md text-md `}
                  // value={values.password}
                  // onChange={handleChange}
                  // id="password"
                  // type="password"
                  // placeholder="Enter your password"
                  // onBlur={handleBlur}
                />
                {/* {errors.password && touched.password && ( */}
                {/*   <p className="text-red-500 pt-1">{errors.password}</p> */}
                {/* )} */}
                <label className="pt-5 pb-2 text-md">Confirm Password</label>
                <input
                  className={`w-full h-10 pl-2 border-2 bg-text-box rounded-md text-md `}
                  // value={values.confirmPassword}
                  // onChange={handleChange}
                  // id="confirmPassword"
                  // type="password"
                  // placeholder="Confirm your password"
                  // onBlur={handleBlur}
                />
                {/* {errors.confirmPassword && touched.confirmPassword && ( */}
                {/*   <p className="text-red-500 pt-1">{errors.confirmPassword}</p> */}
                {/* )} */}
                <button
                  type="submit"
                  // disabled={isSubmitting}
                  className="w-full h-12 rounded-md mt-8 self-center text-xl bg-primary-100 hover:bg-teal-400 disabled:opacity-75"
                >
                  Register
                </button>
                <Link href="/login">
                  <p className="my-2 text-sm underline cursor-pointer hover:text-primary-100">
                    I already have an account
                  </p>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
