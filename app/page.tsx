import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div className="border-b-[1px] mx-auto w-fit gap-[45px] flex flex-row border-gray-200 justify-between">
  <h2 className="font-semibold h-fit border-blue-500 text-[40px]">Savefrom.net</h2>
  <div className=" flex flex-row  items-center border-red-500 gap-[20px]">
    <h2 className="h-fit border-green-500">Youtube</h2>
    <h2 className="h-fit border-violet-500">Facebook</h2>
    <h2 className="h-fit border-yellow-500">Instagram</h2>
    <h2 className="h-fit border-black">Twitter</h2>
    <h2 className="h-fit border-pink-500">TikTok</h2>
    <h2 className="h-fit border-orange-500">Install</h2>
  </div>
</div>
<div className="bg-red-600 h-[100px] w-full mx-[30px] flex border"></div>
    </section>
  );
}
