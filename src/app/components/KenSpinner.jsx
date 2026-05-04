import React from "react";

const KenSpinner = ({
  size = "md",
  color = "blue",
  fullScreen = false,
  type = "spinner", // spinner | progress
  progress = 0, // 0 - 100
}) => {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-4",
    lg: "h-12 w-12 border-4",
    xl: "h-16 w-16 border-[6px]",
  };

  const colorClasses = {
    blue: "border-blue-500 bg-blue-500",
    red: "border-red-500 bg-red-500",
    green: "border-green-500 bg-green-500",
    white: "border-white bg-white",
    gray: "border-gray-500 bg-gray-500",
  };

  const spinner = (
    <div
      className={`
        ${sizeClasses[size]}
        ${colorClasses[color].split(" ")[0]}
        border-t-transparent
        rounded-full
        animate-spin
      `}
    />
  );

  const progressBar = (
    <div className="w-full max-w-md">
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-300 ${
            colorClasses[color].split(" ")[1]
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-sm mt-1 text-center">{progress}%</p>
    </div>
  );

  const content = type === "progress" ? progressBar : spinner;

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        {content}
      </div>
    );
  }

  return content;
};

export default KenSpinner;


// 🎯 Usage Summary
// Use Case	Code
// Normal	<KenSpinner />
// Large	<KenSpinner size="lg" />
// Button	<KenSpinner size="sm" color="white" />
// Full Screen	<KenSpinner size="xl" fullScreen />

