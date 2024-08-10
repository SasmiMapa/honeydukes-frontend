import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
import hogwarts from "../assets/UK.jpg";
import beauxbatons from "../assets/France.jpg";
import ilvermorny from "../assets/USA.jpg";
import castelobruxo from "../assets/Brazil.jpg";
import ugadou from "../assets/Uganda.jpg";
import mahoutokoro from "../assets/Japan.jpg";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  const cities = [
    { name: "Scottish Highlands", image: hogwarts },
    { name: "Pyrenees", image: beauxbatons },
    { name: "Mount Greylock", image: ilvermorny },
    { name: "Amazon", image: castelobruxo },
    { name: "Luna Mountains", image: ugadou },
    { name: "Minami Iwo Jima", image: mahoutokoro },
  ];
  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-[#ca8a04]">
          Tuck Into A Sherbet Lemon Today
        </h1>
        <span className="text-xl">Food is just a charm away!</span>
        <SearchBar
          placeholder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {cities.map((city, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center cursor-pointer hover:text-[#ca8a04]"
            onClick={() => navigate(`/search/${city.name}`)}
          >
            <img
              src={city.image}
              alt={city.name}
              className="w-full h-32 object-cover rounded-lg mb-2"
            />
            <span className="font-bold text-xl">{city.name}</span>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order Sugar Quills Even Faster!
          </span>
          <span>
            Download the Honeydukes App for rapid ordering and personalised
            recommendations
          </span>
          <img src={appDownloadImage} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
