import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { IconMoon } from '../icons/moon';
import { IconSun } from '../icons/sun';
import React from 'react';

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
    size="sm"
    className="ml-4"
    variant={"ghost"}

      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
    >
      {resolvedTheme === 'light' ? <IconMoon  /> : <IconSun  />}
    </Button>
  );
};

export default React.memo(ThemeToggle);
