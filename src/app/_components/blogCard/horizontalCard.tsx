import Image from "next/image";

function HorizontalCard() {
  return (
    <div className="flex">
      {/* blog image */}
      <div className="">
        <Image src="" alt="" />
      </div>
      {/* blog details */}
      <div className="flex flex-col">
        <p></p>
        <span></span>
        {/* blog author details */}
        <div className="flex">
          <Image src="" alt="" />
          <div className="flex flex-col">
            <p></p>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalCard;
