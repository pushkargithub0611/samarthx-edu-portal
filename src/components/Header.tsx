
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <>
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center">
                <span className="text-2xl font-bold">Samarth</span>
                <span className="text-2xl font-bold text-[#F97316]">X</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost">Parents & Students</Button>
              <Button variant="ghost">Support</Button>
              <Button variant="ghost">Search</Button>
              <Button variant="outline">Login</Button>
              <Button>Get a Demo</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-gray-100 border-b">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-2 space-x-6">
            <a href="#" className="text-sm hover:text-primary whitespace-nowrap">Solutions</a>
            <a href="#" className="text-sm hover:text-primary whitespace-nowrap">Dashboards</a>
            <a href="#" className="text-sm hover:text-primary whitespace-nowrap">SamarthX AI</a>
            <a href="#" className="text-sm hover:text-primary whitespace-nowrap">Documents Management</a>
            <a href="#" className="text-sm hover:text-primary whitespace-nowrap">Community & Support</a>
            <a href="#" className="text-sm hover:text-primary whitespace-nowrap">About SamarthX</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
