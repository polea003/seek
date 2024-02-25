"use client"
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export function NavigationTabs({ pages }) {
  const path = usePathname()
  const router = useRouter()
  const [value, setValue] = useState(false);

  useEffect(() => {
    const activePage = pages.indexOf(path?.substring(1))
    if (activePage >= 0) setValue(activePage)
    else setValue(false)
  }, [path]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    router.push(`/${pages[newValue]}`)
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="Navigation Tabs">
      {pages.map(page => <Tab key={page} disableRipple label={page} component={Link} href={`/${page}`} />)}
    </Tabs>
  );
}
