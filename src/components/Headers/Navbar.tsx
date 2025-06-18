const Navbar = () => {
  return (
    <div className="flex justify-between max-w-screen-xl m-auto items-center">
      <div className="flex items-center gap-3">
        <h3 className="bg-gradient-to-l from-[rgb(113,158,47)] via-[rgb(214,156,19)] to-[rgb(113,158,47)] rounded-md text-white font-bold h-10 pt-2 p-2">
          A
        </h3>
        <div>
          <h2 className="font-bold text-2xl mb-0">AgroVision</h2>
          <p className="mt-0 font-medium  text-[rgb(113,158,47)]  ">Nepal</p>
        </div>
      </div>

      <div className="">
        <ul className="flex gap-8">
          <li>Disease Detection</li>
          <li>Weather</li>
          <li>Market Prices</li>
          <li>Community</li>
          {/* <li></li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
