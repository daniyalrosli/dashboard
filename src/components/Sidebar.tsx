import Link from "next/link";

const navItems = [
  { name: "Dashboard", href: "/" },
  { name: "Analytics", href: "/analytics" },
  { name: "Settings", href: "/settings" },
];

export function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white shadow-md p-5">
      <h2 className="text-xl font-bold mb-8">Dashboard</h2>
      <nav>
        {navItems.map((item) => (
          <Link key={item.name} href={item.href} className="block mb-4 text-gray-700 hover:text-blue-600">
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}