import { Link, useLocation } from "react-router-dom"
import { LayoutDashboard, Archive, Bird } from "lucide-react"

const routes = [
  {
    name: 'Dashboard',
    route: '/dashboard',
    icon: LayoutDashboard,
    iconProps: { size: 20, color: 'rgba(0,0,0,.7)' }
  },
  {
    name: 'Vendors',
    route: '/vendors',
    icon: Bird,
    iconProps: { size: 20, color: 'rgba(0,0,0,.7)' }
  },
  {
    name: 'Products',
    route: '/products',
    icon: Archive,
    iconProps: { size: 20, color: 'rgba(0,0,0,.7)' }
  }
]

function handlePath(path: string) {
  switch (path) {
    case '/': return '';
    case '/dashboard': return 'Dashboard';
    case '/vendors': return 'Vendors';
    case '/products': return 'Products';
    default: return '';

  }
}

function SideBar({ isShow }: { isShow: boolean }) {
  const location = useLocation();

  return (
    <aside className={`${isShow ? 'w-[5%]' : 'w-[20%]'} min-w-[70px] bg-[#f6f8fc] h-[100vh] duration-75`}>
      <ul>
        {routes.map((item, key) => <li
          className={`mb-8 p-4 rounded-md ${handlePath(location.pathname) == item.name && 'bg-black text-white'}`}
          key={key}>
          <Link className="flex items-center gap-4 duration-75 hover:scale-105"
            to={item.route}>  <span className="px-2 py-1 bg-white rounded-md border">{item.icon ? <item.icon {...item.iconProps} /> : ''}</span> {!isShow && item.name}
          </Link>
        </li>)}
      </ul>
    </aside>
  )
}

export default SideBar