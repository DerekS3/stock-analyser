const Footer = () => {
  return (
    <footer className="bg-sky-800 border-t border-sky-300 py-2">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <p className="text-white text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <span className="hidden md:inline">Stock Sentiment Analyser</span>
          </p>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-white text-sm hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
