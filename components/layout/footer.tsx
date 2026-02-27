export default function Footer() {
  return (
    <footer className="bg-[#A7B18E] text-neutral-900 font-style">
      <div className="mx-auto max-w-[1440px] px-4 py-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-12 gap-8 text-sm">
          
          <div className="col-span-3">
            <p className="font-medium mb-4 uppercase">Menu</p>
            <ul className="space-y-2">
              <li>Our Story</li>
              <li>Villa Types</li>
              <li>Services</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="col-span-4">
            <p className="font-medium mb-4 uppercase">Address</p>
            <p className="leading-relaxed">
              Sunset Road, Bali <br />
              Indonesia
            </p>
          </div>

          <div className="col-span-3">
            <p className="font-medium mb-4 uppercase">Contacts</p>
            <p>
              +62 812 3456 7890 <br />
              +62 812 3456 7890 <br />
              hello@nemusayavilla.com
            </p>
          </div>

          <div className="col-span-2">
            <p className="font-medium mb-4 uppercase">Social</p>
            <ul className="space-y-2">
              <li>Instagram</li>
              <li>Tiktok</li>
            </ul>
          </div>

        </div>

        {/* Big Brand */}
        <div className="">
          <h2 className="font-style text-[64px] md:text-[9.26em] text-white font-light opacity-50">
            NEMU SAYA VILLA
          </h2>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-between text-xs text-neutral-700">
          <p>© NemuSaya. All rights reserved 2026.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
