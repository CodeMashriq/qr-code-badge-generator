import MainContent from "@/components/MainContent";
import Steps from "@/components/Steps";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-12 gap-y-8 justify-items-center py-[5%]">
        <p className="col-span-12 text-[0.8rem] text-C1 font-semibold bg-C2 py-2 px-3 border border-transparent rounded-full">FLOWCODE IS A BEST DYNAMIC QR CODE GENERATOR</p>
        <p className="col-span-12 text-6xl font-black">Create a QR code in 60 seconds</p>
      </div>
      <Steps />
      <MainContent />
    </main>
  )
}
