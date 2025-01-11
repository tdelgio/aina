import SourdoughBreadCard from "../items/SourdoughBreadCard";

export const DesignSystem = () => (
  <div className="space-y-8 flex flex-col ">
    <SourdoughBreadCard />
    {/* Heading 1 Style Tests */}
    <div className="space-y-8 mx-auto">
      <h1 className="text-[#D98C3E] font-bold text-6xl xl:text-7xl">
        ĀINA - Heading
      </h1>
      <h1 className="text-[#F4E1C1] font-bold text-6xl xl:text-7xl">
        ĀINA - Heading
      </h1>
      <h1 className="text-[#4A4A4A] font-bold text-6xl xl:text-7xl">
        ĀINA - Heading
      </h1>
      <h1 className="text-[#000000] font-bold text-6xl xl:text-7xl">
        ĀINA - Heading
      </h1>
    </div>

    {/* Subheading Style Tests */}
    <div className="space-y-8 mx-auto">
      <h2 className="text-[#D98C3E] font-semibold text-4xl xl:text-5xl">
        ĀINA - Subheading
      </h2>
      <h2 className="text-[#F4E1C1] font-semibold text-4xl xl:text-5xl">
        ĀINA - Subheading
      </h2>
      <h2 className="text-[#4A4A4A] font-semibold text-4xl xl:text-5xl">
        ĀINA - Subheading
      </h2>
      <h2 className="text-[#000000] font-semibold text-4xl xl:text-5xl">
        ĀINA - Subheading
      </h2>
    </div>

    {/* Paragraph Style Tests */}
    <div className="space-y-8 mx-auto">
      <p className="text-[#D98C3E] text-lg">ĀINA - Paragraph</p>
      <p className="text-[#F4E1C1] text-lg">ĀINA - Paragraph</p>
      <p className="text-[#4A4A4A] text-lg">ĀINA - Paragraph</p>
      <p className="text-[#000000] text-lg">ĀINA - Paragraph</p>
    </div>

    {/* Background and Text Combinations for Testing */}
    <div className="text-center space-y-8">
      <div className="bg-[#D98C3E] py-16">
        <p className="text-[#FFFFFF] font-bold text-6xl xl:text-7xl">ĀINA</p>
        <p className="text-[#FFFFFF] text-lg">ĀINA - Paragraph</p>
      </div>

      <div className="bg-[#F4E1C1] py-16">
        <p className="text-[#000000] font-bold text-6xl xl:text-7xl">ĀINA</p>
        <p className="text-[#000000] text-lg">ĀINA - Paragraph</p>
      </div>

      <div className="bg-[#4A4A4A] py-16">
        <p className="text-[#FFFFFF] font-bold text-6xl xl:text-7xl">ĀINA</p>
        <p className="text-[#FFFFFF] text-lg">ĀINA - Paragraph</p>
      </div>

      <div className="bg-[#000000] py-16">
        <p className="text-[#F4E1C1] font-bold text-6xl xl:text-7xl">ĀINA</p>
        <p className="text-[#F4E1C1] text-lg">ĀINA - Paragraph</p>
      </div>

      <div className="bg-[#D98C3E] py-16">
        <p className="text-[#4A4A4A] font-bold text-6xl xl:text-7xl">ĀINA</p>
        <p className="text-[#4A4A4A] text-lg">ĀINA - Paragraph</p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col mx-auto space-y-4 max-w-sm">
        <button className="bg-[#D98C3E] text-[#FFFFFF] px-6 py-3 rounded-lg text-xl">
          ĀINA - Button
        </button>
        <button className="bg-[#F4E1C1] text-[#000000] px-6 py-3 rounded-lg text-xl">
          ĀINA - Button
        </button>
        <button className="bg-[#4A4A4A] text-[#FFFFFF] px-6 py-3 rounded-lg text-xl">
          ĀINA - Button
        </button>
        <button className="bg-[#000000] text-[#F4E1C1] px-6 py-3 rounded-lg text-xl">
          ĀINA - Button
        </button>
      </div>
    </div>
  </div>
);
