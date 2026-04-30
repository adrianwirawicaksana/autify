export function AvatarAnimationStyles() {
  return (
    <style>{`
      @keyframes rgb-spin {
        to { transform: rotate(360deg); }
      }
      @keyframes rgb-glow {
        0%   { box-shadow: 0 0 10px 4px rgba(255, 0, 100, 0.65); }
        25%  { box-shadow: 0 0 10px 4px rgba(0, 255, 100, 0.65); }
        50%  { box-shadow: 0 0 10px 4px rgba(0, 180, 255, 0.65); }
        75%  { box-shadow: 0 0 10px 4px rgba(180, 0, 255, 0.65); }
        100% { box-shadow: 0 0 10px 4px rgba(255, 0, 100, 0.65); }
      }
      @keyframes vip-glow {
        0%, 100% { box-shadow: 0 0 6px 2px rgba(255,200,0,0.9), 0 0 12px 4px rgba(255,150,0,0.5); }
        50%       { box-shadow: 0 0 10px 4px rgba(255,230,0,1), 0 0 20px 8px rgba(255,180,0,0.6); }
      }
      @keyframes vip-badge-pulse {
        0%, 100% { transform: translateX(-50%) scale(1); }
        50%       { transform: translateX(-50%) scale(1.08); }
      }
      .avatar-rgb-wrap {
        position: relative;
        width: 140px;
        height: 140px;
        border-radius: 9999px;
        animation: rgb-glow 3s linear infinite;
      }
      .avatar-rgb-wrap::before {
        content: '';
        position: absolute;
        inset: -3px;
        border-radius: 9999px;
        background: conic-gradient(
          from 0deg,
          #ff0000, #ff7700, #ffff00, #00ff00,
          #00ffff, #0000ff, #ff00ff, #ff0000
        );
        animation: rgb-spin 2s linear infinite;
        z-index: 0;
      }
      .avatar-rgb-inner {
        position: relative;
        z-index: 1;
        width: 100%;
        height: 100%;
        border-radius: 9999px;
        overflow: hidden;
        border: 2px solid white;
      }
    `}</style>
  );
}