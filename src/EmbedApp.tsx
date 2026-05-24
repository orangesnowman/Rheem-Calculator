import { useEffect, useRef } from 'react';
import RheemWidget from './components/RheemWidget';

export default function EmbedApp() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sendHeight = () => {
      if (containerRef.current) {
        const height = containerRef.current.scrollHeight;
        window.parent.postMessage({ type: 'rheem-widget-resize', height }, '*');
      }
    };

    sendHeight();
    const observer = new ResizeObserver(sendHeight);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full flex items-start justify-center bg-white p-2 md:p-4">
      <RheemWidget />
    </div>
  );
}
