const Button = ({ children, className }) => {


  const classes = {
    [className]: className,
  };

  return (
    <div className={Object.keys(classes).filter(key => classes[key]).join(' ')}>
      <button
        type="button"
        className="text-white bg-gradient-to-br from-green-400 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
