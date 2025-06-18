const Detection = () => {
  return (
    <div className="text-center mb-10">
      <div>
        <h1 className="text-4xl mt-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[rgb(113,158,47)] to-[rgb(214,156,19)]">
          Instant Crop Disease Detection
        </h1>
        <p className="text-gray-500 font-medium mt-3 text-xl">
          Upload a photo of your crop and get instant AI-powered disease
          diagnosis
          <br />
          with treatment recommendations
        </p>
      </div>
      <div className="border-2 border-dashed border-gray-200 bg-white rounded-2xl p-5 mt-15">
        <div className="bg-gray-300 rounded-full inline-block p-4 ">
          <img src="/camera.svg" className="h-10 w-10" alt="" />
        </div>
        <div className="mt-5">
          <h3 className="font-bold text-xl">Upload Crop Image</h3>
          <p className="font-normal text-gray-400 text-md mt-1">
            Take a clear photo of affected leaves or crops for accurate
            diagnosis
          </p>
          <button className="border border-gray-200 rounded-xl p-2 mt-5 hover:bg-gray-300">
            Choose Image
          </button>
        </div>
      </div>

      <div className="bg-gray-200 text-start p-5 mt-10 rounded-xl border  border-gray-300">
        <ul className="list-disc p-5">
          <h3 className="font-bold text-md">Tips for Better Results</h3>
          <li className="mt-2 font-normal text-gray-500">
            Take photos in good natural lighting
          </li>
          <li className="mt-2 font-normal text-gray-500">
            Focus on affected areas of the plant
          </li>
          <li className="mt-2 font-normal text-gray-500">
            Include both healthy and affected parts when possible
          </li>
          <li className="mt-2 font-normal text-gray-500">
            {" "}
            Ensure the image is clear and not blurry
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Detection;
