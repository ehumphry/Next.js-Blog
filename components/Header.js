function Header() {
  return (
    <div className="flex justify-between my-8 items-center">
      <h1 className="font-medium text-xl">Evan's Progress</h1>
      <div>
        <a
          href="https://www.linkedin.com/in/echumphry"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/ehumphry"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </div>
  );
}

export default Header;
