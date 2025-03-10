import { useState, useRef } from "react";
import {  NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"
import styles from "./SidebarNavigation.module.css";

// import styles from "./SidebarNavigation.module.css";

const menuItems = [
  { title: "Personal Protective Equipment (PPE)", href: "/product/ppe" },
  { title: "Lifting & Rigging", href: "/product/lifting-rigging" },
  { title: "Industrial Oil & Chemicals", href: "/product/industrial-oil-chemicals" },
  { title: "Electrical & Lighting", href: "/product/electrical-lighting" },
  { title: "Rotary Equipment", href: "/product/rotary-equipment" },
  { title: "Industrial Tools & Contractor Equipment", href: "/product/industrial-tools" },
  {
    title: "Vehicle & Machinery",
    submenu: [
      { title: "Vehicle Category 1", href: "/vehicles/category-1" },
      { title: "Vehicle Category 2", href: "/vehicles/category-2" },
      { title: "Vehicle Category 3", href: "/vehicles/category-3" },
      { title: "Vehicle Category 4", href: "/vehicles/category-4" },
    ],
  },
  { title: "Cleaning & Hygiene", href: "/product/cleaning-hygiene" },
  { title: "Industrial Valves", href: "/product/industrial-valves" },
  { title: "Water Treatment", href: "/product/water-treatment" },
];

export default function SidebarNavigation({toggleMenu}) {
  const [expandedItem, setExpandedItem] = useState(null);
  const menuRefs = useRef({});
  const navigate = useNavigate();

  
    const toggleDropdown = () => {
        navigate('/member/dashboard');
    };
    

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebar}>
        {menuItems.map((item) => (
          <div
            key={item.title}
            className={styles.menuItem}
            onMouseOverCapture={(e) => setExpandedItem(item.title)}
            onMouseLeave={() => setExpandedItem(null)}
            // onClick ={toggleDropdown}
            ref={(el) => (menuRefs.current[item.title] = el)}
          >
            <div className={styles.menuTitle} onClick={toggleMenu}>
              <span className={item.title === "Vehicle & Machinery" ? styles.activeText : ""} >
              <NavLink key={item.title} to={item.href} className={styles.menutitleText}>
                    {item.title}
                  </NavLink>
              </span>
              {/* {item.submenu && <ChevronRight className={styles.icon} />} */}
            </div>
            {expandedItem === item.title && item.submenu && menuRefs.current[item.title] && (
              <div
                className={styles.submenuSidebar}
                style={{
                  top: menuRefs.current[item.title].offsetTop + 'px',
                }}
              >
                {item.submenu.map((subItem) => (
                  <NavLink key={subItem.title} to={subItem.href} className={styles.submenuItem}>
                    {subItem.title}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
