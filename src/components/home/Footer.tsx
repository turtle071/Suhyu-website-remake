export default function Footer() {
  return (
    <footer className="bg-zinc-900 pb-[20px] ]">
      <div className="bg-zinc-900 pb-[50px] flex gap-[100px]">
        <div className="pl-[40px] xl:pl-[300px] pt-[40px] md:pl-[40px] sm:pl-[30px]">
          <p className="text-gray-400 font-bold">SUHYU</p>
          <a href="/support">
            <p className="text-gray-200 pt-[10px] pb-[10px] hover:text-gray-400">Support Server</p>
          </a>
          <a href="/github">
            <p className="text-gray-200 pb-[10px] hover:text-gray-400">Github</p>
          </a>
          <a href="/creator">
            <p className="text-gray-200 hover:text-gray-400">Developer</p>
          </a>
        </div>
        <div className="pt-[40px]">
          <p className="text-gray-400 font-bold">COMPANY</p>
          <a href="">
            <p className="text-gray-200 pt-[10px] pb-[10px] hover:text-gray-400">Privacy policy</p>
          </a>
          <a href="">
            <p className="text-gray-200 pb-[10px] hover:text-gray-400">Terms of Service</p>
          </a>
          <a href="">
            <p className="text-gray-200 hover:text-gray-400">Contact</p>
          </a>
        </div>
      </div>
      <div className="text-center text-gray-400">
        <p>© 2022 Suhyu. All rights reserved.</p>
      </div>
    </footer>
  );
}
