import { NavLink } from "react-router-dom";
import { title } from "../services/title";
const SomeThingErrorPage = ({ error, resetErrorBoundary }) => {
  console.log("error", error)
  return (
    <div>
      <div className="bg-gradient-to-r from-purple-300 to-blue-200">
        <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
            <div className="border-t border-gray-200 text-center pt-8">
              <h1 className="text-6xl font-bold text-purple-400 m-5">{title.Somethingwentwrong}</h1>
              {/* <h1 className="text-6xl font-medium py-8">oops! Page not found</h1> */}
              <p className="text-2xl pb-8 px-12 font-medium">
                {title.PleaseTryAgain}
              </p>
              <button className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
                <NavLink to="/">{title.Home}</NavLink>
              </button>
              <button className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-semibold px-6 py-3 rounded-md">
                {title.ContactUs}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SomeThingErrorPage;
