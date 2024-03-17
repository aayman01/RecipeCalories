import './Banner.css';
const Banner = () => {
    return (
      <div className="bg-image bg-no-repeat bg-center bg-cover rounded-3xl">
        <div className="flex flex-col justify-center items-center h-[550px] px-52">
          <h1 className="text-white mb-6 text-5xl font-bold text-center">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className="text-white text-center text-lg font-normal mb-9">
            Start your culinary adventure customized just for you with our
            bespoke cooking classes, where expert chefs curate unique menus
            tailored to your tastes and skill level. Unleash your inner chef and
            elevate your cooking prowess with personalized guidance in a
            welcoming and inspiring environment
          </p>
          <div className="space-x-4">
            <button className="btn btn-success rounded-3xl bg-[#0BE58A]">
              Explore Now
            </button>
            <button className="btn btn-outline btn-primary rounded-3xl border-white text-white">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    );
};

export default Banner;