const Button = ({ 
  children, 
  variant = "primary", 
  as: Component = "button",
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-200";
  const variants = {
    primary: "bg-purple-500 text-white hover:bg-blue-600",
    outline: "border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
  };

  return (
    <Component 
      className={`${baseStyles} ${variants[variant]}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;