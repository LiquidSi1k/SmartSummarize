import { promptLogo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <div className="flex items-center">
          <img
            src={promptLogo}
            alt="AI-Sumz logo"
            className="object-contain"
            height={30}
            width={30}
          />
          <span className="px-3 font-inter font-medium">SmartSummarize</span>
        </div>
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/LiquidSi1k/SmartSummarize")
          }
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text ">
        Masterful Summarization with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
        Elevate your reading experience with SmartSummarize, the open-source
        article summarizer that wields the power to distill sprawling articles
        into crystal-clear and brilliantly concise summaries.
      </h2>
    </header>
  );
};

export default Hero;
