import StockInput from "./StockInput";

const Hero = ({
  // title = "Stock Sentiment Insights",
  subtitle = "Analyse the impact of sentiment on stock price movements",
}) => {
  return (
    <section className="bg-sky-800 py-12 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          {/* <h1 className="text-3xl text-shadow-lg/30 font-extrabold text-white sm:text-4xl md:text-5xl">
            { title }
          </h1> */}
          <p className="my-4 text-xl text-white">{subtitle}</p>
          <StockInput />
        </div>
      </div>
    </section>
  );
};

export default Hero;
