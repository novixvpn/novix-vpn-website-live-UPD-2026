// lib/fbpixel.ts

export const FB_PIXEL_ID = '1682612962619444';

export const pageview = () => {
  (window as any).fbq('track', 'PageView');
};

export const event = (name: string, options: Record<string, any> = {}) => {
  (window as any).fbq('track', name, options);
};
