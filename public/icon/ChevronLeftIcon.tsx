import React from "react";

interface Props {
  classname: string;
}
const ChevronLeftIcon: React.FC<Props> = ({ classname }) => {
  return (
    <div>
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={classname}
      >
        <path
          d="M7.58398 10.6667L12.334 15.3334C12.6673 15.6667 13.1673 15.6667 13.5007 15.3334C13.834 15.0001 13.834 14.5001 13.5007 14.1667L9.41732 10.0001L13.5007 5.83341C13.834 5.50008 13.834 5.00008 13.5007 4.66675C13.334 4.50008 13.1673 4.41675 12.9173 4.41675C12.6673 4.41675 12.5007 4.50008 12.334 4.66675L7.58398 9.33341C7.25065 9.75008 7.25065 10.2501 7.58398 10.6667C7.58398 10.5834 7.58398 10.5834 7.58398 10.6667Z"
          fill="#1D242D"
        />
      </svg>
    </div>
  );
};

export default ChevronLeftIcon;
