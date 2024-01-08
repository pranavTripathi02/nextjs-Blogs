import Image from "next/image";

function LargeCard() {
  return (
    <div className="flex flex-col">
      {/* blog image */}
      <div className="">
        <Image src="" alt="" />
      </div>
      {/* blog details */}
      <div className="flex flex-col">
        <p></p>
        <span></span>
        {/* blog categories */}
        <div className="flex"></div>
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

export default LargeCard;
