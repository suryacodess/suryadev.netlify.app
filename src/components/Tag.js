const Tag = (props) => {
  return (
    <div
      className={`tag-container border-[10px] border-black/15 w-max h-[60px] flex justify-center items-center rounded-full`}
    >
      <div
        className={`tag w-full h-full flex items-center justify-center rounded-full px-6 ${props.bg}`}
      >
        <div className="tag-icon">
          <i className={`fa-icon ${props.icon}`}></i>
        </div>
        <div
          className={`tag-text text-[16px] font-[400] poppins text-nowrap ${
            props.color ? props.color : "text-white"
          }`}
        >
          {props.label}
        </div>
      </div>
    </div>
  );
};

export default Tag;
