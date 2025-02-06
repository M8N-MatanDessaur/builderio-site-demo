"use client";
import React, { useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import useBuilderData from "@/hooks/useBuilderData";

interface NavigationItem {
  link: string;
  url: string;
  childlink?: NavigationItem[];
}

function Header() {
  const [activeMenu, setActiveMenu] = useState<NavigationItem | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);

  const { data: headerData } = useBuilderData(
    {
      model: "navigation-model",
    }
  );

  const { data: headerContent } = useBuilderData({
    model: "header-model",
  });

  const navigation = headerData?.[0]?.data?.navigation || [];

  const handleMouseEnter = (menu: NavigationItem) => {
    if (menu.childlink?.length) {
      setActiveMenu(menu);
    } else {
      setActiveMenu(null);
    }
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileActiveMenu(null); // Reset active submenu when closing
  };

  const toggleMobileSubmenu = (itemLink: string) => {
    setMobileActiveMenu(mobileActiveMenu === itemLink ? null : itemLink);
  };

  return (
    <>
      <div className={styles.headerSpacer} />
      <div onMouseLeave={handleMouseLeave} className={styles.headerContainer}>
        <header className={styles.header}>
          <div className={styles.innerHeader}>
            <div className={styles.logoWrapper}>
              <Link href="/">
                <img
                  src={headerContent?.[0]?.data?.logo || "/logo.svg"}
                  alt="Logo"
                  className={`${styles.logo} ${styles.mobileLogo}`}
                />
              </Link>
              <div 
                className={`${styles.hamburgerIcon} ${isMobileMenuOpen ? styles.open : ''}`}
                onClick={toggleMobileMenu}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className={styles.rightSection}>
              <nav className={styles.nav}>
                {navigation.map((item: NavigationItem, index: number) => (
                  <div
                    key={index}
                    className={`${styles.navItem} ${item.childlink && item.childlink.length > 0 ? styles.hasDropdown : ""}`}
                    onMouseEnter={() => handleMouseEnter(item)}
                  >
                    <Link href={item.url || '#'}>
                      {item.link}
                    </Link>
                    {activeMenu === item && item.childlink && item.childlink.length > 0 && (
                      <div className={styles.megaMenu}>
                        <div className={styles.megaMenuContent}>
                          <div className={styles.megaMenuList}>
                            {item.childlink?.map((child, childIndex: number) => (
                              <Link 
                                href={child.url || '#'} 
                                key={childIndex}
                              >
                                {child.link}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className={styles.ctaWrapper}>
                <Link 
                  href={headerContent?.[0]?.data?.ctaurl?.Default || '#'} 
                  className={styles.ctaButton}
                >
                  {headerContent?.[0]?.data?.ctalabel || 'Book Now'}
                </Link>
              </div>
            </div>
          </div>
        </header>
        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            {navigation.map((item: NavigationItem, index: number) => (
              <React.Fragment key={index}>
                <div className={styles.navItem}>
                  {item.childlink && item.childlink.length > 0 ? (
                    <div 
                      className={`${styles.mobileNavLink} ${mobileActiveMenu === item.link ? styles.active : ''}`}
                      onClick={() => toggleMobileSubmenu(item.link)}
                    >
                      {item.link}
                      <span className={styles.mobileArrow} />
                    </div>
                  ) : (
                    <Link 
                      href={item.url || '#'} 
                      onClick={toggleMobileMenu}
                    >
                      {item.link}
                    </Link>
                  )}
                </div>
                {item.childlink && item.childlink.length > 0 && (
                  <div className={`${styles.megaMenuList} ${mobileActiveMenu === item.link ? styles.active : ''}`}>
                    {item.childlink.map((child, childIndex: number) => (
                      <Link 
                        href={child.url || '#'} 
                        key={childIndex}
                        onClick={toggleMobileMenu}
                      >
                        {child.link}
                      </Link>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
